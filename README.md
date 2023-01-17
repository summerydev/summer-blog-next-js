# Blog with nextjs

Blog with nextjs

## [🚀 check summer-blog](https://summer-blog.vercel.app/)

![readme.gif](/public/readme/readme.gif)

<br />
<br />

# Summary

✨ Blog with nextjs  
[🚀 summer-blog](https://summer-blog.vercel.app/)  
[⚒️ Stack](#stack)  
[💻 UI](#ui)  
[🧑‍💻 Implement](#implement)

<br />
<br />

# Stack

🌏 Language - `typescript`  
🎈 Framework - `react` `nextjs`  
📚 Libraries - `next-contentlayer` for mdx  
🎀 Style - `tailwind`

<!-- 💾 DBMS - mysql -->

<br />
<br />

# UI

🏠 Home Page

- main blog landing page
- recent posts

🧑‍💻 Profile Page

- my profile

📓 Posts Page

- posts list
- recent posts
- tag system

🚀 Project Page

- projects list

<br />
<br />

# Implement

## post tag

![post-tag.gif](/public/readme/2.gif)

- `data.js`에 tags 추가

  ```js
  const tags = ["all", "react", "nextjs", "web", "vue", "javascript"];

  export { tags };
  ```

  <br/>

- `contentlater.config.ts`에 Post fields 추가

  ```js
  export const Post = defineDocumentType(() => ({
    fields: {
      // ...
      tag1: { type: "string", required: true },
      tag2: { type: "string", required: false },
      tag3: { type: "string", required: false },
    },
  }));
  ```

<br/>

- `[tag].tsx`에 tag 동적 라우팅 추가

  ```js
  // [tag].tsx
  import { tags } from "../../../data/data";

  export default function Posts({
  return (
      <>
      <div>
          {tags.map((tag) => (
          <Link
              key={tag}
              href={`/posts/tag/${tag}`}
          >
              {tag}
          </Link>
          ))}
      </div>
      </>
  )
  })

  export const getStaticPaths = async () => {
  return {
      paths: tags.map((tag) => ({ params: { tag: tag } })),
      fallback: false,
  };
  };
  ```

<br/>

- `[tag].tsx`에 path별 post filtering

  ```js
  // [tag].tsx
  import { useRouter } from "next/router";

  export default function Posts({
  const router = useRouter();
  pathName = router.asPath.split("/")[3];

  return (
      <>
      <PostList
          posts={posts.filter((post) => {
              if (pathName == "all") {
              return post;
              } else if (
              post.tag1 == pathName ||
              post.tag2 == pathName ||
              post.tag3 == pathName
              ) {
              return post;
              }
          })}
          />
      </>
  )
  })

  ```

## css

### light mode, dark mode with `next-themes`

![dark-mode.gif](/public/readme/1.gif)

- `next-themes` 설치

  ```shell
  npm install `next-themes`
  ```

- `tailwind.config.js`에 darkMode 추가

  ```json
  module.exports = {
    // ...
    darkMode: "class",
  };
  ```

  <br/>

- `app.tsx`에 ThemeProvider 추가
- `ThemeProvider`에 `attribute` 추가
  ```js
  import { ThemeProvider } from "next-themes";
  export default function App({ Component, pageProps }: AppProps) {
    return (
      <>
        <ThemeProvider attribute="class">
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </>
    );
  }
  ```

<br/>

- `NavBar.tsx`에 `useTheme` 추가

  ```js
  // NavBar.tsx
  import { useTheme } from "next-themes";

  export default function NavBar() {
    const { theme, setTheme } = useTheme();
    return (
      <button
        type="button"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {themeIcon}
      </button>
    );
  }
  ```
