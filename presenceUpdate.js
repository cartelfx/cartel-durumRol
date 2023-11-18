const Discord = require('discord.js');
const client = new Discord.Client();

client.on('presenceUpdate', (oldPresence, newPresence) => {
  const statusxd = 'münür';
  const roleID = '';

  const hasTargetStatus = newPresence.activities.some(activity => activity.name === statusxd);

  if (hasTargetStatus) {
    if (!newPresence.member.roles.cache.some(role => role.id === roleID)) {
      newPresence.member.roles.add(roleID).catch(console.error);
    }
  } else {
    if (newPresence.member.roles.cache.some(role => role.id === roleID)) {
      newPresence.member.roles.remove(roleID).catch(console.error);
    }
  }
});
