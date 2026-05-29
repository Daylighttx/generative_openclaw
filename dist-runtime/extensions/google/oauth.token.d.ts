import { s as GeminiCliOAuthCredentials } from "../../oauth.shared-SFy7Y8al.js";

//#region extensions/google/oauth.token.d.ts
declare function exchangeCodeForTokens(code: string, verifier: string): Promise<GeminiCliOAuthCredentials>;
//#endregion
export { exchangeCodeForTokens };