import WrappedRootElement from "./gatsby-provider-wrapper";

import type { GatsbySSR } from "gatsby";

export const wrapRootElement: GatsbySSR["wrapRootElement"] = (props) => (
  <WrappedRootElement {...props} />
);
