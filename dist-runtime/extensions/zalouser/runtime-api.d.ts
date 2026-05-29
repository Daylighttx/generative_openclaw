import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { S as MarkdownTableMode } from "../../types.base-uBgPPCcZ.js";
import { a as GroupToolPolicyConfig } from "../../types.tools-5iUSrpX7.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "../../account-id-dpWDaevW.js";
import { C as OpenClawPluginToolContext } from "../../types-core-B0nSTJMG.js";
import { n as RuntimeEnv } from "../../runtime-Cs2vi4bp.js";
import { r as AnyAgentTool } from "../../common-CuDT7fBi.js";
import { F as ChannelStatusIssue, m as ChannelGroupContext, r as ChannelAccountSnapshot, t as BaseProbeResult, u as ChannelDirectoryEntry, y as ChannelMessageActionAdapter } from "../../types.core-DP9EvAXq.js";
import { c as deliverTextOrMediaReply, p as isNumericTargetId, r as ReplyPayload, t as OutboundReplyPayload, v as resolveSendableOutboundReplyParts, w as sendPayloadWithChunkedTextAndMedia } from "../../reply-payload-Blc3v02x.js";
import { n as ChannelPlugin } from "../../types.public-DtOJ3hmq.js";
import { n as PluginRuntime } from "../../types-DE9CtDzD.js";
import { p as resolveInboundMentionDecision } from "../../mention-gating-hhdUoBZZ.js";
import { i as createChannelReplyPipeline } from "../../reply-pipeline-C46jf9gs.js";
import { r as buildChannelConfigSchema } from "../../config-schema-Bb_36W0l.js";
import { r as resolvePreferredOpenClawTmpDir } from "../../tmp-openclaw-dir-B6WyFPhH.js";
import { n as isDangerousNameMatchingEnabled } from "../../dangerous-name-matching-Dpyxvvw1.js";
import { a as warnMissingProviderGroupPolicyFallbackOnce, i as resolveOpenProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy } from "../../runtime-group-policy-DWbHZixF.js";
import { t as buildBaseAccountStatusSnapshot } from "../../status-helpers-BLlMuiN8.js";
import { n as loadOutboundMediaFromUrl } from "../../outbound-media-BSHxcBtV.js";
import { f as mergeAllowlist, m as summarizeMapping, n as formatAllowFromLowercase } from "../../allow-from-TxS5JASp.js";
import { r as createChannelPairingController } from "../../channel-pairing-CeQS5U4X.js";
import { t as chunkTextForOutbound } from "../../text-chunking-DU1xie5Z.js";
import { t as zalouserPlugin } from "../../channel-BBEw76Tb.js";
import { t as zalouserSetupPlugin } from "../../channel.setup-DmLY_ivb.js";
import { i as createZalouserTool, n as createZalouserSetupWizardProxy, r as zalouserSetupAdapter, t as zalouserSetupWizard } from "../../api-BYNsmQKg.js";
import { n as isZalouserMutableGroupEntry, t as collectZalouserSecurityAuditFindings } from "../../security-audit-CCTiwO4A.js";

//#region extensions/zalouser/src/runtime.d.ts
declare const setZalouserRuntime: (next: PluginRuntime) => void, getZalouserRuntime: () => PluginRuntime;
//#endregion
export { type AnyAgentTool, type BaseProbeResult, type ChannelAccountSnapshot, type ChannelDirectoryEntry, type ChannelGroupContext, type ChannelMessageActionAdapter, type ChannelPlugin, type ChannelStatusIssue, DEFAULT_ACCOUNT_ID, type GroupToolPolicyConfig, type MarkdownTableMode, type OpenClawConfig, type OpenClawPluginToolContext, type OutboundReplyPayload, type PluginRuntime, type ReplyPayload, type RuntimeEnv, buildBaseAccountStatusSnapshot, buildChannelConfigSchema, chunkTextForOutbound, collectZalouserSecurityAuditFindings, createChannelReplyPipeline as createChannelMessageReplyPipeline, createChannelPairingController, createZalouserSetupWizardProxy, createZalouserTool, deliverTextOrMediaReply, formatAllowFromLowercase, isDangerousNameMatchingEnabled, isNumericTargetId, isZalouserMutableGroupEntry, loadOutboundMediaFromUrl, mergeAllowlist, normalizeAccountId, resolveDefaultGroupPolicy, resolveInboundMentionDecision, resolveOpenProviderRuntimeGroupPolicy, resolvePreferredOpenClawTmpDir, resolveSendableOutboundReplyParts, sendPayloadWithChunkedTextAndMedia, setZalouserRuntime, summarizeMapping, warnMissingProviderGroupPolicyFallbackOnce, zalouserPlugin, zalouserSetupAdapter, zalouserSetupPlugin, zalouserSetupWizard };