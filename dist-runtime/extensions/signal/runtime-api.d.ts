import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { n as normalizeAccountId, t as DEFAULT_ACCOUNT_ID } from "../../account-id-dpWDaevW.js";
import { h as chunkText } from "../../outbound.types-CMry54dl.js";
import { y as ChannelMessageActionAdapter } from "../../types.core-DP9EvAXq.js";
import { v as OpenClawPluginApi } from "../../types-D_yufDi82.js";
import { l as normalizeE164 } from "../../utils-D9cH8Yg8.js";
import { n as ChannelPlugin } from "../../types.public-DtOJ3hmq.js";
import { n as PluginRuntime } from "../../types-DE9CtDzD.js";
import { r as emptyPluginConfigSchema } from "../../config-schema-C__epaUb.js";
import { r as buildChannelConfigSchema } from "../../config-schema-Bb_36W0l.js";
import { s as migrateBaseNameToDefaultAccount, t as applyAccountNameToChannelSection } from "../../setup-helpers-B8InSc35.js";
import { n as deleteAccountFromConfigSection, r as setAccountEnabledInConfigSection } from "../../config-helpers-CjmRUrIT.js";
import { n as formatPairingApproveHint } from "../../helpers-DYHMWfdD.js";
import { d as getChatChannelMeta } from "../../core-BGjqtmIf.js";
import { t as formatDocsLink } from "../../links-DxgSMg8B.js";
import { t as formatCliCommand } from "../../command-format-CtdToqDu.js";
import { E as resolveChannelMediaMaxBytes } from "../../media-runtime-Fulp3075.js";
import { t as detectBinary } from "../../detect-binary-BgrrTvww.js";
import { n as resolveAllowlistProviderRuntimeGroupPolicy, r as resolveDefaultGroupPolicy } from "../../runtime-group-policy-DWbHZixF.js";
import { t as PAIRING_APPROVED_MESSAGE } from "../../pairing-message-C6nirh5Y.js";
import { c as collectStatusIssuesFromLastError, d as createDefaultChannelRuntimeState, n as buildBaseChannelStatusSummary, t as buildBaseAccountStatusSnapshot } from "../../status-helpers-BLlMuiN8.js";
import { o as SignalConfigSchema } from "../../bundled-channel-config-schema-DmLIcr-H.js";
import { a as resolveSignalAccount, c as probeSignal, i as resolveDefaultSignalAccountId, n as listEnabledSignalAccounts, o as SignalAccountConfig, r as listSignalAccountIds, t as ResolvedSignalAccount } from "../../accounts-BG4m0QpP.js";
import { a as sendMessageSignal, f as monitorSignalProvider, p as signalMessageActions, u as resolveSignalReactionLevel } from "../../send-DwZXirFK.js";
import { c as installSignalCli, n as normalizeSignalMessagingTarget, t as looksLikeSignalTargetId } from "../../normalize-BfRgfFn_.js";
import { i as sendReactionSignal, r as removeReactionSignal } from "../../send-reactions-DPqQpsQc.js";

//#region extensions/signal/src/runtime.d.ts
declare const setSignalRuntime: (next: PluginRuntime) => void, clearSignalRuntime: () => void;
//#endregion
export { type ChannelMessageActionAdapter, type ChannelPlugin, DEFAULT_ACCOUNT_ID, type OpenClawConfig, type OpenClawPluginApi, PAIRING_APPROVED_MESSAGE, type PluginRuntime, type ResolvedSignalAccount, type SignalAccountConfig, SignalConfigSchema, applyAccountNameToChannelSection, buildBaseAccountStatusSnapshot, buildBaseChannelStatusSummary, buildChannelConfigSchema, chunkText, collectStatusIssuesFromLastError, createDefaultChannelRuntimeState, deleteAccountFromConfigSection, detectBinary, emptyPluginConfigSchema, formatCliCommand, formatDocsLink, formatPairingApproveHint, getChatChannelMeta, installSignalCli, listEnabledSignalAccounts, listSignalAccountIds, looksLikeSignalTargetId, migrateBaseNameToDefaultAccount, monitorSignalProvider, normalizeAccountId, normalizeE164, normalizeSignalMessagingTarget, probeSignal, removeReactionSignal, resolveAllowlistProviderRuntimeGroupPolicy, resolveChannelMediaMaxBytes, resolveDefaultGroupPolicy, resolveDefaultSignalAccountId, resolveSignalAccount, resolveSignalReactionLevel, sendMessageSignal, sendReactionSignal, setAccountEnabledInConfigSection, setSignalRuntime, signalMessageActions };