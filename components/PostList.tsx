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
          <div className="p-3 mb-2 rounded-lg hover:scale-105 hover:bg-gray-200 hover:transition-all">
            <div className={`font-medium text-xl`}>{post.title}</div>
            <div className={`font-light`}>{post.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
