import { Ai as MemoryEmbeddingProviderCreateResult, ki as MemoryEmbeddingProviderCreateOptions } from "../../types-D_yufDi82.js";
import { c as DEFAULT_DEEPINFRA_EMBEDDING_MODEL } from "../../media-models-ChJMRZZh.js";

//#region extensions/deepinfra/embedding-provider.d.ts
declare function createDeepInfraEmbeddingProvider(options: MemoryEmbeddingProviderCreateOptions): Promise<MemoryEmbeddingProviderCreateResult & {
  client: {
    model: string;
  };
}>;
//#endregion
export { DEFAULT_DEEPINFRA_EMBEDDING_MODEL, createDeepInfraEmbeddingProvider };