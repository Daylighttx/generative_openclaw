import { l as ModelProviderConfig } from "../../types.models-DxVMsupo.js";
import { t as AnthropicVertexStreamDeps } from "../../stream-runtime-C1v0_6kf.js";
import { n as buildAnthropicVertexProvider, t as ANTHROPIC_VERTEX_DEFAULT_MODEL_ID } from "../../provider-catalog-DiogEjix.js";
import { a as resolveAnthropicVertexProjectId, i as resolveAnthropicVertexConfigApiKey, n as hasAnthropicVertexCredentials, o as resolveAnthropicVertexRegion, r as resolveAnthropicVertexClientRegion, s as resolveAnthropicVertexRegionFromBaseUrl, t as hasAnthropicVertexAvailableAuth } from "../../region-CFO22Yd7.js";
import { StreamFn } from "@earendil-works/pi-agent-core";

//#region extensions/anthropic-vertex/api.d.ts
declare function mergeImplicitAnthropicVertexProvider(params: {
  existing?: ReturnType<typeof buildAnthropicVertexProvider>;
  implicit: ReturnType<typeof buildAnthropicVertexProvider>;
}): ModelProviderConfig;
declare function resolveImplicitAnthropicVertexProvider(params?: {
  env?: NodeJS.ProcessEnv;
}): ModelProviderConfig | null;
declare function createAnthropicVertexStreamFn(projectId: string | undefined, region: string, baseURL?: string, deps?: AnthropicVertexStreamDeps): StreamFn;
declare function createAnthropicVertexStreamFnForModel(model: {
  baseUrl?: string;
}, env?: NodeJS.ProcessEnv, deps?: AnthropicVertexStreamDeps): StreamFn;
//#endregion
export { ANTHROPIC_VERTEX_DEFAULT_MODEL_ID, buildAnthropicVertexProvider, createAnthropicVertexStreamFn, createAnthropicVertexStreamFnForModel, hasAnthropicVertexAvailableAuth, hasAnthropicVertexCredentials, mergeImplicitAnthropicVertexProvider, resolveAnthropicVertexClientRegion, resolveAnthropicVertexConfigApiKey, resolveAnthropicVertexProjectId, resolveAnthropicVertexRegion, resolveAnthropicVertexRegionFromBaseUrl, resolveImplicitAnthropicVertexProvider };