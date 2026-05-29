import { a as MigrationItem } from "../../types-D_yufDi82.js";
import { t as ClaudeSource } from "../../source-ukz8MoU2.js";
import { t as PlannedTargets } from "../../targets-N0occ_4p.js";

//#region extensions/migrate-claude/memory.d.ts
declare function buildMemoryItems(params: {
  source: ClaudeSource;
  targets: PlannedTargets;
  overwrite?: boolean;
}): Promise<MigrationItem[]>;
//#endregion
export { buildMemoryItems };