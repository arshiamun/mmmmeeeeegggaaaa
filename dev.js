const {MessageEmbed} = require('discord.js')

module.exports = {
    name : "dev",
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle('Mega Clear Developer ')
        .setDescription(' Developer  : Arshia#3133 ')
        .setColor('fff9f9')
        .setThumbnail('https://cdn.discordapp.com/attachments/808690667575705610/808969568001327104/Mega_Clear.png')

        message.channel.send(embed)
    }
}