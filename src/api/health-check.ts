/**
 * To have more information, please click below link
 * https://www.gatsbyjs.com/docs/reference/functions/getting-started/
 */
import * as HealthCheckService from "../services/health-check/health-check-service";

import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  const result = HealthCheckService.check();
  return res.json({ message: result });
}
