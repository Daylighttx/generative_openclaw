import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { S as normalizeSecretInputString, l as SecretInput, v as hasConfiguredSecretInput, x as normalizeResolvedSecretInputString } from "../../types.secrets-DTyphnGV.js";
import { S as MarkdownTableMode, _ as GroupPolicy } from "../../types.base-uBgPPCcZ.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "../../account-id-dpWDaevW.js";
import { n as RuntimeEnv } from "../../runtime-Cs2vi4bp.js";
import { i as WizardPrompter } from "../../prompts-Bn9UM8ID.js";
import { C as readStringParam, h as jsonResult } from "../../common-CuDT7fBi.js";
import { F as ChannelStatusIssue, n as BaseTokenResolution, r as ChannelAccountSnapshot, t as BaseProbeResult, y as ChannelMessageActionAdapter } from "../../types.core-DP9EvAXq.js";
import { c as deliverTextOrMediaReply, p as isNumericTargetId, r as ReplyPayload, t as OutboundReplyPayload, w as sendPayloadWithChunkedTextAndMedia } from "../../reply-payload-Blc3v02x.js";
import { n as ChannelPlugin, t as ChannelMessageActionName } from "../../types.public-DtOJ3hmq.js";
import { n as PluginRuntime } from "../../types-DE9CtDzD.js";
import { i as createChannelReplyPipeline } from "../../reply-pipeline-C46jf9gs.js";
import { r as createDedupeCache } from "../../dedupe-gZx-lUHw.js";
import { r as buildChannelConfigSchema } from "../../config-schema-Bb_36W0l.js";
import { n as applySetupAccountConfigPatch, s as migrateBaseNameToDefaultAccount, t as applyAccountNameToChannelSection } from "../../setup-helpers-B8InSc35.js";
import { n as formatPairingApproveHint } from "../../helpers-DYHMWfdD.js";
import { i as resolveClientIp } from "../../net-Dhd7_UQq.js";
import { r as waitForAbortSignal } from "../../unhandled-rejections-BsIX1CDQ.js";
import { n as registerPluginHttpRoute } from "../../http-registry-eEIr8Uh5.js";
import { a as warnMissingProviderGroupPolicyFallbackOnce, i as resolveOpenProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy } from "../../runtime-group-policy-DWbHZixF.js";
import { a as applyBasicWebhookRequestGuards, h as WEBHOOK_RATE_LIMIT_DEFAULTS, l as readJsonWebhookBodyOrReject, p as WEBHOOK_ANOMALY_COUNTER_DEFAULTS, v as createFixedWindowRateLimiter, y as createWebhookAnomalyTracker } from "../../webhook-request-guards-LJEtV_-N.js";
import { a as registerWebhookTarget, d as resolveWebhookTargetWithAuthOrRejectSync, n as RegisterWebhookTargetOptions, o as registerWebhookTargetWithPluginRoute, p as withResolvedWebhookRequestPipeline, t as RegisterWebhookPluginRouteOptions } from "../../webhook-targets-x2zlKNnu.js";
import { n as resolveWebhookPath } from "../../webhook-path-D4S0EPdh.js";
import { t as PAIRING_APPROVED_MESSAGE } from "../../pairing-message-C6nirh5Y.js";
import { o as buildTokenChannelStatusSummary, t as buildBaseAccountStatusSnapshot } from "../../status-helpers-BLlMuiN8.js";
import { r as buildSecretInputSchema } from "../../secret-input-BrI2VHBb.js";
import { a as isNormalizedSenderAllowed, n as formatAllowFromLowercase } from "../../allow-from-TxS5JASp.js";
import { i as logTypingFailure } from "../../logging-DiXjMMix.js";
import { r as createChannelPairingController } from "../../channel-pairing-CeQS5U4X.js";
import { t as chunkTextForOutbound } from "../../text-chunking-DU1xie5Z.js";
import { O as mergeAllowFromEntries, W as promptSingleChannelSecretInput, Y as runSingleChannelSecretStep, at as setTopLevelChannelDmPolicyWithAllowFrom, d as addWildcardAllowFrom, f as buildSingleChannelSecretPromptState } from "../../setup-wizard-binary-Cio2sBIC.js";
import { r as resolveInboundRouteEnvelopeBuilderWithRuntime } from "../../inbound-envelope-CwbWTU66.js";

//#region extensions/zalo/src/runtime.d.ts
declare const setZaloRuntime: (next: PluginRuntime) => void, getZaloRuntime: () => PluginRuntime;
//#endregion
export { type BaseProbeResult, type BaseTokenResolution, type ChannelAccountSnapshot, type ChannelMessageActionAdapter, type ChannelMessageActionName, type ChannelPlugin, type ChannelStatusIssue, DEFAULT_ACCOUNT_ID, type GroupPolicy, type MarkdownTableMode, type OpenClawConfig, type OutboundReplyPayload, PAIRING_APPROVED_MESSAGE, type PluginRuntime, type RegisterWebhookPluginRouteOptions, type RegisterWebhookTargetOptions, type ReplyPayload, type RuntimeEnv, type SecretInput, WEBHOOK_ANOMALY_COUNTER_DEFAULTS, WEBHOOK_RATE_LIMIT_DEFAULTS, type WizardPrompter, addWildcardAllowFrom, applyAccountNameToChannelSection, applyBasicWebhookRequestGuards, applySetupAccountConfigPatch, buildBaseAccountStatusSnapshot, buildChannelConfigSchema, buildSecretInputSchema, buildSingleChannelSecretPromptState, buildTokenChannelStatusSummary, chunkTextForOutbound, createChannelReplyPipeline as createChannelMessageReplyPipeline, createChannelPairingController, createDedupeCache, createFixedWindowRateLimiter, createWebhookAnomalyTracker, deliverTextOrMediaReply, formatAllowFromLowercase, formatPairingApproveHint, hasConfiguredSecretInput, isNormalizedSenderAllowed, isNumericTargetId, jsonResult, logTypingFailure, mergeAllowFromEntries, migrateBaseNameToDefaultAccount, normalizeAccountId, normalizeResolvedSecretInputString, normalizeSecretInputString, promptSingleChannelSecretInput, readJsonWebhookBodyOrReject, readStringParam, registerPluginHttpRoute, registerWebhookTarget, registerWebhookTargetWithPluginRoute, resolveClientIp, resolveDefaultGroupPolicy, resolveInboundRouteEnvelopeBuilderWithRuntime, resolveOpenProviderRuntimeGroupPolicy, resolveWebhookPath, resolveWebhookTargetWithAuthOrRejectSync, runSingleChannelSecretStep, sendPayloadWithChunkedTextAndMedia, setTopLevelChannelDmPolicyWithAllowFrom, setZaloRuntime, waitForAbortSignal, warnMissingProviderGroupPolicyFallbackOnce, withResolvedWebhookRequestPipeline };