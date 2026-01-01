import { watchFile, unwatchFile } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import log from "#lib/logger.js";
import { LanguageManager } from "#lib/LanguageManager.js";

global.PAIRING_NUMBER = 6283135485990;

global.ownerNumber = ["6283110390167"];

global.IS_PUBLIC = true;

global.readsw = {
  active: true,
  react: false,
  emoji: ["🔥", "💀", "☠️", "🥀", "🥶"],
};


const langManager = new LanguageManager("id");

// Set the active language (change to 'en' for English)
langManager.setLanguage("id");

// Shortcut for easier global access
global.lang = langManager;

// Helper messages for the active language
global.mess = {
  wait: lang.get("mess.wait"),
  owner: lang.get("mess.owner"),
  group: lang.get("mess.group"),
  admin: lang.get("mess.admin"),
  botAdmin: lang.get("mess.botAdmin"),
  private: lang.get("mess.private"),
};

// === Watermark & UI Defaults ===
global.stickpack = "Created By";
global.stickauth = "ZENITH";

global.title = "ZENITH";
global.body = "Asisten ZACK RYLSEN";
global.thumbnailUrl = "https://files.catbox.moe/wk26bg.png";

// === Hot Reload for config.js ===
const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  log.info("✅ config.js reloaded successfully.");
  import(`${file}?update=${Date.now()}`);
});
