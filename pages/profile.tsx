import BorderRadiusBox from "components/BorderRadiusBox";
import Container from "components/Container";
import Image from "next/image";
import { stack } from "data/metadata";

export default function Profile() {
  const customMeta = {
    title: "Summer ✨ Frontend Engineer",
    description: "Hello 👋 I'm Summer",
  };
  
  return (
    <>
      <Container customMeta={customMeta}>
        <br />
        <BorderRadiusBox width={`w-fit`} height={`h-fit`}>
          {stack.map((el) => (
            <Image
              src={el.svg}
              alt={el.name}
              width={`30`}
              height={`30`}
            ></Image>
          ))}
        </BorderRadiusBox>
      </Container>
    </>
  );
}
