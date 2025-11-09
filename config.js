const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VJZHZYa0t1MURVWnhvTlBQd2dzSTBzcVBxNjhzaTMvSnc3Nkp2VEtWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2JFQXhUQnpVR3RVNVR0dG9DZXNDeVpoc004VXRwZzE0QXJoRTEzd2Z6Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRWhPeHBxMHRxUVVPZ24vRW5hSklGTlBzd1cvTDVqa0F5dDlFaXAxckg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFK25STWwya3hHY29DOG9ERFpsZk82cFAraFcxeXozemJueXc4QWRhNUg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1MRGFEVmlZcU52VWtGWkFZWWhkaC8wVFpHbU5aK2JlMW5DK0tGbEdrR1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing4VldIMVdYWHF6VFAyQVhrQ2Jwa0JCNW5SV2RBMkdZN0lSaStXZWh1V1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NaY2JtMXZ4SlNET3FBT3I2czhteTY3SDdvSXFsNjNGbWJKbU1RTGYzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmZJVldqUVJVcGlWT1gyYUxVYnZDSkpJNTJ5OUlMNTV2cmgxNXo1ZklHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRsSHh3cm9MdkI4RXhhVDZjZ2NYSG1ZZjQ0REdZWCs3SWgrbGYvd3FkVFJtcEUvWWZ4NGJSQVJNaE9wUGdHMmRXOEVKNm4yUVpaaEdJdHJuZ1VSZUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJFSktVWkxGMXNMcG40WHlUYzlIZUUyV1BwazZuL0ovdFFxOHQ2bWd4YlNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBREVFTDVNRCIsIm1lIjp7ImlkIjoiOTIzNDcyMjkxNzI3Ojg4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlpBSElELlMiLCJsaWQiOiI3MzQ3ODk1NDg0MDMxODo4OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x2OXBkSUdFTk9IdzhnR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRwZHI1L1RiekJMT2sveFYxZyt0aVptOFhBN1ZFaThqV0hmb3F0RGpVU1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikdmc3h3dnFDUE0wTEozTWZmdFJOYnhlZHErOWdDZTRXbnI4MFlWeEFISzlrRm1GdVlBaUFObVJpRmQ3Q09zZHdXODZ4MDlRcFF0aDZxbUd1M2J6ekNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMbFBlc0ZPa2w5U2s0UENFeU5UNG9uNWR6K1ZoS1VDWEV5VG53SFVXR1E0UW5ubHVwTG1HTXR0VU5yMzJRWCtVeFJ2M004aWVTUVpkaU9TVUJSd0tDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ3MjI5MTcyNzo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVNlhhK2YwMjh3U3pwUDhWZFlQclltWnZGd08xUkl2STFoMzZLclE0MUVrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWdnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjI3MDY0MDEsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 
ANTI_CALL: process.env.ANTI_CALL || "false"
// make it true for auto call reject 
};
