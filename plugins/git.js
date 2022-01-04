const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/P47w0P3.jpeg", { responseType: 'arraybuffer' })

 await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝐃𝐀𝐑𝐊 𝐁𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐀𝐍𝐒𝐇𝐈𝐃*
 
____________________________________________________________________________
|*𝐂𝐑𝐄𝐀𝐓𝐄𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 : wa.me/916238560742?text=Hi%20spirit%20.%20*
|_____________________________________________________________________________
|*𝐀𝐍𝐒𝐇𝐈𝐃 𝐁𝐎𝐓 𝐆𝐑𝐔𝐎𝐏* : https://chat.whatsapp.com/CTqoTm0dnX8FsNmaFRYmJ4
|_____________________________________________________________________________
|*𝐆𝐈𝐓𝐇𝐔𝐁 𝐋𝐈𝐍𝐊 (Setup)* :    https://github.com/ANUSER1/DARK
|______________________________________________________________________________
|*𝐀𝐔𝐃𝐈𝐎 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒* :   https://github.com/ANUSER1/DARK/tree/master/uploads
|_____________________________________________________________________________
|*𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒* : https://github.com/ANUSER1/DARK/tree/master/sticker
|___________________________________________________________________________
|*𝐌𝐘 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌  * :  https://www.instagram.com/_0anshid0_/
|_______________________________|
|*𝐌𝐘 𝐍𝐔𝐌𝐁𝐄𝐑*     : 916238560742|
|_______________________________|
|Ⓑ︎Ⓞ︎Ⓣ︎ Ⓝ︎Ⓐ︎Ⓜ︎Ⓔ︎ : 𝐃𝐀𝐑𝐊            |
|_______________________________|
|*For More Updates cantact me ☝*
`}) 

}));
