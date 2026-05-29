import { n as PluginRuntime } from "../../types-DE9CtDzD.js";
import { t as synologyChatPlugin } from "../../channel-DId46D0k.js";
import { t as collectSynologyChatSecurityAuditFindings } from "../../security-audit-B5X4Sefm.js";

//#region extensions/synology-chat/src/runtime.d.ts
declare const setSynologyRuntime: (next: PluginRuntime) => void, getSynologyRuntime: () => PluginRuntime;
//#endregion
export { collectSynologyChatSecurityAuditFindings, setSynologyRuntime, synologyChatPlugin };