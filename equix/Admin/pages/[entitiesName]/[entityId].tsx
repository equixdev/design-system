import { useRouter } from "next/router";
import { EntityEditor } from "../../components/EntityEditor";

const Page = () => {
  const router = useRouter();
  const { entitiesName, entityId } = router.query;

  return (
    entitiesName &&
    entityId && (
      <EntityEditor
        entitiesName={entitiesName as string}
        entityId={entityId as string}
        entityEndpoint={undefined}
      />
    )
  );
};

export default Page;
