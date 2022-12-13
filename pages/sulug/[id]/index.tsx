import { useRouter } from "next/router";

const sulug = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <div>
      <p>Sulug: {id}</p>
    </div>
  );
};

export default sulug;
