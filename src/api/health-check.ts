/**
 * To have more information, please click below link
 * https://www.gatsbyjs.com/docs/reference/functions/getting-started/
 */
import { HealthCheckService } from "../services/health-check";

import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const result = HealthCheckService.check();
  return res.json({ message: result });
}
