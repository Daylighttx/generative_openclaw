import { n as ChannelOutboundAdapter } from "../../outbound.types-CMry54dl.js";
import { y as ChannelMessageActionAdapter } from "../../types.core-DP9EvAXq.js";
import { n as ChannelPlugin } from "../../types.public-DtOJ3hmq.js";
//#region extensions/imessage/src/imessage.test-plugin.d.ts
declare const createIMessageTestPlugin: (params?: {
  outbound?: ChannelOutboundAdapter;
  actions?: ChannelMessageActionAdapter;
}) => ChannelPlugin;
//#endregion
export { createIMessageTestPlugin };