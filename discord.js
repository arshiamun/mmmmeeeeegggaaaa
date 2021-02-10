const {MessageEmbed} = require('discord.js')

module.exports = {
    name : "discord",
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle('Link Discord  ')
        .setDescription('Link Discord : https://discord.gg/Ty2Qc7GJ')
        .setColor('fff9f9')
        .setThumbnail('https://cdn.discordapp.com/attachments/808690667575705610/808969568001327104/Mega_Clear.png')

        message.channel.send(embed)
    }
}