import Head from "next/head";

interface Proptypes {
  title: string;
}

const PageHead = (props: Proptypes) => {
  const { title } = props;
  return (
    <Head>
      <link
        rel="icon"
        href="/assets/images/logo-short.png"
        type="image/x-icon"
        sizes="64"
      />
      <title>{title}</title>
    </Head>
  );
};

export default PageHead;
