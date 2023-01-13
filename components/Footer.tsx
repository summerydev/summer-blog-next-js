import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>⋆ ₊ ﾟ 𝒮𝓊𝓂𝓂ℯ𝓇 ☽ * ₊ ⋆</div>
      <div className="pb-2">₊</div>
      <div className="link-box">
        <Link href={"https://github.com/summerydev"}>
          <Image
            src={`/social/github.svg`}
            alt={`github`}
            width={`30`}
            height={`30`}
          ></Image>
        </Link>
        <Link href={"https://www.instagram.com/in_meeeeee"}>
          <Image
            src={`/social/instagram.svg`}
            alt={`github`}
            width={`30`}
            height={`30`}
          ></Image>
        </Link>
      </div>
    </footer>
  );
}
