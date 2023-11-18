const Discord = require('discord.js');
const client = new Discord.Client();

client.on('presenceUpdate', (oldPresence, newPresence) => {
  const durum = `münür`
  const rolID = ``
  if (newPresence.activities.length && newPresence.activities[0].name === durum) {
    if (!newPresence.member.roles.cache.some(role => role.id === rolID)) {
    
      newPresence.member.roles.add(rolID).catch(console.log(`Kişiye rol verilemedi.`));
    }
  }
});
