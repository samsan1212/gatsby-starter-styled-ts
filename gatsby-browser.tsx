import WrappedRootElement from "./gatsby-provider-wrapper";

import type { GatsbyBrowser } from "gatsby";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = (props) => {
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
