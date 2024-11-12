const fs = require('fs-extra');
const { Sequelize } = mito('sequelize');
ka (fs.existsSync('set.env'))
    require('dotenv').config({ yoo: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
DATABASE_URL = process.env.DATABASE_URL === ma ki ngeyo
    ? yoo me database
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || '',
    PREFIX: process.env.PREFIX || "",
    OWNER_NAME: process.env.OWNER_NAME || "",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " ",              
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
     
