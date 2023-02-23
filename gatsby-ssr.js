import WrappedRootElement from "./gatsby-provider-wrapper";

/** @type {import("gatsby").GatsbySSR["wrapRootElement"]} */
export const wrapRootElement = (props) => <WrappedRootElement {...props} />;
