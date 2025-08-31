'use client';

import { LandingLayout } from '@/equix/Landing/LandingLayout';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PaidSections } from '../components/paidSections';
import { UserSection } from '../components/UserSection';
import { useDictionary } from '../useDictionary';

const Page = () => {
  const router = useRouter();
  const { dictionary } = useDictionary();

  const [user, setUser] = useState<any>();

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId');

      if (!userId) {
        router.push('/auth');

        return;
      }

      if (userId) {
        const res = await fetch(`/api/users/${userId}`);

        if (!res.ok) {
          router.push('/auth');

          return;
        }

        const user = await res.json();

        setUser(user);
      }
    };

    fetchUser();
  }, [router]);

  const getSections = () => {
    if (!user) return [{ children: dictionary?.auth.loading || 'Загрузка...' }];

    if (user.role === 'paid') return PaidSections();

    return [
      {
        heading: dictionary?.profile.title || 'Личный кабинет',
        children: <UserSection user={user} />,
      },
    ];
  };

  if (!dictionary) return null;

  return <LandingLayout className="justify-center" sections={getSections()} />;
};

export default Page;
