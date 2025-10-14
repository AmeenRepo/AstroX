/*const config = require('../config');
let fs = require('fs');
const { exec } = require('child_process');
const { AstroX } = require('../command');

AstroX({
    pattern: "update",
    react: "🔄",
    desc: "Update folder from GitHub",
    category: "system",
    use: '.update',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const repoUrl = 'https://github.com/W18T4SE6/CRONAZ-XD.git'; 
        const targetFolder = 'plugins'; 
        
        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder); 
        }

        const gitCommand = fs.existsSync(`${targetFolder}/.git`)
            ? `git -C ${targetFolder} pull`
            : `git clone ${repoUrl} ${targetFolder}`;

       
        await new Promise((resolve, reject) => {
            exec(gitCommand, (err, stdout, stderr) => {
                if (err) {
                    reject(`Git command failed: ${stderr}`);
                } else {
                    resolve(stdout);
                }
            });
        });

        
        await conn.sendMessage(from, { text: '*✅ Update completed successfully!*' }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply(`*Error during update:* ${error.message}`);
    }
});
*/
import { Module } from '../command.js'; 
import { execSync } from 'child_process';
import url from 'url';
import path from 'path';

// --- ESM fix for __filename ---
const __filename = url.fileURLToPath(import.meta.url); 
// ------------------------------

let updateHandler = async (m, { conn, text, isOwner, reply }) => {
  if (!isOwner) {
    return reply('❌ This command is only for the bot owner.');
  }
  
  try {
    let branch = 'main'; 

    if (text && text.toLowerCase().includes('now')) {
      
      let pullOutput = execSync(`git pull origin ${branch}`).toString();
      
      // Send success message first
      reply(`🛠️ *CRONAZ-XD Main Branch Updates Applied Successfully* 🛠️\n\n\`\`\`${pullOutput.trim()}\`\`\`\n\n🔄 *Restarting to apply changes...*`);
      
      // Crucial: Exit the process to force the Docker container/PM2 to restart
      // This loads the newly pulled code.
      setTimeout(() => process.exit(0), 5000); // Give 5 seconds for message to send

    } else {
      
      execSync(`git fetch origin ${branch}`);
   
      let updates = execSync(`git log HEAD..origin/${branch} --oneline`).toString().trim();
      
      if (updates) {
        let updateList = updates.split('\n');
        let updateMessage = '🛠️ *CRONAZ-XD New Updates Available* 🛠️\n\n';
        
        updateList.forEach((update) => {
          updateMessage += `\`${update}\`\n`; 
        });
        
        updateMessage += `\nUse *!update now* command to apply these updates from the main branch.`;

        reply(updateMessage);
      } else {
        reply('🛠️ No new updates found. Your CRONAZ-XD bot is already up to date! 🛠️');
      }
    }
  } catch (error) {
    reply(`*❌ Update Error ❌*\n\nAn error occurred during the update process.\n\n\`\`\`Error: ${error.message}\`\`\``);
  }
};

Module({
    command: ['update', 'fix'], 
    tags: ['owner'],
    desc: 'Checks and applies updates from the main repository branch.', 
    on: "command", 
    filename: __filename 
}, updateHandler);
