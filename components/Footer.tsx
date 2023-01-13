import Image from "next/image";
import Link from "next/link";
import { social } from "../data/metadata";
export default function Footer() {
  return (
    <footer>
      <div className="link-box">
        {social.map((el) => (
          <Link href={el.url} key={el.name}>
            <Image
              src={el.svg}
              alt={el.name}
              width={`20`}
              height={`20`}
            ></Image>
          </Link>
        ))}
      </div>
      <div className={`text-gray-500`}>⋆ ₊ ﾟ 𝒮𝓊𝓂𝓂ℯ𝓇 ☽ * ₊ ⋆</div>
    </footer>
  );
}
