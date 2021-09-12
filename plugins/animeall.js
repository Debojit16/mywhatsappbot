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

const eng = `💠●*Text To Image Effect List*●💠\n\n` + 
`⚙️Command: *.pemoji*\nℹ️Description: Emoji to PNG.\n\n` + 
`⚙️Command: *.hacker*\nℹ️Description: Text to Hacker wallpaper.\n\n` + 
`⚙️Command: *.matrix*\nℹ️Description: Text to matrix wallpaper\n\n` + 
`⚙️Command: *.hbd*\nℹ️Description: Making birthday cake with a name.\n\n` + 
`⚙️Command: *.gaming*\nℹ️Description: Text to Gaming logo.\n\n` + 
`⚙️Command: *.fpslogo*\nℹ️Description: Text to FPS Gaming logo.\n\n` + 
`⚙️Command: *.shadow*\nℹ️Description: Text to shadow effect.\n\n` + 
`⚙️Command: *.cup*\nℹ️Description: Cup themed image.\n\n` + 
`⚙️Command: *.sad*\nℹ️Description: Text to wet glass effect.\n\n` + 
`⚙️Command: *.wolfm*\nℹ️Description: Text to metal wolf badge.\n\n` + 
`⚙️Command: *.wflogo*\nℹ️Description: Wolf logo with your text.\n\n` + 
`⚙️Command: *.naruto*\nℹ️Description: Text to naruto themed banner.\n\n` + 
`⚙️Command: *.fflogo*\nℹ️Description: Text to FreeFire logo\n\n` + 
`⚙️Command: *.flame*\nℹ️Description: Text to fire effect.\n\n` + 
`⚙️Command: *.avenger*\nℹ️Description: Text to avenger logo\n_(Ex: .avenger Büññy®/Bot)_\n\n`

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'animeall', fromMe: true,  deleteCommand: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'animeall', fromMe: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
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
        Amdi.applyCMD({pattern: 'animeall', fromMe: false, desc: Lang.ANIMEALL_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }
}
