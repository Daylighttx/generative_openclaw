import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { t as InspectedSlackAccount } from "../../account-inspect-BtPDDBNS.js";

//#region extensions/slack/account-inspect-api.d.ts
declare function inspectSlackReadOnlyAccount(cfg: OpenClawConfig, accountId?: string | null): InspectedSlackAccount;
//#endregion
export { inspectSlackReadOnlyAccount };