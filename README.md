# Blog with nextjs

Blog with nextjs

## [π check summer-blog](https://summer-blog.vercel.app/)

![readme.gif](/public/readme/readme.gif)

<br />
<br />

# Summary

β¨ Blog with nextjs  
[π summer-blog](https://summer-blog.vercel.app/)  
[βοΈ Stack](#stack)  
[π» UI](#ui)  
[π§βπ» Implement](#implement)

<br />
<br />

# Stack

π Language - `typescript`  
π Framework - `react` `nextjs`  
π Libraries - `next-contentlayer` for mdx  
π Style - `tailwind`

<!-- πΎ DBMS - mysql -->

<br />
<br />

# UI

π  Home Page

- main blog landing page
- recent posts

π§βπ» Profile Page

- my profile

π Posts Page

- posts list
- recent posts
- tag system

π Project Page

- projects list

<br />
<br />

# Implement

## post tag

![post-tag.gif](/public/readme/2.gif)

- `data.js`μ tags μΆκ°

  ```js
  const tags = ["all", "react", "nextjs", "web", "vue", "javascript"];

  export { tags };
  ```

  <br/>

- `contentlater.config.ts`μ Post fields μΆκ°

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

- `[tag].tsx`μ tag λμ  λΌμ°ν μΆκ°

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

- `[tag].tsx`μ pathλ³ post filtering

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

- `next-themes` μ€μΉ

  ```shell
  npm install `next-themes`
  ```

- `tailwind.config.js`μ darkMode μΆκ°

  ```json
  module.exports = {
    // ...
    darkMode: "class",
  };
  ```

  <br/>

- `app.tsx`μ ThemeProvider μΆκ°
- `ThemeProvider`μ `attribute` μΆκ°
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

- `NavBar.tsx`μ `useTheme` μΆκ°

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
