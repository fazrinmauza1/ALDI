const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./data/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const fs = require('fs')
const axios = require("axios")
const encodeUrl = require('encodeurl')
const figlet = require('figlet')
const chalk = require('chalk')
const colors = require('colors');
const { banner, start, success } = require('./data/functions')
const { color } = require('./data/color')
const welkom = JSON.parse(fs.readFileSync('./library/database/welkom.json'))


shp = '⬡'
spc1 = '           '

spc2 = '\n                '
spc3 = '                   '
spc4 = '       '

require('./ziyy.js')
nocache('./ziyy.js', module => console.log(`${module} is now updated!`))

const starts = async (ALDI = new WAConnection()) => {
    ALDI.logger.level = 'warn'
    ALDI.version = [2, 2140, 12];
	ALDI.browserDescription = ["Aldi Fauzi", "safari", "windows 10"];
console.log(color(``))
console.log(color(figlet.textSync(`${spc1}SAINS BOT`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))

    ALDI.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./data/sessions/whatsappWeb.json') && ALDI.loadAuthInfo('./data/sessions/whatsappWeb.json')
    ALDI.on('connecting', () => {
    })
    ALDI.on('open', () => {
    console.log('succes')
    })
    await ALDI.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./data/sessions/whatsappWeb.json', JSON.stringify(ALDI.base64EncodedAuthInfo(), null, '\t'))

ALDI.on('group-participants-update', async (anu) => {
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
if (!welkom.includes(anu.jid)) return
		try {
		    fkontakk = { key: {
		    fromMe: false,
		    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285697725326-1604595598@g.us' } : {})
		    },
		    message: {
		    "contactMessage":{"displayName":fake,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;ALDI;;;\nFN:ALDI\nitem1.TEL;waid=6285697725326:+62 85697725326\nitem1.X-ABLabel:Mobile\nEND:VCARD"
		     }}}
		     const mdata = await ALDI.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
        let v = ALDI.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
            //const pushname = mek.key.fromMe ? ALDI.user.name : conts.notify || conts.vname || conts.name || '-'
         member = mdata.participants.length
          try {
               var ppimg = await ALDI.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            try {
                var ppgc = await ALDI.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
            if (anu.action == 'add') {
            img = await getBuffer(`https://ziy.herokuapp.com/api/author/welcome1?pp=${shortpc.data}&nama=${anu_user}&namagc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)
                       teks = `
Halo @${num.split("@")[0]} 👋\nSelamat datang di Grup
*${mdata.subject}*

Intro Member Baru
${shp} Nama:
${shp} Umur:
${shp} Status:
${shp} Askot:

Deskripsi Group :
${mdata.desc}
`
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1

mhan = await ALDI.prepareMessage(mdata.id, kma, image, {thumbnail: img})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ALDI.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
sendButImage(mdata.id, teks, 'Sering nimbrung dan baca rules grup', img, [{buttonId: 'mam', buttonText: {displayText: 'Welcome kak 👋'}, type: 1},{buttonId: '!sc', buttonText: {displayText: 'Hallo Kak️'}, type: 1}], {thumbnail: img, "contextInfo": {mentionedJid: [num]}, quoted: {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `subscribe : xZiyy`, 'jpegThumbnail': fs.readFileSync('./library/gambar/imageFake.jpeg')}}}})
      
}
if (anu.action == 'remove') {
buffa = await getBuffer(`https://ziy.herokuapp.com/api/author/goodbye1?pp=${shortpc.data}&nama=${anu_user}&namagc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)
teks = `${anu_user} sayoooonara👋`
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ALDI.prepareMessage(mdata.id, kma, image, {thumbnail: buffa})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ALDI.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
sendButImage(mdata.id, teks, 'akhir nya beban group berkurang 1', buffa, [{buttonId: 'X - Dev Team', buttonText: {displayText: 'Bye 👋'}, type: 1}], {thumbnail: buffa, "contextInfo": {mentionedJid: [num]}, quoted: {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `subscribe : xZiyy`, 'jpegThumbnail': fs.readFileSync('./library/gambar/imageFake.jpeg')}}}})
}
if (anu.action == 'promote') {
img = await getBuffer(`https://ziy.herokuapp.com/api/author/promote?pp=${shortpc.data}&nama=${anu_user}&namagc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)
teks =`
selamat kamu telah menjadi admin group
`
//ALDI.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
ALDI.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]},
            
quoted: {
"key": {
"fromMe": false,
"participant": `0@s.whatsapp.net`,
"remoteJid": `0@s.whatsapp.net`
},
"message": {
"groupInviteMessage": {
"groupJid": "628983583288-1620319322@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": "IstMeALDI",
"jpegThumbnail": fs.readFileSync('./library/gambar/imageFake.jpeg'),
"caption": `ALDI FAUZI`
}

}
}
})
} else if (anu.action == 'demote') {
img = await getBuffer(`https://ziy.herokuapp.com/api/author/demote?pp=${shortpc.data}&nama=${anu_user}&namagc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&bg=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&member=${mdata.participants.length}`)
teks = `awokawokawok gimana rasa nya di demote🐦`
//ALDI.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
ALDI.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]},
quoted: {
"key": {
"fromMe": false,
"participant": `0@s.whatsapp.net`,
"remoteJid": `0@s.whatsapp.net`
},
"message": {
"groupInviteMessage": {
"groupJid": "628983583288-1620319322@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": "IstMeALDI",
"jpegThumbnail": fs.readFileSync('./library/gambar/imageFake.jpeg'),
"caption": `ALDI FAUZI`
}
}
}
})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})


    ALDI.on('chat-update', async (message) => {
        require('./ziyy.js')(ALDI, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
