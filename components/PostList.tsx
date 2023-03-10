import Link from "next/link";

export default function PostLists({ posts, tag }) {
  if (posts.length <= 0) {
    return (
      <div className="p-10 text-center space-y-10">
        <h1 className="text-3xl">π</h1>
        <span className="tags">{tag}</span>
        <span>μ λ±λ‘λ ν¬μ€νΈκ° μμ΄μ</span>
        <div>
          <Link className="link" href={"/posts/tag/all"}>β λͺ©λ‘μΌλ‘ λμκ°κΈ°</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/posts/${post._raw.flattenedPath}`}
            passHref
          >
            <div
              className={`p-3 mb-2 rounded-lg space-y-1
              hover:scale-105 
              hover:bg-gray-200 
              hover:transition-all
              hover:dark:bg-gray-600
            `}
            >
              <div
                className={`title font-medium text-2xl dark:hover:text-white`}
              >
                {post.title}
              </div>
              <div
                className={`font-light pl-1`}
              >
                {post.description}
              </div>
              <div className="pl-1 space-x-2 font-light text-gray-500 text-sm dark:text-white">
                <span>{post.date}</span>
                <span className="tags">{post.tag1}</span>
                {post.tag2 && <span className="tags">{post.tag2}</span>}
                {post.tag3 && <span className="tags">{post.tag3}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
