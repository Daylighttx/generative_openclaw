import { i as matrixSetupAdapter, n as matrixOnboardingAdapter, t as createMatrixThreadBindingManager } from "../../thread-bindings-gt8SkT8_.js";
import { r as resetMatrixThreadBindingsForTests } from "../../thread-bindings-shared-BeSba8cg.js";
import { t as setMatrixRuntime } from "../../runtime-BSlNsf8k.js";
import { n as normalizeCompatibilityConfig, t as legacyConfigRules } from "../../doctor-contract-C51A-C9H.js";
import { n as collectRuntimeConfigAssignments, r as secretTargetRegistryEntries } from "../../secret-contract-CiYCGN72.js";

//#region extensions/matrix/src/setup-contract.d.ts
declare const singleAccountKeysToMove: ("deviceId" | "replyToMode" | "avatarUrl" | "groups" | "dm" | "responsePrefix" | "mediaMaxMb" | "actions" | "ackReaction" | "ackReactionScope" | "threadBindings" | "textChunkLimit" | "chunkMode" | "blockStreaming" | "threadReplies" | "reactionNotifications" | "allowBots" | "dangerouslyAllowNameMatching" | "autoJoin" | "initialSyncLimit" | "encryption" | "allowlistOnly" | "startupVerification" | "startupVerificationCooldownHours" | "autoJoinAllowlist" | "rooms")[];
declare const namedAccountPromotionKeys: ("password" | "deviceId" | "name" | "avatarUrl" | "initialSyncLimit" | "encryption" | "homeserver" | "userId" | "accessToken" | "deviceName")[];
declare function resolveSingleAccountPromotionTarget(params: {
  channel: Record<string, unknown>;
}): string;
//#endregion
export { collectRuntimeConfigAssignments, createMatrixThreadBindingManager, legacyConfigRules, matrixSetupAdapter, matrixOnboardingAdapter as matrixSetupWizard, namedAccountPromotionKeys, normalizeCompatibilityConfig, resetMatrixThreadBindingsForTests, resolveSingleAccountPromotionTarget, secretTargetRegistryEntries, setMatrixRuntime, singleAccountKeysToMove };