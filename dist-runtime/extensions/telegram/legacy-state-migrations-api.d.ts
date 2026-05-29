import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { g as ChannelLegacyStateMigrationPlan } from "../../types.core-DP9EvAXq.js";
//#region extensions/telegram/src/state-migrations.d.ts
declare function detectTelegramLegacyStateMigrations(params: {
  cfg: OpenClawConfig;
  env: NodeJS.ProcessEnv;
}): ChannelLegacyStateMigrationPlan[];
//#endregion
export { detectTelegramLegacyStateMigrations };