import Link from "next/link";
import navLinks from "../data/navlinks";
export default function NavBar() {
  return (
    <nav>
      {navLinks.map((el) => (
        <Link href={el.link} key={el.title}>
          {el.title}
        </Link>
      ))}
    </nav>
  );
}
