import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { l as ModelProviderConfig } from "../../types.models-DxVMsupo.js";
import { Kn as ProviderThinkingProfile } from "../../types-D_yufDi82.js";
import { t as applyAnthropicConfigDefaults } from "../../config-defaults-oaS0cOD9.js";
//#region extensions/anthropic/provider-policy-api.d.ts
declare function normalizeConfig(params: {
  provider: string;
  providerConfig: ModelProviderConfig;
}): ModelProviderConfig;
declare function applyConfigDefaults(params: Parameters<typeof applyAnthropicConfigDefaults>[0]): OpenClawConfig;
declare function resolveThinkingProfile(params: {
  provider: string;
  modelId: string;
}): ProviderThinkingProfile | null;
//#endregion
export { applyConfigDefaults, normalizeConfig, resolveThinkingProfile };