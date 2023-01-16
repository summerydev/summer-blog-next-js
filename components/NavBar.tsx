import Link from "next/link";
import { navLinks, profileLink } from "../data/navLinks";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  const { theme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState("");

  useEffect(() => {
    theme == "light" ? setThemeIcon("🖤") : setThemeIcon("🤍");
  }, []);

  const clicked = "text-purple-400 font-bold";

  return (
    <nav className="pt-10 pb-5 space-x-3">
      {navLinks.map((el) => (
        <Link
          href={el.link}
          key={el.title}
          id={el.link}
          className={`
          hover:text-indigo-400 
          hover:font-semibold
          hover:ease-in-out duration-300
          ${router.asPath == el.link ? clicked : ""}
          `}
        >
          {el.title}
        </Link>
      ))}
      <div className={`float-right`}>
        <button
          type="button"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setThemeIcon(themeIcon === "🖤" ? "🤍" : "🖤");
          }}
        >
          {themeIcon}
        </button>
        <Link
          href={profileLink.link}
          key={profileLink.title}
          className={`px-3 ${router.asPath == profileLink.link ? clicked : ""}`}
        >
          {profileLink.title}
        </Link>
      </div>
    </nav>
  );
}
