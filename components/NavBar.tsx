import Link from "next/link";
import navLinks from "../data/navLinks";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState("");

  useEffect(() => {
    theme === "light" ? setThemeIcon("☾") : setThemeIcon("☀️");
  }, []);

  return (
    <nav>
      {navLinks.map((el) => (
        <Link href={el.link} key={el.title}>
          {el.title}
        </Link>
      ))}

      <button
        type="button"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          setThemeIcon(themeIcon === "☾" ? "☀️" : "☾");
        }}
        className={`float-right`}
      >
        {themeIcon}
      </button>
    </nav>
  );
}
