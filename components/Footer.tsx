import Image from "next/image";
import { social } from "../data/data";
export default function Footer() {
  return (
    <footer>
      <div className="link-box">
        {social.map((el) => (
          <a target="_blank" href={el.url} key={el.name}>
            <Image
              src={el.svg}
              alt={el.name}
              width={`20`}
              height={`20`}
            ></Image>
          </a>
        ))}
      </div>
      <div>⋆ ₊ ⋆ 𝒮𝓊𝓂𝓂ℯ𝓇 ☽ * ₊ ⋆</div>
    </footer>
  );
}
