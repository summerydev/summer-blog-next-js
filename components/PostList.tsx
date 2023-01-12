import Link from "next/link";

export default function PostLists({ posts }) {
  return (
    <div className="p-3">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/posts/${post._raw.flattenedPath}`}
          passHref
        >
          <div
            className={`p-3 mb-2 rounded-lg hover:scale-105 hover:bg-gray-200 hover:transition-all
            hover:dark:bg-gray-600
            `}
          >
            <div className={`font-medium text-2xl dark:hover:text-white`}>{post.title}</div>
            <div className={`font-light pl-1 text-gray-600 dark:text-gray-300`}>{post.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
