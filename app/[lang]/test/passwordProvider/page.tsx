import { ErrorPage } from "@/equix/components/ErrorPage";
import { PasswordProvider } from "@/equix/components/PasswordProvider";
import { getDictionary } from "../../dictionaries";
import { FC } from "react";

interface Props {
  params: { lang: string };
}

const Page: FC<Props> = async (props) => {
  const {
    params: { lang },
  } = props;
  const dictionary = await getDictionary(lang);

  return (
    <PasswordProvider password="12345678" message={dictionary.message}>
      <ErrorPage />
    </PasswordProvider>
  );
};

export default Page;
