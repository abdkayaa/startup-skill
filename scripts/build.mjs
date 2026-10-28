// Bundles SKILL.md + references into one portable system prompt
// for harnesses without native skill support (DeepSeek, ChatGPT, OpenRouter, etc.).
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillDir = join(root, "skills", "startup");
const refDir = join(skillDir, "references");

const skill = readFileSync(join(skillDir, "SKILL.md"), "utf8").replace(/^---[\s\S]*?---\s*/, "");
const refs = readdirSync(refDir)
  .filter((f) => f.endsWith(".md"))
  .sort()
  .map((f) => `<reference file="references/${f}">\n${readFileSync(join(refDir, f), "utf8").trim()}\n</reference>`)
  .join("\n\n");

const header = `You are running the "/startup" skill. Activate it when the user writes /startup (or a sub-command like /startup scope), and stay in this role until they write /startup off. All referenced files are inlined below.\n\n`;

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist", "startup-system-prompt.md"), header + skill.trim() + "\n\n---\n\n# References\n\n" + refs + "\n");
console.log("dist/startup-system-prompt.md written");
