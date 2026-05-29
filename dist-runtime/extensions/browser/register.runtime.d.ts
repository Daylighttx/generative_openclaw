import { q as OpenClawPluginSecurityAuditContext } from "../../types-D_yufDi82.js";
import { b as runBrowserProxyCommand } from "../../browser-runtime-DIVulikd.js";
import { i as createBrowserTool, r as handleBrowserGatewayRequest, t as createBrowserPluginService } from "../../plugin-service-DN8yH-tn.js";

//#region extensions/browser/src/security-audit.d.ts
declare function collectBrowserSecurityAuditFindings(ctx: OpenClawPluginSecurityAuditContext): {
  checkId: string;
  severity: "warn" | "critical";
  title: string;
  detail: string;
  remediation?: string;
}[];
//#endregion
export { collectBrowserSecurityAuditFindings, createBrowserPluginService, createBrowserTool, handleBrowserGatewayRequest, runBrowserProxyCommand };