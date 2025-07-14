import { useRouter } from "next/router";
import { EntitiesEditor } from "../../components/EntitiesEditor";

const Page = () => {
  const router = useRouter();
  const { entitiesName } = router.query;
  
  return (
    entitiesName &&
    router.asPath && (
      <EntitiesEditor
        entitiesName={entitiesName as string}
        entitiesEndpoint={String(router.asPath.slice(1))}
      />
    )
  );
};

export default Page;
