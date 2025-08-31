import { LandingLayout } from '@/equix/Landing/LandingLayout';
import { ContactSection } from '../../components/ContactSection';
import { FeaturesSection } from '../../components/FeaturesSection';
import { getDictionary } from '../../dictionaries';

interface Props {
  params: Promise<{ lang: 'en' | 'ru' }>;
}

const Page = async ({ params }: Props) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <LandingLayout
      sections={[
        {
          heading: dict.profile.contact.title,
          children: (
            <>
              <p>{dict.profile.contact.description}</p>
              <ol>
                {dict.profile.contact.services.map((service, index) => (
                  <li key={index}>
                    {index + 1}. {service}
                  </li>
                ))}
              </ol>
              {dict.profile.contact.companyDescription}
            </>
          ),
        },
        {
          heading: dict.profile.contact.advantages,
          children: <FeaturesSection lang={lang} />,
        },
        {
          heading: dict.profile.contact.cooperation,
          children: <ContactSection lang={lang} />,
        },
      ]}
    />
  );
};

export default Page;
