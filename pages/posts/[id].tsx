import { useRouter } from "next/router";

export default function firstPost() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <div>post number : {pid}</div>
      
    </>
  );
}
