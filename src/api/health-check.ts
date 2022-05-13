/**
 * To have more information, please click below link
 * https://www.gatsbyjs.com/docs/reference/functions/getting-started/
 */
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

import * as HealthCheckService from "../modules/health-check/health-check.service";

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const result = HealthCheckService.check();
  return res.json({ message: result });
}
