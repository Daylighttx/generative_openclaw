import { a as normalizeTelegramCommandName, i as normalizeTelegramCommandDescription, o as resolveTelegramCustomCommands, t as TELEGRAM_COMMAND_NAME_PATTERN } from "../../command-config-D06UCVCM.js";
import { o as parseTelegramTopicConversation } from "../../runtime-api-CcLj6YtJ.js";
import { r as resetTelegramThreadBindingsForTests, t as createTelegramThreadBindingManager } from "../../thread-bindings-BQxzydaA.js";
import { f as mergeTelegramAccountConfig } from "../../accounts-BY9vgN88.js";
import { i as buildTelegramModelsProviderChannelData, n as TelegramInteractiveHandlerRegistration, r as buildCommandsPaginationKeyboard, t as TelegramInteractiveHandlerContext } from "../../interactive-dispatch-8z5w2_SE.js";
import { n as listTelegramDirectoryPeersFromConfig, t as listTelegramDirectoryGroupsFromConfig } from "../../directory-config-CSuDDXg0.js";
import { t as collectTelegramSecurityAuditFindings } from "../../security-audit-DPBmed29.js";
import { n as normalizeCompatibilityConfig, t as legacyConfigRules } from "../../doctor-contract-BVHSNyPo.js";
import { n as collectRuntimeConfigAssignments, r as secretTargetRegistryEntries } from "../../secret-contract-7QrDtYpb.js";

//#region extensions/telegram/src/setup-contract.d.ts
declare const singleAccountKeysToMove: string[];
//#endregion
export { TELEGRAM_COMMAND_NAME_PATTERN, type TelegramInteractiveHandlerContext, type TelegramInteractiveHandlerRegistration, buildCommandsPaginationKeyboard, buildTelegramModelsProviderChannelData, collectRuntimeConfigAssignments, collectTelegramSecurityAuditFindings, createTelegramThreadBindingManager, legacyConfigRules, listTelegramDirectoryGroupsFromConfig, listTelegramDirectoryPeersFromConfig, mergeTelegramAccountConfig, normalizeCompatibilityConfig, normalizeTelegramCommandDescription, normalizeTelegramCommandName, parseTelegramTopicConversation, resetTelegramThreadBindingsForTests, resolveTelegramCustomCommands, secretTargetRegistryEntries, singleAccountKeysToMove };