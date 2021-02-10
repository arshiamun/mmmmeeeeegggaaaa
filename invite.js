const {MessageEmbed} = require('discord.js')

module.exports = {
    name : "invite",
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle('Invite Link ')
        .setDescription('Link : https://discord.com/api/oauth2/authorize?client_id=808957382502645780&permissions=8&scope=bot')
        .setColor('fff9f9')
        .setThumbnail('https://cdn.discordapp.com/attachments/808690667575705610/808969568001327104/Mega_Clear.png')

        message.channel.send(embed)
    }
}