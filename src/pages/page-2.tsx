import { Link } from "gatsby";

import Layout from "~/modules/layout";
import { GatsbyHead } from "~/modules/utils/gatsby-head";

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;

export const Head = () => <GatsbyHead title="Page two" />;
