import BorderRadiusBox from "components/BorderRadiusBox";
import Container from "components/Container";
import Image from "next/image";
import { stack, social } from "data/data";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function Profile() {
  const customMeta = {
    title: "Summer ✨ Frontend Engineer",
    description: "Hello 👋 I'm Summer",
  };

  const email = "summery.dev@gmail.com";

  const copy = () => {
    window.navigator.clipboard.writeText(email);
    notify();
  };

  const notify = () =>
    toast("메일이 복사되었어요!", {
      icon: "📮",
      style: {
        borderRadius: "10px",
      },
    });
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Container customMeta={customMeta}>
        <br />
        <div className={`text-center font-mono text-5xl font-extrabold`}>
          🚧 개발중 🚜
        </div>
        <br />
        <div className={`flex flex-row flex-wrap`}>
          <BorderRadiusBox title={"Profile"} height={`h-fit`}>
            <div>🧑‍💻 Summer</div>
            <div>
              📮{" "}
              <span onClick={copy} className={`link`}>
                {email}
              </span>
            </div>
            {social.map((el) => (
              <div>
                {el.icon}{" "}
                <a
                  target="_blank"
                  href={el.url}
                  key={el.name}
                  className={`link`}
                >
                  {el.id}
                </a>
              </div>
            ))}
            <div
              className={`px-4 py-4 space-y-2 border border-inherit rounded-md 
              bg-stone-300 text-gray-600 text-sm font-mono`}
            >
              love to travel<br />
              love JJ
            </div>
          </BorderRadiusBox>
          <BorderRadiusBox title={"Skill Stack"} height={`h-fit`}>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=summerydev&theme=dracula&exclude_repo=Computer-Science-Engineering&layout=compact&langs_count=10" />
            <div>
              {stack.map((el) => (
                <div key={el.name} className={`flex flex-row`}>
                  <Image
                    src={el.svg}
                    alt={el.name}
                    width={`20`}
                    height={`20`}
                  ></Image>
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
