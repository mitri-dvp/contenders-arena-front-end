import Head from "next/head";

const Seo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const keywords = [
    "contenders",
    "contenders arena",
    "Gamecan",
    "galaxy racer",
    "contenders steam",
    "contenders arena steam",
    "contenders arena beta",
    "contenders steam nextfest",
  ];
  const image = `${process.env.NEXT_PUBLIC_APP_URL}/assets/jpg/contenders-arena-thumbnail.jpg`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta name="image" content={image} />

      <meta name="keywords" content={keywords.join(",")} />

      <meta charSet="utf-8" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
