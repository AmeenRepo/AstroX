const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "AstroX~FMAx0YAb#3UA4molr5U0T5MDqQMYhyy017i2HVcjrhtb9xH6GTMU",,
ALIVE_IMG: process.env.ALIVE_IMG || "https://ameen-api.vercel.app/AstroX",
ALIVE_MSG: process.env.ALIVE_MSG || " *AstroX Was Alive Now💗* ",
OWNER_NAME: process.env.OWNER_NAME || "Ameen Sulthan",
MENU: process.env.MENU || "https://ameen-api.vercel.app/AstroX",
BOT_NAME: process.env.BOT_NAME || "AstroX⚡",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
wait: "⏳",
done: "✅",
fail: "❌"
};
