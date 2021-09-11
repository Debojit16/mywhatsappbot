/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const QueenAmdi = require('queenamdi-public-1');
const axios = require('axios');
const request = require('request');

// LIST
const Language = require('../language');
const Lang = Language.getString('effects');
let LOL = Config.WORKTYPE == 'public' ? false : true


Amdi.applyCMD({pattern: 'pemoji ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
        
    var uri = encodeURI(match[1])
    var emo = await QueenAmdi.pemoji(uri)
  
    const profileBuffer = await axios.get(emo.icon, {responseType: 'arraybuffer'})
  
    await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
}));

Amdi.applyCMD({pattern: 'fflogo ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'qr ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.QR_DESC}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(Lang.NEED_TEXT);
  
  var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })
  
  await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
  
}));


Amdi.applyCMD({pattern: 'shadow ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()
  
    var webimage = await axios.get('https://api.lolhuman.xyz/api/photooxy1/shadow?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })
  
    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
  
}));

Amdi.applyCMD({pattern: 'cup ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
      var apikey = await QueenAmdi.api()

      var webimage = await axios.get('https://api.lolhuman.xyz/api/photooxy1/cup?apikey='+ apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })
    
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
    
}));


Amdi.applyCMD({pattern: 'silk ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
        
        var webimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=apivinz&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
    
}));


Amdi.applyCMD({pattern: 'naruto ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=apivinz&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
    
}));


Amdi.applyCMD({pattern: 'wolfm ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
      
      var apikey = await QueenAmdi.api()

      var webimage = await axios.get('https://api.lolhuman.xyz/api/photooxy1/wolfmetal?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
  
}));


Amdi.applyCMD({pattern: 'ml ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'hacker ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'flame ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/photooxy1/flamming?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));

Amdi.applyCMD({pattern: 'spark ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
  }

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'avenger ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
  }

    var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));

Amdi.applyCMD({pattern: 'marvel ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
  }

    var webimage = await axios.get(`https://api.zeks.me/api/marvellogo?apikey=TgzSEsXLPopdlMik61BPsSCKQsh&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));

Amdi.applyCMD({pattern: 'wallbreak ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

  var webimage = await axios.get(`https://api.zeks.me/api/breakwall?apikey=TgzSEsXLPopdlMik61BPsSCKQsh&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));

Amdi.applyCMD({pattern: 'wflogo ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var topText, bottomText;
      if (match[1].includes('/')) {
          var split = match[1].split('/');
          bottomText = split[1];
          topText = split[0];
    }

    var webimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'vintage ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
    var apikey = await QueenAmdi.api()

    var topText, bottomText;
      if (match[1].includes('/')) {
          var split = match[1].split('/');
          bottomText = split[1];
          topText = split[0];
      }
  
      var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto2/realvintage?apikey=' + apikey.key + `&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
  
}));


Amdi.applyCMD({pattern: 'v3d ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'valorant ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var apikey = await QueenAmdi.api()

    var topText, bottomText;
      if (match[1].includes('/')) {
          var split = match[1].split('/');
          bottomText = split[2];
          midText = split[1];
          topText = split[0];
      }
      var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=' + apikey.key + `&text1=${topText}&text2=${midText}&text3=${bottomText}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
  
}));


Amdi.applyCMD({pattern: 'light ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'metal ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'royal ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

        var apikey = await QueenAmdi.api()
    
        var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/glossychrome?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
    
}));

    
Amdi.applyCMD({pattern: 'matrix ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        var webimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
    
}));


Amdi.applyCMD({pattern: 'sad ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

        var apikey = await QueenAmdi.api()

        var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
    
}));


Amdi.applyCMD({pattern: 'hbd ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/birthdaycake?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'dota ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

      var apikey = await QueenAmdi.api()
  
      var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
  
}));


Amdi.applyCMD({pattern: 'lol ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

      var apikey = await QueenAmdi.api()
  
      var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
  
}));


Amdi.applyCMD({pattern: 'aov ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

      var apikey = await QueenAmdi.api()
  
      var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })
  
}));


Amdi.applyCMD({pattern: 'harrypotter ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/photooxy1/harrypotter?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));

Amdi.applyCMD({pattern: 'sparkling ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()
  
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get('https://api.lolhuman.xyz/api/photooxy2/arcade8bit?apikey=' + apikey.key + `&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'ninjalogo ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.Lang.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));

    
Amdi.applyCMD({pattern: 'sandwriting ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'pornhub ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
  
    var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }

    var webimage = await axios.get(`https://zenzapi.xyz/api/textpro/pornhub?text=${topText}&text2=${bottomText}&apikey=393fbc05b14a`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'snow ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/snow3d?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'lionlogo ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
    }
    var webimage = await axios.get('https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=' + apikey.key + `&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'gaming ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'fpslogo ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));


Amdi.applyCMD({pattern: 'blood ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));

    
Amdi.applyCMD({pattern: 'bplogo ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));

Amdi.applyCMD({pattern: '3dtext ?(.*)', fromMe: LOL,  deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var apikey = await QueenAmdi.api()

    var webimage = await axios.get('https://api.lolhuman.xyz/api/textprome/box3d?apikey=' + apikey.key + `&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAP, thumbnail: thumb, quoted: message.data })

}));

  
const thumb = "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"
