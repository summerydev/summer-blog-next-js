import BorderRadiusBox from "components/BorderRadiusBox";
import Container from "components/Container";
import Image from "next/image";
import { stack } from "data/data";

export default function Profile() {
  const customMeta = {
    title: "Summer ✨ Frontend Engineer",
    description: "Hello 👋 I'm Summer",
  };

  const email = "summery.dev@gmail.com";

  const copy = () => {
    window.navigator.clipboard.writeText(email);
  };

  return (
    <>
      <Container customMeta={customMeta}>
        <br />
        <div className={`text-center font-mono text-5xl font-extrabold`}>
          🚧 개발중 🚜
        </div>
        <br />
        <div className={`space-y-5`}>
          <BorderRadiusBox title={"Profile"} width={`w-fit`} height={`h-fit`}>
            <div>🧑‍💻 Summer</div>
            <div>
              📮{" "}
              <span
                onClick={copy}
                className={``}
              >
                {email}
              </span>
            </div>
          </BorderRadiusBox>
          <BorderRadiusBox
            title={"Skill Stack"}
            width={`w-fit`}
            height={`h-fit`}
          >
            <div className={`space-x-2`}>
              {stack.map((el) => (
                <div key={el.name} className={`flex flex-row m-0`}>
                  <span>
                    <Image
                      src={el.svg}
                      alt={el.name}
                      width={`20`}
                      height={`20`}
                    ></Image>
                  </span>
                  <span className="ml-1 text-gray-800">{el.name}</span>
                </div>
              ))}
            </div>
          </BorderRadiusBox>
        </div>
      </Container>
    </>
  );
}
