import React from "react";
import Head from "next/head";

const Seo = ({
  title = "Michle John",
  description = "Hey! I am Michle John, a Web3 full-stack engineer from Canada.",
  OGImage = "images/avatar.png",
  OGType = "website",
  canonicalUrl = "https://michlejohnares.com/",
  publishedDate = new Date(),
  children,
}) => {
  return (
    <React.Fragment>
      <Head>
        {/* basic metadata */}
        <title>{`${title} | Michle John`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Michle John" />
        <meta name="author" content="michlejohnares" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          rel="shortcut icon"
          href="images/avatar.png"
          type="image/x-icon"
        />

        {/* twitter metadata */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@michlejohnares" />
        <meta name="twitter:creator" content="@michlejohnares" />
        <meta name="twitter:title" content="Michle John" />
        <meta
          name="twitter:description"
          content="Hey! I am Michle John, a Web3 full-stack engineer from Canada."
        />
        <meta name="twitter:image" content="images/avatar.png" />

        {/* canonical link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* open graph metadata */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={OGType} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OGImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:section" content={title} />
        <meta property="article:published_time" content={publishedDate} />
        {children}
      </Head>
    </React.Fragment>
  );
};

export default Seo;
