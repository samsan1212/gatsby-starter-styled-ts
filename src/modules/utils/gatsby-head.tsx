import { graphql, useStaticQuery } from "gatsby";

import type { PropsWithoutRef } from "react";

interface Props {
  description?: string;
  meta?: any[];
  title?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function GatsbyHead({
  description = "",
  meta = [],
  title,
  noindex,
  nofollow,
}: PropsWithoutRef<Props>) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const parsedTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;
  const robots = [
    ...(noindex ? ["noindex"] : []),
    ...(nofollow ? ["nofollow"] : []),
  ].join(",");

  return (
    <>
      <title>{parsedTitle}</title>
      {[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
        { name: "robots", content: robots },
      ]
        .concat(meta)
        .map((item) => (
          <meta key={item.name} name={item.name} content={item.content} />
        ))}
    </>
  );
}
