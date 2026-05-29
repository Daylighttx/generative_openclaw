import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { n as RuntimeEnv } from "../../runtime-Cs2vi4bp.js";
import { i as WizardPrompter } from "../../prompts-Bn9UM8ID.js";
import { i as ChannelOutboundContext, n as ChannelOutboundAdapter, y as OutboundDeliveryResult } from "../../outbound.types-CMry54dl.js";
import { E as ChannelMeta, _ as ChannelLogSink, b as ChannelMessageActionContext, c as ChannelCapabilities, r as ChannelAccountSnapshot, y as ChannelMessageActionAdapter } from "../../types.core-DP9EvAXq.js";
import { L as ChannelResolveKind, R as ChannelResolveResult, U as ChannelStatusAdapter, k as ChannelGatewayContext } from "../../types.adapters-Buiv-D12.js";
import { n as ChannelPlugin } from "../../types.public-DtOJ3hmq.js";
import { n as PluginRuntime } from "../../types-DE9CtDzD.js";
import { t as twitchPlugin } from "../../plugin-CZQfjobD.js";

//#region extensions/twitch/src/runtime.d.ts
declare const setTwitchRuntime: (next: PluginRuntime) => void, getTwitchRuntime: () => PluginRuntime;
//#endregion
export { type ChannelAccountSnapshot, type ChannelCapabilities, type ChannelGatewayContext, type ChannelLogSink, type ChannelMessageActionAdapter, type ChannelMessageActionContext, type ChannelMeta, type ChannelOutboundAdapter, type ChannelOutboundContext, type ChannelPlugin, type ChannelResolveKind, type ChannelResolveResult, type ChannelStatusAdapter, type OpenClawConfig, type OutboundDeliveryResult, type RuntimeEnv, type WizardPrompter, setTwitchRuntime, twitchPlugin };