import { ni as AgentHarness } from "../../types-D_yufDi82.js";
import { n as CodexAppServerModel, r as CodexAppServerModelListResult, t as CodexAppServerListModelsOptions } from "../../models-B4GgvQEK.js";

//#region extensions/codex/harness.d.ts
declare function createCodexAppServerAgentHarness(options?: {
  id?: string;
  label?: string;
  providerIds?: Iterable<string>;
  pluginConfig?: unknown;
}): AgentHarness;
//#endregion
export { type CodexAppServerListModelsOptions, type CodexAppServerModel, type CodexAppServerModelListResult, createCodexAppServerAgentHarness };