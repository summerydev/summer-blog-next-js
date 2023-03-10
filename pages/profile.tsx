import BorderRadiusBox from "components/BorderRadiusBox";
import Container from "components/Container";
import Image from "next/image";
import { stack, social } from "data/data";
import toast, { Toaster } from "react-hot-toast";

export default function Profile() {
  const customMeta = {
    title: "Summer âĻ Frontend Engineer",
    description: "Hello ð I'm Summer",
  };

  const email = "summery.dev@gmail.com";

  const copy = () => {
    window.navigator.clipboard.writeText(email);
    notify();
  };

  const notify = () =>
    toast("ëĐėžėī ëģĩėŽëėėīė!", {
      icon: "ðŪ",
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
        <div className={`flex flex-row flex-wrap mt-5`}>
          <BorderRadiusBox title={"Profile"} height={`h-fit`}>
            <div>ð§âðŧ Summer</div>
            <div>
              ðŪ{" "}
              <span onClick={copy} className={`link`}>
                {email}
              </span>
            </div>
            {social.map((el) => (
              <div key={el.name}>
                {el.icon}{" "}
                <a
                  target="_blank"
                  href={el.url}
                  rel="noreferrer"
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
              I&#39;m Frontend Engineer,
              <br />
              love to travel
              <br />
              ð°ð·ðŊðĩðļðŽðŽð§ðŦð·ðŪðđðŧðĶðŠðļðĩð­ðđðžðšðļðŧðģ
              <br />
              and love JJ
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
