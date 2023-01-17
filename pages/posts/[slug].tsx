import Container from "../../components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const keywords = `${post.tag1}${post.tag2 ? ", " + post.tag2 : ""}${
    post.tag3 ? ", " + post.tag3 : ""
  }`;
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
    keywords: keywords,
  };
  return (
    <Container customMeta={customMeta}>
      <div className="mt-10 prose mdxstyle">
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
