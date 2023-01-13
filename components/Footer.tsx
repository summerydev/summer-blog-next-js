import Image from "next/image";
import Link from "next/link";
import { url } from "../data/metadata";
export default function Footer() {
  return (
    <footer>
      <div className="link-box">
        <Link href={url.github}>
          <Image
            src={`/social/github.svg`}
            alt={`github`}
            width={`20`}
            height={`20`}
          ></Image>
        </Link>
        <Link href={url.instagram}>
          <Image
            src={`/social/instagram.svg`}
            alt={`github`}
            width={`20`}
            height={`20`}
          ></Image>
        </Link>
      </div>
      <div className={`text-gray-500`}>⋆ ₊ ﾟ 𝒮𝓊𝓂𝓂ℯ𝓇 ☽ * ₊ ⋆</div>
    </footer>
  );
}
