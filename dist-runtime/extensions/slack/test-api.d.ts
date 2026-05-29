import { n as ChannelOutboundAdapter } from "../../outbound.types-CMry54dl.js";
import { y as ChannelMessageActionAdapter } from "../../types.core-DP9EvAXq.js";
import { t as ResolvedSlackAccount } from "../../accounts-ERH1bILx.js";
import { t as slackPlugin } from "../../channel-NlzkwSvY.js";
import { x as sendMessageSlack } from "../../blocks-input-602JTjrt.js";
import { t as SlackMessageEvent } from "../../types-DB9IYh_w.js";
import { n as prepareSlackMessage, t as createInboundSlackTestContext } from "../../prepare.test-helpers-1tz-souq.js";
import { t as createSlackOutboundPayloadHarness } from "../../outbound-payload.test-harness-BCwckaiB.js";
import { t as setSlackRuntime } from "../../runtime-DCnB5oR8.js";
import { AgentToolResult } from "@earendil-works/pi-agent-core";

//#region extensions/slack/src/channel-actions.d.ts
type SlackActionInvoke = (action: Record<string, unknown>, cfg: unknown, toolContext: unknown) => Promise<AgentToolResult<unknown>>;
declare function createSlackActions(providerId: string, options?: {
  invoke?: SlackActionInvoke;
}): ChannelMessageActionAdapter;
//#endregion
//#region extensions/slack/src/outbound-adapter.d.ts
declare const slackOutbound: ChannelOutboundAdapter;
//#endregion
export { type ResolvedSlackAccount, type SlackMessageEvent, createInboundSlackTestContext, createSlackActions, createSlackOutboundPayloadHarness, prepareSlackMessage, sendMessageSlack, setSlackRuntime, slackOutbound, slackPlugin };