import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { a as SsrFBlockedError, o as SsrFPolicy, p as isBlockedHostnameOrIp, t as LookupFn } from "../../ssrf-B0YaiLR8.js";
import { n as RuntimeEnv } from "../../runtime-Cs2vi4bp.js";
import { r as ReplyPayload } from "../../reply-payload-Blc3v02x.js";
import { n as PluginRuntime } from "../../types-DE9CtDzD.js";
import { r as createDedupeCache } from "../../dedupe-gZx-lUHw.js";
import { a as fetchWithSsrFGuard } from "../../fetch-guard-CVQ3jYNW.js";
import { d as ssrfPolicyFromAllowPrivateNetwork, f as ssrfPolicyFromDangerouslyAllowPrivateNetwork } from "../../ssrf-policy-BPmtxhg8.js";
import { t as createLoggerBackedRuntime } from "../../runtime-logger-C5dyY3hO.js";
import { t as tlonPlugin } from "../../channel-CXjgqCz9.js";

//#region extensions/tlon/src/runtime.d.ts
declare const setTlonRuntime: (next: PluginRuntime) => void, getTlonRuntime: () => PluginRuntime;
//#endregion
export { type LookupFn, type OpenClawConfig, type ReplyPayload, type RuntimeEnv, SsrFBlockedError, type SsrFPolicy, createDedupeCache, createLoggerBackedRuntime, fetchWithSsrFGuard, isBlockedHostnameOrIp, setTlonRuntime, ssrfPolicyFromAllowPrivateNetwork, ssrfPolicyFromDangerouslyAllowPrivateNetwork, tlonPlugin };