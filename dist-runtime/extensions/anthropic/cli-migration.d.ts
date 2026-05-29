import { i as OpenClawConfig } from "../../types.openclaw-Bg16ogQW.js";
import { Tt as ProviderAuthResult } from "../../types-D_yufDi82.js";
import { n as readClaudeCliCredentialsForSetup } from "../../cli-auth-seam-CpPQG0xz.js";
//#region extensions/anthropic/cli-migration.d.ts
type ClaudeCliCredential = NonNullable<ReturnType<typeof readClaudeCliCredentialsForSetup>>;
declare function hasClaudeCliAuth(options?: {
  allowKeychainPrompt?: boolean;
}): boolean;
declare function buildAnthropicCliMigrationResult(config: OpenClawConfig, credential?: ClaudeCliCredential | null): ProviderAuthResult;
//#endregion
export { buildAnthropicCliMigrationResult, hasClaudeCliAuth };