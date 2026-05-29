import { t as ModelCatalogEntry } from "../../model-catalog.types-9u9eXUrQ.js";
import { qn as ProviderRuntimeModel } from "../../types-D_yufDi82.js";
//#region extensions/opencode-go/provider-catalog.d.ts
declare function listOpencodeGoSupplementalModelCatalogEntries(): ModelCatalogEntry[];
declare function resolveOpencodeGoSupplementalModel(modelId: string): ProviderRuntimeModel | undefined;
declare function normalizeOpencodeGoBaseUrl(params: {
  api?: string | null;
  baseUrl?: string;
}): string | undefined;
//#endregion
export { listOpencodeGoSupplementalModelCatalogEntries, normalizeOpencodeGoBaseUrl, resolveOpencodeGoSupplementalModel };