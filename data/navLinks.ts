export const navLinks: { title: string; link: string; route?: string }[] = [
  { title: "Home", link: "/", route: "/" },
  { title: "Posts", link: "/posts/tag/all", route: "/posts/tag/[tag]" },
  { title: "Projects", link: "/projects", route: "/projects" },
];

export const profileLink: { title: string; link: string } = {
  title: "Profile",
  link: "/profile",
};
