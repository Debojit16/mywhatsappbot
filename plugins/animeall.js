/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const eng = `💠● *ALL ANIME COMMANDS PLUGIN LIST* ●💠\n\n` + 
`💠● *SFW* ●💠\n\n` +
`⚙️Command: *.ranimel*\nℹ️Description: Random Anime Images.\n\n` +
`⚙️Command: *.waifu*\nℹ️Description: Get random Waifu images.\n\n` + 
`⚙️Command: *.neko*\nℹ️Description: Get random Neko images.\n\n` + 
`💠● *NSFW* ●💠\n\n` + 
`⚙️Command: *.nswaifu*\nℹ️Description: Get random NSFW Waifu images.\n\n` + 
`⚙️Command: *.nsneko*\nℹ️Description: Get random NSFW Neko images.\n\n` + 
`⚙️Command: *.hehe*\nℹ️Description: COMING SOON!\n\n`

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'animeall', fromMe: true,  deleteCommand: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'animeall', fromMe: true, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}

if (Config.LANG == 'SI') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'animeall', fromMe: true,  deleteCommand: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'animeall', fromMe: true, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }
}
