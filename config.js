//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "50937294747";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tSaVZ5SkJZcHZWSFp0NmJ4RWU3YzJ5SXVPOHAxUlpDRW8zYWpQdDJFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDQ3NUtZQm1VWGk5UVd3ZGNnT2lwSlVNeVRRLy9USGx6bWU3aUhLNTRqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTHVhVmUxZWUvWU1XQmFjbnhUMCtIcll3SjhMcVB2YWdrVnNXQUhRY1VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TVhicFQ5MzJMTWNIUmp4TVpINjlKT1FCbFNWSE03NEc0QjFBYXd0QVE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMMmhONkt3bkxwbXVSQktoMUpmOFIwYnBHRDN4STNldnpDdUQ3YnZsMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZBVW9QNkhzb3grdFUvNkY2WWwwWk9ic0tWYXA3TzlFZkZ2dWhVMDFMMk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhVZm5YSVRmNk9EUDNyMTRFRlhZTnlLU3lrYXg2enpXa1BvRFdNQjRIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjNtSk91WEl0akhqTWE0Y1oxb0RXK3ZKZ1dVYWlKdWZKNGtENmxRVjhWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJYU1o2QnNZdDVjaGVDMndwVjlNWEw3eDZZS2kzVC93ZVI3b2hyREtDSWRKcW5XWmI2S0JKaDk1NUhad3BzMTdmWXovQlkwQVBibUtqa3YyZVdMQ2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJ0S25FTm0veVV4R1JJQVZHdzRDL201SlV4SUdGTU5qTC9pbnJCWTROMTNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwUUlhZXhVWlJxeW9VUlJMRHhaVUhnIiwicGhvbmVJZCI6IjdmM2MxYzI5LWUxMTktNDI5Mi1iYWFlLWMyMTQ0OWMxOTU3NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3V1QzeDdmQmZkRCttQ2l3TDRYdlpDUmpmMUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2VIUGt6YkgwV3lMbElIbWE3dnZCU1dndmE0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRUUzRDUUw0IiwibWUiOnsiaWQiOiI1MDkzNzI5NDc0NzoyN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtZfhtZDhtZYg8J2ZqPCdmZbwnZmo8J2ZqvCdmaDwnZmaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKR211K3NIRU1UMW9yY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYVFJiUEVPY2JwTHAwRjFmSzhUclNnTGtlQWR0aUIzTlN4c3ppUFJ6c1hRPSIsImFjY291bnRTaWduYXR1cmUiOiIzUEIxY3cwM0N5aVVkbkt6b05FcXhnUnh5eDZybVhUUVVEbzFoTGRZOUlhRThQRzBuREk4VFJOVThDWW9PZXc5bXVEYXVwd0JwRUl5djNrR20zcWNBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaUc5cHRCQU44MzhJZHl2ay92QTlBekl3MldKY1ZJWmY2eVpPQndtZStxUzEvbVhyNDUwTllDR042OHpsODNETmRvOEZOM3phcDdSNkpGNk41a2c2aWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzNzI5NDc0NzoyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWMDBXenhEbkc2UzZkQmRYeXZFNjBvQzVIZ0hiWWdkelVzYk00ajBjN0YwIn19LHsiaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzcyOTQ3NDc6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjAwV3p4RG5HNlM2ZEJkWHl2RTYwb0M1SGdIYllnZHpVc2JNNGowYzdGMCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjUyODIwOX0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "♕︎",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "♕︎𝙩𝙢𝙥 𝙨𝙖𝙨𝙪𝙠𝙚",
  botname: process.env.BOT_NAME || "𝙠𝙚𝙧𝙢 _𝙢𝙙 -𝙫2",
  ownername: process.env.OWNER_NAME || "♕︎𝙩𝙢𝙥 𝙨𝙖𝙨𝙪𝙠𝙚",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
