import { a as MigrationItem } from "../../types-D_yufDi82.js";
import { t as HermesSource } from "../../source-CGeUOT2X.js";
import { t as PlannedTargets } from "../../targets-CKZnNrgA.js";

//#region extensions/migrate-hermes/skills.d.ts
declare function buildSkillItems(params: {
  source: HermesSource;
  targets: PlannedTargets;
  overwrite?: boolean;
}): Promise<MigrationItem[]>;
//#endregion
export { buildSkillItems };