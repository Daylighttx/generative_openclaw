import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { l as closeDispatcher, o as SsrFPolicy, t as LookupFn, u as createPinnedDispatcher, x as resolvePinnedHostnameWithPolicy } from "../../ssrf-B0YaiLR8.js";
import { s as RuntimeLogger } from "../../types-core-B0nSTJMG.js";
import { n as RuntimeEnv } from "../../runtime-Cs2vi4bp.js";
import { i as WizardPrompter } from "../../prompts-Bn9UM8ID.js";
import { b as ChannelMessageActionContext, u as ChannelDirectoryEntry } from "../../types.core-DP9EvAXq.js";
import { n as PluginRuntime } from "../../types-DE9CtDzD.js";
import { n as formatZonedTimestamp } from "../../format-datetime-1qg8A6PL.js";
import { d as ssrfPolicyFromAllowPrivateNetwork, f as ssrfPolicyFromDangerouslyAllowPrivateNetwork, n as assertHttpUrlTargetsPrivateNetwork } from "../../ssrf-policy-BPmtxhg8.js";
import { i as writeJsonFileAtomically } from "../../json-store-Cp3P2C3E.js";
import { _ as resolveMatrixDefaultOrOnlyAccountId, a as resolveMatrixCredentialsPath, c as resolveMatrixLegacyFlatStoreRoot, d as listMatrixEnvAccountIds, f as resolveMatrixEnvAccountToken, g as resolveMatrixChannelConfig, h as resolveConfiguredMatrixAccountIds, i as resolveMatrixCredentialsFilename, l as sanitizeMatrixPathSegment, m as requiresExplicitMatrixDefaultAccount, n as resolveMatrixAccountStorageRoot, o as resolveMatrixHomeserverKey, p as findMatrixAccountEntry, r as resolveMatrixCredentialsDir, s as resolveMatrixLegacyFlatStoragePaths, t as hashMatrixAccessToken, u as getMatrixScopedEnvVarNames } from "../../storage-paths-Cbn3289s.js";
import { a as setMatrixThreadBindingMaxAgeBySessionKey, i as setMatrixThreadBindingIdleTimeoutBySessionKey } from "../../thread-bindings-shared-BeSba8cg.js";
import { t as setMatrixRuntime } from "../../runtime-BSlNsf8k.js";

//#region extensions/matrix/src/auth-precedence.d.ts
type MatrixResolvedStringField = "homeserver" | "userId" | "accessToken" | "password" | "deviceId" | "deviceName";
type MatrixResolvedStringValues = Record<MatrixResolvedStringField, string>;
type MatrixStringSourceMap = Partial<Record<MatrixResolvedStringField, string>>;
declare function resolveMatrixAccountStringValues(params: {
  accountId: string;
  account?: MatrixStringSourceMap;
  scopedEnv?: MatrixStringSourceMap;
  channel?: MatrixStringSourceMap;
  globalEnv?: MatrixStringSourceMap;
}): MatrixResolvedStringValues;
//#endregion
//#region extensions/matrix/src/matrix/deps.d.ts
declare function isMatrixSdkAvailable(): boolean;
declare function ensureMatrixSdkInstalled(params?: {
  runtime?: RuntimeEnv;
  confirm?: (message: string) => Promise<boolean>;
  resolveFn?: (id: string) => string;
}): Promise<void>;
//#endregion
//#region extensions/matrix/runtime-api.d.ts
declare function chunkTextForOutbound(text: string, limit: number): string[];
//#endregion
export { type ChannelDirectoryEntry, type ChannelMessageActionContext, type LookupFn, type MatrixResolvedStringField, type MatrixResolvedStringValues, type OpenClawConfig, type PluginRuntime, type RuntimeEnv, type RuntimeLogger, type SsrFPolicy, type WizardPrompter, assertHttpUrlTargetsPrivateNetwork, chunkTextForOutbound, closeDispatcher, createPinnedDispatcher, ensureMatrixSdkInstalled, findMatrixAccountEntry, formatZonedTimestamp, getMatrixScopedEnvVarNames, hashMatrixAccessToken, isMatrixSdkAvailable, listMatrixEnvAccountIds, requiresExplicitMatrixDefaultAccount, resolveConfiguredMatrixAccountIds, resolveMatrixAccountStorageRoot, resolveMatrixAccountStringValues, resolveMatrixChannelConfig, resolveMatrixCredentialsDir, resolveMatrixCredentialsFilename, resolveMatrixCredentialsPath, resolveMatrixDefaultOrOnlyAccountId, resolveMatrixEnvAccountToken, resolveMatrixHomeserverKey, resolveMatrixLegacyFlatStoragePaths, resolveMatrixLegacyFlatStoreRoot, resolvePinnedHostnameWithPolicy, sanitizeMatrixPathSegment, setMatrixRuntime, setMatrixThreadBindingIdleTimeoutBySessionKey, setMatrixThreadBindingMaxAgeBySessionKey, ssrfPolicyFromAllowPrivateNetwork, ssrfPolicyFromDangerouslyAllowPrivateNetwork, writeJsonFileAtomically };