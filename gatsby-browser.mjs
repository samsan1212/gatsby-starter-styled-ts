import WrappedRootElement from "./gatsby-provider-wrapper.mjs";

/** @type {import("gatsby").GatsbyBrowser["wrapRootElement"]} */
export const wrapRootElement = (props) => {
  return <WrappedRootElement {...props} />;
};

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
