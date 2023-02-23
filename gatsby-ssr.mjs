import WrappedRootElement from "./gatsby-provider-wrapper.mjs";

/** @type {import("gatsby").GatsbySSR["wrapRootElement"] } */
export const wrapRootElement = (props) => <WrappedRootElement {...props} />;
