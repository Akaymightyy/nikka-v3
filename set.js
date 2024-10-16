const fs = require('fs-extra');
const { Sequelize } = mito('sequelize');
ka (fs.existsSync('set.env'))
    require('dotenv').config({ yoo: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
DATABASE_URL = process.env.DATABASE_URL === ma ki ngeyo
    ? yoo me database
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE93b1BFRFJjdEFrOGRLczJBbE0vQnBraTVnTkQzbFV5MlJwb3FqaW1YTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUxobXpZamRlRlRDUkFVdGt3dTZTQjJPM0FSaU5aQjJvTHBteW4rK2NHcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQTNmTFI2QTQ0OVZMOGtnWW0rOVdjSVh5OUdiaTRHaHAzQUVBME9FSVZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMSzMyb0lNdDJQOUNyQjM4L1dPMWFCZUFaOXRrUXRyNGdnNTVhdWFLTVJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitKVWxlaVFKODRibzh3endFRkMrS3BzQWJGbmFVRmxVWHZQNUNHci9CVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im12ZDJMMWkwUVRVbWNsRU5zaWJCRnRrdG93Vkkvd2YrMUVFVEFrWlVDRG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhJU2V0dU1Zb3Fld3JET0pLeW5FSVhkVEtHL2hjdUJ6NXpPMW9wWmdIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1Mb3FtT1FtQk8vQjJWWEJhKy9BbFdRRW9IcDRsci9CaDhtMWxTNHFBND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik10ekpOVitLUWFEQm0vKzV4NGlWanNHU3VNSFlZa2pEWDRQRDJnay81U1VIK29rd3M0d283OTdMMkNzUEhSQXI2T3RMUFF6aHQ2Y2JJVlI5dTlQSkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6IjFZc3c2SE1iWkFCcEtmdlI1cjVpbmI2QmF1NndTZ0dzQnBqYTNxQkVVb2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InM5VXlPRU5lUXZXd19FS3JXbTV6NmciLCJwaG9uZUlkIjoiNTNlOTE4MTgtNmRjNS00MjZjLThlNTItYzJjMGJjNGI5NzNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngvV3JraU5EUUk3NkxyMGZBVlljd1lGYnB4cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEVmpUZEdrZGg2ZU1NbldhQU9LcXJxRDhZU009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlNaVE5RMlYiLCJtZSI6eyJpZCI6IjIzNDkxMTIxNzEwNzg6MjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2luZyBIYWtpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKUHQ3OXdGRUtIY3dMZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0dzcwdlE4NVp1Mi96WDZnUVVrRDdLR3VlOGxGMlJTb0pNOWJFUm9HckZjPSIsImFjY291bnRTaWduYXR1cmUiOiJnK0hubU0zdnQwSDJvN2NKZTByazcrVURrOXhMYW96VkdBRFBqcFBrNE01SXA0VzFYejhzVm5PeEsxUCtEZnVDK3lLTWJzOENaM1ZWNENPaGtyWUFBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVVNCVHJpTEYwV3BrTFkvL0VPaXhMbCtwTlNSSEpxWWdQa3h2MXo3UCtqSzJZWlY3OVBybldGNTRNMGVGbjU2enJTQ0o4RkVyTStwOW13Q255aTA2QVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTEyMTcxMDc4OjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVNTzlMMFBPV2J0djgxK29FRkpBK3locm52SlJka1VxQ1RQV3hFYUJxeFgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkxMTM2NDd9',
    PREFIX: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "KING HAKI",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " KING HAKI",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "Ee",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'Ku',
    BOT : process.env.BOT_NAME || 'NIKKA-V3',
    URL : process.env.BOT_MENU_LINKS || 'https://imgur.com/a/3RmwdeA',
    MODE: process.env.PUBLIC_MODE || "Ee",
    PM_PERMIT: process.env.PM_PERMIT || 'Ee',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'Ku',
    DP : process.env.STARTING_BOT_MESSAGE || "Ee",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'Ku',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhKgKgRXgadiga7777".
   
};
wek fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`update ${__filename}`);
    gin require.cache[fichier];
    mito(fichier);
});
     
