import { t as resolveFireworksThinkingProfile } from "../../thinking-policy-AxoM3531.js";

//#region extensions/fireworks/provider-policy-api.d.ts
declare function resolveThinkingProfile(params: {
  provider?: string;
  modelId: string;
}): ReturnType<typeof resolveFireworksThinkingProfile>;
//#endregion
export { resolveThinkingProfile };