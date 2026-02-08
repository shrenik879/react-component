import { apiRequest } from "./api";

export const generateComponent = (prompt) =>
  apiRequest("/ai/generate", "POST", { prompt });

export const customizeComponent = (code, prompt) =>
  apiRequest("/ai/customize", "POST", {
    code,
    prompt, // ✅ MUST be named "prompt"
  });

export const explainComponent = (code) =>
  apiRequest("/ai/explain", "POST", { code });
