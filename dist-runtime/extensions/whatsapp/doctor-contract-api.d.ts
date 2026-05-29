import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { C as ChannelDoctorConfigMutation, T as ChannelDoctorLegacyConfigRule } from "../../types.adapters-Buiv-D12.js";
//#region extensions/whatsapp/src/doctor-contract.d.ts
declare function normalizeCompatibilityConfig({
  cfg
}: {
  cfg: OpenClawConfig;
}): ChannelDoctorConfigMutation;
//#endregion
//#region extensions/whatsapp/doctor-contract-api.d.ts
declare const legacyConfigRules: ChannelDoctorLegacyConfigRule[];
//#endregion
export { legacyConfigRules, normalizeCompatibilityConfig };