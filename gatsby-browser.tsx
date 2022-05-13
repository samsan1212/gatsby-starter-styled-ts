import WrappedRootElement from "./gatsby-provider-wrapper";

import type { GatsbyBrowser } from "gatsby";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = (props) => {
  return <WrappedRootElement {...props} />;
};
