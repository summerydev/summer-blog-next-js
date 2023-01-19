import Image from "next/image";
import { social } from "../data/data";
import toast, { Toaster } from "react-hot-toast";

export default function Footer() {
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
    <footer>
      <div>
        <Toaster />
      </div>
      <div className="link-box">
        {social.map((el) => (
          <a target="_blank" rel="noreferrer" href={el.url} key={el.name}>
            <Image
              src={el.svg}
              alt={el.name}
              width={`20`}
              height={`20`}
            ></Image>
          </a>
        ))}
        <span onClick={copy} className={`link`}>
          ✉️
        </span>
      </div>
      <div>⋆ ₊ ⋆ 𝒮𝓊𝓂𝓂ℯ𝓇 ☽ * ₊ ⋆</div>
    </footer>
  );
}
