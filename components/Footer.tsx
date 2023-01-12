import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>⋆ ₊ ﾟ ☽ * ₊ ⋆</div>
      <div className="pb-2">₊</div>
      <Link href={"https://github.com/summerydev"}>
        <Image
          src={`/social/github.svg`}
          alt={`github`}
          width={`30`}
          height={`30`}
        ></Image>
      </Link>
    </footer>
  );
}
