import Head from "next/head";
import metadata from "../data/metadata";

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };
  return (
    <div className={`w-full flex flex-col items-center p-3 `}>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1 `}
      >
        <div className={`flex flex-row items-center`}>
          <span className={`mx-2 text-3xl font-bold`}>{meta.title}</span>
        </div>
      </header>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  );
};

export default Container;
