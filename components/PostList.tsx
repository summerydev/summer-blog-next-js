import Link from "next/link";

export default function PostLists({ posts }) {
  if (posts.length <= 0) {
    return <div className="p-10 text-center">👀 등록된 포스트가 없어요</div>;
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
              <div className={`font-medium text-2xl dark:hover:text-white`}>
                {post.title}
              </div>
              <div
                className={`font-light pl-1 text-gray-600 dark:text-gray-300`}
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
