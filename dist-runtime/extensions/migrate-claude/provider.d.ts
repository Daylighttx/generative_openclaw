import { d as MigrationProviderPlugin, u as MigrationProviderContext } from "../../types-D_yufDi82.js";
//#region extensions/migrate-claude/provider.d.ts
declare function buildClaudeMigrationProvider(params?: {
  runtime?: MigrationProviderContext["runtime"];
}): MigrationProviderPlugin;
//#endregion
export { buildClaudeMigrationProvider };