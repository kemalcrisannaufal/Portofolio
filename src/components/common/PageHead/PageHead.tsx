import Head from "next/head";

interface Proptypes {
  title: string;
  description?: string;
}

const PageHead = ({ title, description }: Proptypes) => {
  const defaultDescription =
    "Kemal Crisannaufal's portfolio showcasing projects, blogs,  skills, and contacts. Built with Next JS.";
  const siteUrl = "https://kcr-portofolio.vercel.app/";
  const ogImage = "/assets/images/logo-v2.png";

  return (
    <Head>
      <link
        rel="icon"
        href="/assets/images/logo_K.png"
        type="image/x-icon"
        sizes="64"
      />
      <title>{title} | My Portfolio</title>

      <meta name="google-site-verification" content="oRKSv4li5XpvNYYomvx5rEQ71vDa5aD8-YYcOHDT-Ak" />

      {/* Basic SEO */}
      <meta name="description" content={description || defaultDescription} />
      <meta
        name="keywords"
        content="kemal crisannaufal, portfolio, projects, web developer, react, nodejs"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      <meta property="og:title" content={`${title} | My Portfolio`} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | My Portfolio`} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default PageHead;
