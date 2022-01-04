const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/P47w0P3.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Spirit ser bot created by Spirit *
*Creator number : wa.me/18052196558?text=Hi%20spirit%20.%20*

*spirit bot group* : https://chat.whatsapp.com/FLqVrc4RdakIjXqcNYz7vU

*Githublink (Setup)* :    https://github.com/SPlRlT-YT/Spirit-ser

*Audio commads* :   https://github.com/ANUSER1/DARK/tree/master/uploads

*Sticker commads* : https://github.com/ANUSER1/DARK/tree/master/sticker

*My instagram * : _0anshid0_ 
*My number*     : 916238560742

*For More Updates cantact me ☝*
`}) 

}));
