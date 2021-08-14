/**
 * To have more information, please click below link
 * https://www.gatsbyjs.com/docs/reference/functions/getting-started/
 */
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  res.send(`I am TYPESCRIPT`);
}
