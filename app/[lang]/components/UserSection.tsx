import { Box, Card } from '@/equix/components/Box';
import { Col, Row } from '@/equix/components/Flex';
import { Input } from '@/equix/components/Input';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDictionary } from '../useDictionary';

interface Props {
  user: any;
}

export const UserSection: FC<Props> = props => {
  const { user } = props;
  const { dictionary } = useDictionary();

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [role, setRole] = useState(user.role || '');

  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push('/auth');
  };

  const handleContinue = async () => {
    if (user) {
      const res = await fetch(`/api/users/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ name, email, phone, role }),
      });

      if (res) {
        if (role === 'it') router.push('/pricing');

        if (role === 'non-it') router.push('/profile/contact');
      }
    }
  };

  if (!dictionary) return null;

  return (
    <Col className="gap-4 pb">
      <Row>
        {dictionary.user.loggedInAs} {user.email}
        <Box onClick={handleLogout} isInline>
          {dictionary.user.logout}
        </Box>
      </Row>
      <Row className="flex-wrap sm:flex-nowrap">
        <Card className="w-[304px] shrink-0">
          <Row className="justify-between w-full">
            {dictionary.user.fillData}
          </Row>
          <Input
            label={dictionary.user.fullName}
            value={name}
            onChange={setName}
          />
          <Input
            type="email"
            value={email}
            onChange={setEmail}
            label={dictionary.user.email}
          />
          <Input
            type="tel"
            value={phone}
            onChange={setPhone}
            label={dictionary.user.phone}
          />
        </Card>
        <Card className="w-full">
          {dictionary.user.learnMore}
          <Row className="h-full flex-wrap sm:flex-nowrap">
            {[
              {
                role: 'it',
                name: dictionary.user.roles.it.name,
              },
              {
                role: 'non-it',
                name: dictionary.user.roles.nonIt.name,
              },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => setRole(item.role)}
                className={`border-2 rounded sm:h-full overflow-hidden relative ${role === item.role ? 'border-accent' : ''}`}
              >
                <Image
                  src={`/${item.role}.jpg`}
                  height="200"
                  width="200"
                  className="w-full h-full object-cover brightness-[35%]"
                  alt=""
                />
                <Box className="absolute left-0 bottom-0 text-white">
                  {item.name}
                </Box>
              </div>
            ))}
          </Row>
        </Card>
      </Row>
      {name && phone && role ? (
        <Box onClick={handleContinue} className="border">
          {dictionary.user.continue}
        </Box>
      ) : null}
    </Col>
  );
};
