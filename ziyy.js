const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./data/simple.js");
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const encodeUrl = require('encodeurl')
const speed = require("performance-now");
const FormData = require('form-data');
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const crypto = require('crypto')
//const {createSticker} = require('wa-sticker-formatter')
const chalk = require('chalk')
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const Exif = require('./data/exif');
const exif = new Exif();
let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
const fetch = require("node-fetch");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const imgbb = require("imgbb-uploader");
const { error } = require("qrcode-terminal");
const { runtime, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require("./data/functions");
const { color, bgcolor } = require("./data/color");
const { getBuffer, fetchJson, getBase64, kyun, createExif } = require("./data/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./data/ytdl");
const { webp2mp4File } = require("./data/webp2mp4");
const afk = JSON.parse(fs.readFileSync("./data/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./data/offline");
const { jadibot, stopjadibot, listjadibot } = require("./data/sessions/jadibot");
const { cmdadd } = require("./data/totalcmd.js");

const {
        
smsg
    
} = require('./data/simple.js')

// DATABASE
let filter = JSON.parse(fs.readFileSync('./library/database/filter.json'))
const sfilter = JSON.parse(fs.readFileSync('./library/database/sfilter.json'))
const welkom = JSON.parse(fs.readFileSync('./library/database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./library/database/antilink.json'))
const _registered = JSON.parse(fs.readFileSync('./library/database/registered.json'))

// library settings
const { mess
} = require('./library/settings/mess.js')
const  setting = JSON.parse(fs.readFileSync('./library/settings/config.json'))
const addowner = JSON.parse(fs.readFileSync('./library/settings/owner.json'));

// Library gambar
fakereply = fs.readFileSync(setting.imageFake);
thumbnail = fs.readFileSync(setting.imageThumb);
imagepdf = fs.readFileSync(setting.imagepdf);


//prefix
let multi = true
let nopref = false
let single = false
let prefa = '!'

// vn/read/ngetik
aread = false
vn = true
ngetik = false

// public/self
self = true

ownerNumber =  [`${setting.ownerN}@s.whatsapp.net`,`6285697725326@s.whatsapp.net`]
ownerN = setting.ownerN
ownerStatus = setting.ownerStatus
fake = setting.fake
ownerName = setting.ownerName
namabot = setting.namabot
ZiyKey = setting.ZiyKey
imgurl = setting.imgurl
igown = setting.igown

G = '*'
//text gg generator

gaya = '```'
shp = '⬡'
hit_today = [];


baterai = {
baterai: "undefined",
cas: false
}
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./library/database/scommand.json"));

            const addCmd = (id, command) => {
            const obj = { id: id, chats: command }
            _scommand.push(obj)
            fs.writeFileSync('./library/database/scommand.json', JSON.stringify(_scommand))
            }
            const getCommandPosition = (id) => {
            let position = null
            Object.keys(_scommand).forEach((i) => {
            if (_scommand[i].id === id) {
            position = i
            }
            })
            if (position !== null) {
            return position
            }
            }
            const getCmd = (id) => {
            let position = null
            Object.keys(_scommand).forEach((i) => {
            if (_scommand[i].id === id) {
            position = i
            }
            })
            if (position !== null) {
            return _scommand[position].chats
            }
            }
            const checkSCommand = (id) => {
            let status = false
            Object.keys(_scommand).forEach((i) => {
            if (_scommand[i].id === id) {
            status = true
            }
            })
            return status
            }
            /*let d = new Date();
            let locale = "id";
            let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
            let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
            Math.floor((d * 1 + gmt) / 84600000) % 5
            ];
            let week = d.toLocaleDateString(locale, { weekday: "long" });
            let date = d.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
            });
            let waktu = d.toLocaleDateString(locale, {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            });*/
            let d = new Date(new Date + 3600000)
            let locale = 'id'
    
            // d.getTimeZoneOffset()
    
           // Offset -420 is 18.00
    
          // Offset    0 is  0.00
    
         // Offset  420 is  7.00
    
            let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
            let week = d.toLocaleDateString(locale, { weekday: 'long' })
            let date = d.toLocaleDateString(locale, {
      
            day: 'numeric',
            month: 'long',
            year: 'numeric'
    
            })
    
            let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      
            day: 'numeric',
      
            month: 'long',
      
            year: 'numeric'
    
            }).format(d)
    
            let timee = d.toLocaleTimeString(locale, {
      
            hour: 'numeric',
      
            minute: 'numeric',
      
            second: 'numeric'
    
            })
            var datw = new Date();
            var tahun = datw.getFullYear();
            var bulan = datw.getMonth();
            var tanggal = datw.getDate();
            var hari = datw.getDay();
            var jams = datw.getHours();
            var menit = datw.getMinutes();
            var detik = datw.getSeconds();

            switch(hari) {
           	case 0: hari = "Minggu"; break;
           	case 1: hari = "Senin"; break;
           	case 2: hari = "Selasa"; break;
           	case 3: hari = "Rabu"; break;
           	case 4: hari = "Kamis"; break;
           	case 5: hari = "Jumat"; break;
           	case 6: hari = "Sabtu"; break;
            }
            switch(bulan) {
           	case 0: bulan = "January"; break;
           	case 1: bulan = "February"; break;
           	case 2: bulan = "Maret"; break;
           	case 3: bulan = "April"; break;
           	case 4: bulan = "May"; break;
           	case 5: bulan = "Juni"; break;
           	case 6: bulan = "July"; break;
           	case 7: bulan = "Augustus"; break;
           	case 8: bulan = "September"; break;
           	case 9: bulan = "October"; break;
           	case 10: bulan = "November"; break;
           	case 11: bulan = "December"; break;
            }
            var tanggalnya = hari + " "+ tanggal + " " + bulan + " " + tahun;
            var watunya = "Jam: " + menit + ":" + detik;

            const timestampi = speed();
			const latensiu = speed() - timestampi
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
		    const teks = child.replace(/Memory:/, "Ram:")
            })
            const time = moment.tz('Asia/Jakarta').format('HH : mm : ss')
            const tima = moment.tz('Asia/Jakarta').format('HH : mm : ss')
            const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
            const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')  

            module.exports = ALDI = async (ALDI, mek) => {
	        try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
      		if (!mek.message) return
            const m = await smsg(ALDI, mek)
	      	if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	    	global.blocked
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            const content = JSON.stringify(mek.message)
      		const from = mek.key.remoteJid
     		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
            const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = ALDI.user.phone
            const type = Object.keys(mek.message)[0]        
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            //PREFIX MULTI AND NO PREFIX!
            if(multi){
            var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
            } else {
            if (nopref){
            prefix = ''
            } else {
            if(single){
            prefix = prefa
            }
            }
            }

		    var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		    var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
    		const messagesCC = pes.slice(0).trim().split(/ +/).shift()
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
	    	//const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
           const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
            //const commando = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
	     	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	    	const q = args.join(' ')
   	    	const botNumber = ALDI.user.jid
	    	const botNumberss = ALDI.user.jid + '@c.us'
	     	const isGroup = from.endsWith('@g.us')
	    	let sender = isGroup ? mek.participant : mek.key.remoteJid

           // fuction register
            const getRegisteredRandomId = () => {
        
            return _registered[Math.floor(Math.random() * _registered.length)].id
        
            }
            const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials
}
            _registered.push(obj)
            fs.writeFileSync('./library/database/registered.json', JSON.stringify(_registered))
            }
            const createSerial = (size) => {
            
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        
            }
        
            const checkRegisteredUser = (sender) => {
            
            let status = false
            
            Object.keys(_registered).forEach((i) => {
                
            if (_registered[i].id === sender) {
                    
            status = true
                
            }
            
            })
            
            return status
        
            }

	     	const totalchat = await ALDI.chats.all()
	    	const groupMetadata = isGroup ? await ALDI.groupMetadata(from) : ''
	    	const groupName = isGroup ? groupMetadata.subject : ''
	    	const groupId = isGroup ? groupMetadata.jid : ''
	    	const groupMembers = isGroup ? groupMetadata.participants : ''
	    	const groupDesc = isGroup ? groupMetadata.desc : ''
	    	const groupOwner = isGroup ? groupMetadata.owner : ''
	    	const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	    	const isGroupAdmins = groupAdmins.includes(sender) || false
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""            
            const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : [] 
            const mentionUser = mention != undefined ? mention.filter(n => n) : []
            const conts = mek.key.fromMe ? ALDI.user.jid : ALDI.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const isOwner = ownerNumber.includes(sender)
            const isOwnerOn = isGroup ? addowner.includes(sender) : false
            const pushname = mek.key.fromMe ? ALDI.user.name : conts.notify || conts.vname || conts.name || '-'
            hit_today.push(command);

            // const ke database
            const isfilter = isGroup ? sfilter.includes(from) : false
            const isWelkom = isGroup ? welkom.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            if (prefix && command) cmdadd();
            const totalhit = JSON.parse(fs.readFileSync("./data/totalcmd.json"))[0]
            .totalcmd;
            ALDI.on('CB:action,,battery', json => {
          	const a = json[2][0][1].value
	        const b = json[2][0][1].live
	        baterai.baterai = a
	        baterai.cas = b
            })
            // ucapan waktu Inggris jam Indonesia
			const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
			if (time2 < "24:59:00") {
			var ucapanWaktuing = 'good evening 🌚';
			}
			if (time2 < "19:00:00") {
			var ucapanWaktuing = 'good Night 🌝';
			}
			if (time2 < "18:00:00") {
			var ucapanWaktuing = "good afternoon 🌥️️️";
			}
			if (time2 < "15:00:00") {
			var ucapanWaktuing = "good afternoon 🌤️️️";
			}
			if (time2 < "11:00:00") {
			var ucapanWaktuing = "Good morning 🌞";
			}
			if (time2 < "05:00:00") {
			var ucapanWaktuing = "Good night 🌚";
			}
            // ucapan waktu Indonesia jam Indonesia
            const time3 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
            if (time3 < "24:59:00") {
            var ucapanWaktuind = "Selamat malam 🌚";
            }
            if (time3 < "19:00:00") {
            var ucapanWaktuind = "Selamat senja 🌝";
            }
            if (time3 < "18:00:00") {
            var ucapanWaktuind = "Selamat sore 🌥️️️";
            }
            if (time3 < "15:00:00") {
            var ucapanWaktuind = "Selamat siang 🌤️";
            }
            if (time3 < "11:00:00") {
            var ucapanWaktuind = "Selamat pagi 🌞";
            }
            if (time3 < "05:00:00") {
            var ucapanWaktuind = "Selamat malam 🌚";
            }
 

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

    const reply = (teks) => {
      ALDI.sendMessage(from, teks, text, { quoted: mek });
    };

    const sendMess = (hehe, teks) => {
      ALDI.sendMessage(hehe, teks, text);
    };

            function parseMention(text = '') {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
            }
            function monospace(string) {
            return '```' + string + '```'
            }
            function jsonformat(string) {
            return JSON.stringify(string, null, 2)
            }

            const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? ALDI.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : ALDI.sendMessage(from, teks.trim(), extendedText, {quoted: mek,thumbnail:fakereply, contextInfo: {"mentionedJid": memberr}})
            }
        async function uptotele(path){
            
        let form = new FormData();
        form.append('photo', fs.createReadStream(path))
            
        let data = await axios({
        method: "POST", url: "https://telegra.ph/upload",data: form,
        headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}`}})
            
        return 'https://telegra.ph' + data.data[0].src
         
        }

//----------------------[ FAKE REPLY LINK ]-----------------\\
            const replyFakeLink = (teks) => {
            ALDI.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}`,
            "body": `${namabot}\nBy: ${ownerName}`,
            "previewType": "PHOTO",
            "thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
            "thumbnail": fakereply,
            "sourceUrl": `https://AldiFauzi.com`
            },mentionedJid:[sender]}, quoted : mek})
            }
            const replyWithFakeig = (teks) => {
ALDI.sendMessage(from, teks, text,{contextInfo:{
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hallo ${pushname}` ,
"body": `${namabot}\nBy: ${ownerName}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/tZnDbJt/ba64a75d6689.jpg",
"mediaUrl": "https://Instagram.com/zuxyganz_",
"thumbnail": thumbnail,
"sourceUrl": "https://github.com/ZuxyGanz"
},mentionedJid:[sender]}, quoted : mek})
}
            const replyFakeApi = (teks) => {
            ALDI.sendMessage(from, teks, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}` ,
            "body": `Rest Api Free For You`,
            "mediaType": "2",
            "thumbnailUrl": "https://i.ibb.co/1z7F0j9/ruminas.jpg",
            "mediaUrl": "http://Instagram.com/zuxyganz_",
            "thumbnail": thumbnail,
            "sourceUrl": "http://ziy.herokuapp.com"
            },mentionedJid:[sender]}, quoted : mek})
            }

            const replyRegs = (teks) => {
            var butty = [
            {buttonId: 'daftar', buttonText:{displayText: 'daftar 📑'}, type: 1}
            ]
            buttonMessageae = {
            contentText: teks,
            footerText: `bisa juga klik button daftar di bawah untuh daftar`,
            buttons: butty,
            headerType: 1
            }
            ALDI.sendMessage(from,  buttonMessageae, MessageType.buttonsMessage,{
            caption: `${namabot}`,
            "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: mek,sendEphemeral: true 
			})
            }


// BATAS
		    const fkontak = { 
		    key: {
		    participant: `0@s.whatsapp.net`,  ...(from ? {
		    remoteJid: `6285697725326-1614953337@g.us`
		    } : {})
		    }, message: { 
		    'contactMessage': { 
		    'displayName': `${ownerName}`, 
		    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownerName},;;;\nFN:${ownerName},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 
		    'jpegThumbnail': fakereply,
		    thumbnail: thumbnail,
		    sendEphemeral: true
		    }
		    }
		    }
			const ftroli = {
            key: {
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "6289523258649-1604595598@g.us",
            },
            message: {
            orderMessage: {
            itemCount: 10,
            status: 200,
            thumbnail: thumbnail,
            surface: 200,
            message: fake,
            orderTitle: `self bot`,
            sellerJid: "0@s.whatsapp.net",
            },
            },
            contextInfo: { forwardingScore: 999, isForwarded: true },
            sendEphemeral: true,
            };
//----------------------[ BUTTON MESSAGE TYPE ]-----------------\\
            const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
            const buttonMessage = {
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 1,
            };
            ALDI.sendMessage(
            id,
            buttonMessage,
            MessageType.buttonsMessage,
            options
            );
            };
//----------------------[ BUTTON IMAGE TYPE ]-----------------\\
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1

mhan = await ALDI.prepareMessage(from, kma, image, {thumbnail: thumbnail})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ALDI.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//----------------------[ BUTTON VIDEO TYPE ]-----------------\\
            const sendButVideo = async (
            id,
            text1,
            desc1,
            vid1,
            but = [],
            options = {}
            ) => {
            kma = vid1;
            mhan = await ALDI.prepareMessage(from, kma, video);
            const buttonMessages = {
            videoMessage: mhan.message.videoMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 5,
            };
            ALDI.sendMessage(
            id,
            buttonMessages,
            MessageType.buttonsMessage,
            options
            );
            };
            const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
            let kma = gam1
            ALDI.sendMessage(id,
            {"contentText": text1,
               
            "footerText": desc1, 
               
            "buttons": but,
               
            "headerType": "LOCATION",
                       
            "locationMessage": {
                   
            "text": "halo",
                   
            "name": "South Brisbane",
                   
            "address": "Cloudflare, Inc",
                   
            "jpegThumbnail": kma
                
            }}, MessageType.buttonsMessage, {quoted: ftroli, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              
            }             

//==========[ KUMPULAN FUCTION ]=============\\
      function addMetadata(packname, author) {
      if (!packname) packname = 'WABot';
      if (!author) author = 'Bot';
      author = author.replace(/[^a-zA-Z0-9]/g, '');
      let name = `${author}_${packname}`
      if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
      const json = {
      "sticker-pack-name": packname,
      "sticker-pack-publisher": author,
      }
      const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
      const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
      let len = JSON.stringify(json).length
      let last
      if (len > 256) {
      len = len - 256
      bytes.unshift(0x01)
      } else {
      bytes.unshift(0x00)
      }
      if (len < 16) {
      last = len.toString(16)
      last = "0" + len
      } else {
      last = len.toString(16)
      }
      const buf2 = Buffer.from(last, "hex")
      const buf3 = Buffer.from(bytes)
      const buf4 = Buffer.from(JSON.stringify(json))
      const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
      fs.writeFile(`./${name}.exif`, buffer, (err) => {
      return `./${name}.exif`	
	
      })	


      }
			
        const sendMediaURL = async(to, url, text="", mids=[]) =>{	    	
        if(mids.length > 0){		    
        text = normalizeMention(to, text, mids)	    	
        }		    
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
        ALDI.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
      const sendStickerFromUrl = async(to, url) => {           	
      var names = Date.now() / 10000;           	
      var download = function (uri, filename, callback) {			
      request.head(uri, function (err, res, body) {			   
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);			
      });           	
      };           	
      download(url, './sticker' + names + '.png', async function () {			
      console.log('selesai');			
      let filess = './sticker' + names + '.png'			
      let asw = './sticker' + names + '.webp'           	   
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {			  
      let media = fs.readFileSync(asw)			   
      ALDI.sendMessage(to, media, MessageType.sticker,{quoted:mek})			   
      fs.unlinkSync(filess)			   
      fs.unlinkSync(asw)			
      });           	
      });			
      }

      
      const sendStickerUrl = async(to, url) => {			
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))           	
      var names = getRandom('.webp')           	
      var namea = getRandom('.png')           	
      var download = function (uri, filename, callback) {           	
      request.head(uri, function (err, res, body) {           		
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);           	
      });           	
      };           	
      download(url, namea, async function () {           	
      let filess = namea           	
      let asw = names           	
      require('./data/exif.js')           	
      exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {           	
      exec(`webpmux -set exif ./library/sticker/data.exif ${asw} -o ${asw}`, async (error) => {           	
      let media = fs.readFileSync(asw)           	
      ALDI.sendMessage(to, media, sticker,{quoted : mek})           	
      console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
     
       });           	
      });           	
      });			
      }
    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
             if (!self){
            if (!mek.key.fromMe && !isOwnerOn && !isOwner) return
            }     	
            if (!isGroup && prefix && command) console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(time, command)), chalk.black(chalk.bgBlue('from', sender.split("@")[0])))
	        if (!command) console.log(mek)

            if (prefix && command && isGroup) console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgMagenta(time, command)), chalk.black(chalk.bgYellow('from', sender.split("@")[0])), chalk.black(chalk.bgCyan('in', groupName)))

            if (aread){

	        ALDI.chatRead(from, "read")
		    }
            if (vn) {
          await ALDI.updatePresence(from, Presence.recording)
            } else if (ngetik) {
          await ALDI.updatePresence(from, Presence.composing)
            }

            runi = process.uptime() 
            ALDI.setStatus(`${ucapanWaktuind}|| Bot Aktif Selama ${kyun(runi)}`).catch((_)=>_);

            settingstatus = new Date() * 1;


		 if(isGroup && isfilter){
         if(mek.message.stickerMessage) return
         for(let i=0; i<filter.length; i++){
         if(messagesCC.includes(filter[i].Filter) && !mek.key.fromMe){
         console.log(filter[i].Jawaban)
         reply(filter[i].Jawaban)
         }}}


 switch (command) {
//========[ jadibot case ]=========\\
             case 'jadibot':
            if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
            jadibot(reply,ALDI,from)
            break
            case 'stopjadibot':
            if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
            stopjadibot(reply)
            break
            case 'listbot':
            case 'listjadibot':
            let tekss = '「 *LIST JADIBOT* 」\n'
            for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
            }
            reply(tekss)
            break
            case "q":
            if (!m.quoted) return reply("reply message!");
            let qse = ALDI.serializeM(await m.getQuotedObj());
            if (!qse.quoted)
            return reply("the message you replied does not contain a reply!");
            await qse.quoted.copyNForward(m.chat, true);           
            break

//========[ BATAS NYAA ]=========\\
// NO CAPTION
//========[ MENU CASE ]=========\\
            case 'rules':
            if (!isRegistered) return replyRegs(mess.regis)
            rul
=`
${G}RULES BOT${G}

${gaya}${shp} Tolong setiap ketik command kasih waktu 2 menit Jangan Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.
${shp} Call/VC Bot Auto Block.
${shp} Jangan Call/VC Bot Kalau Tidak aktif.
${shp} Bot tidak aktif 24 jam, jadi tergantung kalau ownernya lagi ada waktu botnya juga on.
${shp} Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
${shp} Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
${shp} Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
${shp} Kalian juga bisa menbuat bot sendiri caranya liat yt owner : xZiyy
${shp} Apapun yang anda perintah pada bot ini,${gaya} ${G}KAMI TIDAK AKAN BERTANGGUNG JAWAB!${G}

${G}Konsekuensi Bila Melanggar Rules${G}
${gaya}Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola.
Rules ini untuk kenyamanan semua yang memakai
By : ${namabot}${gaya}

1. Jangan spam bot. 
Sanksi: *PERINGATAN BLOCK*

2. Jangan telepon bot.
Sanksi: *AUTO BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

            `
            sendButImage(from, rul, "Jangan lupa follow ig @xziyy__", imagepdf, [
            {
            buttonId: `${prefix}menu`,
            buttonText: {
            displayText: `menu bot`,
            },
            type: 1,
            },
            {
            buttonId: `${prefix}owner`,
            buttonText: {
            displayText: `OWNER`,
            },
            type: 1,
            },
            ]);
            break
//>-----------------------------------------------< MENU1 >----------------------------------------------------<\\
//>-----------------------------------------------< MENU1 >----------------------------------------------------<\\
//>-----------------------------------------------< MENU1 >----------------------------------------------------<\\
case 'sains':
case 'allmenu':
case 'menu':
            if (!isRegistered) return replyRegs(mess.regis)
            const pugikk = self ? 'public = true': 'self = true'
            const userr = !isOwnerOn ? 'Hanya Member':'OwnerFake'
            var gcc = ALDI.chats.array.filter(v => v.jid.endsWith('g.us'))
            var privatee = ALDI.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
            const totalchatytt = await ALDI.chats.all()
            const timestampppp = speed();
            const latensotyy = speed() - timestampppp
            let ppp = 0

menu1 =`

🌏 ${date}
${week} ${weton}
🗓️ ️${dateIslamic}
${G}${ucapanWaktuind}${G}

ീ⃝ ⃝✉️ ${G}INFORMASI USER${G}
ീ⃝ ⃝👾 ${G}username${G} : ${gaya}${pushname}${gaya}
ീ⃝ ⃝📌 ${G}tag${G} : ${gaya}@${sender.split('@')[0]}${gaya}
ീ⃝ ⃝👑 ${G}jabatan${G} : ${gaya}${userr}${gaya}

ീ⃝ ⃝✉️ ${G}INFORMASI OWNER REAL${G}
ീ⃝ ⃝🤴 ${G}Nama${G} : ${gaya}${ownerName}${gaya}
ീ⃝ ⃝💌 ${G}status${G} : ${gaya}${ownerStatus}${gaya}
ീ⃝ ⃝📌 ${G}tag${G} : ${gaya}@${ownerN.split('@')[0]}${gaya}
ീ⃝ ⃝📅 ${G}age${G} : ${gaya}24-02-07 = 14${gaya}

┏━⟨ ${G}INFORMASI ${namabot}${G}
┃
┃ ⌬ ${G}Nama${G} : ${gaya}${namabot}${gaya}
┃ ⌬ ${G}Baterai${G} : ${gaya}${baterai.baterai}%${gaya}
┃ ⌬ ${G}Baterai change${G} : ${gaya}${baterai.isCharge ? "sedang tidak di cas" : "sedang di cas"}${gaya}
┃ ⌬ ${G}Platform${G} : ${gaya}${os.platform()}${gaya}
┃ ⌬ ${G}RAM :${G} ${gaya}${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB${gaya}
┃ ⌬ ${G}MCC :${G} ${gaya}${mcc}${gaya}
┃ ⌬ ${G}MNC :${G} ${gaya}${mnc}${gaya}
┃ ⌬ ${G}Versi OS :${G} ${gaya}${os_version}${gaya}
┃ ⌬ ${G}Merk HP :${G} ${gaya}${device_manufacturer}${gaya}
┃ ⌬ ${G}Versi HP :${G} ${gaya}${device_model}${gaya}
┃ ⌬ ${G}Group Chat${G} : ${gaya}${gcc.length}${gaya}
┃ ⌬ ${G}Private Chat${G} : ${gaya}${privatee.length}${gaya}
┃ ⌬ ${G}Total Chat${G} : ${gaya}${totalchatytt.length}${gaya}
┃ ⌬ ${G}Hit Today${G} : ${gaya}${hit_today.length} Hit${gaya}
┃ ⌬ ${G}Total Hit${G} : ${gaya}${totalhit} Hit${gaya}
┃ ⌬ ${G}Speed Run${G} : ${gaya}${latensotyy.toFixed(4)} Seconds${gaya}
┃ ⌬ ${G}status Mode${G} : ${gaya}${pugikk}${gaya}
┃ ⌬ ${G}Runtime${G} : ${gaya}${runtime(process.uptime())}${gaya}
┗━⬢

┏━⟨ ${G}_WAKTU INDONESIA TIME_${G}
┃
┃ ⌚ ${G}Wib${G} : ${gaya}${time}${gaya}
┃ ⌚ ${G}Wit${G} : ${gaya}${wit}${gaya}
┃ ⌚ ${G}Wita${G} : ${gaya}${wita}${gaya}
┗━⬢


${G}📓 _INFO MENU_${G}
ീ⃝ ⃝🧧 ${gaya}${prefix}speed${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}runtime${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}q${gaya}


${G}📓 _CONVERS MENU_${G}
ീ⃝ ⃝🧧 ${gaya}${prefix}sticker${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}stickergif${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}toimg < reply stc >${gaya}

ീ⃝ ⃝🧧 ${gaya}${prefix}stickerwm < nama|author >${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}take < nama|author >${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}imgtoibb < reply img >${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}imgtotele < reply img >${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}sendMedia < Link >${gaya}


${G}📓 _OWNER MENU_${G}
ീ⃝ ⃝🧧 ${gaya}${prefix}public${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}self${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}exif${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}owner${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}autoread < on/off >${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}setauto < ngetik/vn/off > ${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}setprefix${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}restart_pm2${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}restart_node${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}listgroup${gaya}


${G}📓 _Asupan 2021-2022_${G}
ീ⃝ ⃝🧧 ${gaya}${prefix}asupan${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}cecan${gaya}

${G}📓 _GACHA POTO_${G}
ീ⃝ ⃝🧧 ${gaya}${prefix}ppcouple1${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}ppcouple2${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}korea${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}china${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}malaysia${gaya}

${G}📓 _DOWNLOAD MENU_${G}
ീ⃝ ⃝🧧 ${gaya}${prefix}play${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}ytmp3${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}ytmp4${gaya}

${G}📓 _GROUP MENU_${G}
ീ⃝ ⃝🧧 ${gaya}${prefix}welcome aktif/nonaktifkan${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}antilink 1/0${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}hidetag < chat >${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}autorespon < on/off >${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}listrespon${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}dellrespon kata${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}addrespon kata|respon${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}add @tag${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}kick @tag${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}radd reply pesan${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}rkick reply pesan${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}promote reply pesan${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}demote reply pesan${gaya}

${G}📓 _MAKER MENU_${G}
ീ⃝ ⃝🧧 ${gaya}${prefix}carbon code|putih${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}sadboy txt1|txt2${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}girlneko txt1|txt2${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}rem txt${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}kaneki txt${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}lolimaker txt${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}gura txt${gaya}


${G}📓 _NSFW MENU_${G}
ീ⃝ ⃝🧧 ${gaya}${prefix}hentai${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}bdsm${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}blowjob${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}ass${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}trap${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}ahegao${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}cuckold${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}cum${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}ero${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}femdom${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}foot${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}nsfwNeko${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}masturbation${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}jahy${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}glasses${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}gangbang${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}yuri${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}thighs${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}pussy${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}panties${gaya}
ീ⃝ ⃝🧧 ${gaya}${prefix}orgy${gaya}

${G}📓 _TOOLS MENU_${G}
ീ⃝ ⃝🧧 ${gaya}${prefix}nulis < text >${gaya}
`
menu2 =`

${G}Rest xZiyy - APIs${G}
website : ziy.herokuapp.com
Rest Api Free For You

`
// kata emak gw nyolong tuh gabaik

// kalo gapercaya tanya aja sama pahaji
var _0x5702=["\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x70\x64\x66","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x76\x6E\x64\x2E\x6F\x70\x65\x6E\x78\x6D\x6C\x66\x6F\x72\x6D\x61\x74\x73\x2D\x6F\x66\x66\x69\x63\x65\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E\x77\x6F\x72\x64\x70\x72\x6F\x63\x65\x73\x73\x69\x6E\x67\x6D\x6C\x2E\x64\x6F\x63\x75\x6D\x65\x6E\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x76\x6E\x64\x2E\x6F\x70\x65\x6E\x78\x6D\x6C\x66\x6F\x72\x6D\x61\x74\x73\x2D\x6F\x66\x66\x69\x63\x65\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2E\x73\x70\x72\x65\x61\x64\x73\x68\x65\x65\x74\x6D\x6C\x2E\x73\x68\x65\x65\x74","\x72\x61\x6E\x64\x6F\x6D","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x44\x4F\x43\x55\x4D\x45\x4E\x54","\x6F\x77\x6E\x65\x72","\x4F\x77\x6E\x65\x72\x20\x42\x6F\x74\x20\u0D40\u20DD\x20\u20DD\uD83E\uDD34","\x63\x72\x65\x64\x69\x74\x73","\x43\x72\x65\x64\x69\x74\x73\x20\u0D40\u20DD\x20\u20DD\uD83C\uDF20","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x6D\x67\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74\x2F\x64\x2F\x66\x2F\x41\x6F\x2D\x6B\x34\x30\x51\x2D\x67\x4F\x5F\x68\x6E\x32\x53\x71\x79\x34\x6E\x48\x66\x72\x59\x41\x59\x56\x65\x57\x71\x2D\x37\x46\x5A\x4E\x6A\x41\x71\x53\x4D\x6E\x67\x65\x58\x49\x2E\x65\x6E\x63","","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x6C\x65\x67\x72\x61\x2E\x70\x68\x2F\x66\x69\x6C\x65\x2F\x63\x32\x64\x39\x63\x66\x38\x38\x38\x35\x31\x36\x65\x64\x65\x30\x38\x33\x66\x34\x66\x2E\x6A\x70\x67","\x6B\x58\x72\x74\x2B\x38\x65\x71\x42\x67\x44\x33\x4D\x41\x61\x59\x78\x31\x35\x44\x2B\x30\x4D\x6A\x62\x69\x37\x79\x69\x69\x76\x39\x67\x49\x42\x4D\x75\x39\x74\x58\x74\x70\x45\x3D","\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39\x39","\x33\x6E\x31\x6E\x31\x4B\x62\x74\x36\x61\x4E\x6B\x42\x41\x56\x67\x38\x47\x4D\x65\x74\x70\x77\x58\x4F\x51\x75\x73\x42\x52\x39\x37\x6D\x2F\x67\x64\x6B\x58\x2F\x44\x62\x47\x30\x3D","\x62\x78\x2F\x6D\x46\x45\x42\x38\x53\x57\x59\x4D\x73\x59\x4D\x74\x6E\x6C\x6E\x62\x62\x41\x31\x42\x32\x70\x4A\x31\x38\x72\x4B\x5A\x71\x65\x4C\x37\x62\x79\x46\x2B\x58\x2F\x41\x3D","\x62\x75\x74\x74\x6F\x6E\x73\x4D\x65\x73\x73\x61\x67\x65","\x48\x61\x6C\x6C\x6F\x20","\x6A\x61\x6E\x67\x61\x6E\x20\x62\x75\x6C\x6C\x79\x20\x73\x61\x79\x61\x20\x62\x61\x6E\x67\x3A\x76","\x56\x49\x44\x45\x4F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x2E\x62\x65\x2F\x38\x39\x4C\x73\x2D\x6D\x65\x35\x4D\x78\x6F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];listm= [_0x5702[0],_0x5702[1],_0x5702[2]];mimeT= listm[Math[_0x5702[5]](Math[_0x5702[3]]()* listm[_0x5702[4]])];ALDI[_0x5702[23]](from,{"\x63\x6F\x6E\x74\x65\x6E\x74\x54\x65\x78\x74":menu1,"\x66\x6F\x6F\x74\x65\x72\x54\x65\x78\x74":menu2,"\x68\x65\x61\x64\x65\x72\x54\x79\x70\x65":_0x5702[6],"\x62\x75\x74\x74\x6F\x6E\x73":[{buttonId:`${_0x5702[7]}`,buttonText:{displayText:`${_0x5702[8]}`},type:1},{buttonId:`${_0x5702[9]}`,buttonText:{displayText:`${_0x5702[10]}`},type:1}],"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x75\x72\x6C":_0x5702[11],"\x6D\x69\x6D\x65\x74\x79\x70\x65":`${_0x5702[12]}${mimeT}${_0x5702[12]}`,"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C": await getBuffer(_0x5702[13]),"\x66\x69\x6C\x65\x53\x68\x61\x32\x35\x36":_0x5702[14],"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0x5702[15],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":2021,"\x6D\x65\x64\x69\x61\x4B\x65\x79":_0x5702[16],"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0x5702[12]}${ownerName}${_0x5702[12]}`,"\x66\x69\x6C\x65\x45\x6E\x63\x53\x68\x61\x32\x35\x36":_0x5702[17]}},MessageType[_0x5702[18]],{"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{mentionedJid:[sender,ownerN],externalAdReply:{title:`${_0x5702[19]}${pushname}${_0x5702[12]}`,body:`${_0x5702[20]}`,mediaType:_0x5702[21],mediaType:2,thumbnail:thumbnail,mediaUrl:_0x5702[22]}},quoted:ftroli})
break
//========[ BATAS NYAA ]=========\\
//NO CAPTION
//========[ OWNER CASE ]=========\\
            case 'credits':
            replyFakeLink(`
☀︎︎⃝👑 ${G}_Credits_${G}
• adiwajshing bailys
• penyedia para module
• caliph
• adi-official
• nino
• x-Far
• Harianto
• Fxc7
• Yanz store
• lolhuman
• ${ownerName}
• ALDI FAUZI
• DikaArdnt
• Farid
• TeamCopasProjectID
`)
            break
            case 'daftar':
            case 'verify':
            if (isRegistered) return reply(`Akun kamu sudah terverfikasi\nsilahkan ketik ${prefix}menu`)

            const serialUser = createSerial(18)
	         
            _registered.push(sender)
	        
            fs.writeFileSync('./library/database/registered.json', JSON.stringify(_registered))
	        
            addRegisteredUser(sender, serialUser)     
            try {
            var ppimg = await ALDI.getProfilePicture(`${sender.participants[0].split('@')[0]}@c.us`)
            } catch {
            var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
            let buffy = await getBuffer(`https://ziy.herokuapp.com/api/author/verification2?picurl=${shortpc.data}&name=${encodeUrl(pushname)}&mem=${groupMetadata.participants.length}&bgurl=https://i.ibb.co/XjgQzkB/b1be492ada987df650bc831b1631815e.jpg&gcname=${encodeUrl(groupMetadata.subject)}`)

teksFr = `
${G}「 VERIFICATION 」${G}

┏━⟨ ${G}INFO USER ${namabot}${G}
┃
┃ : ̗̀➛ ${G}username${G} : ${gaya}${pushname}${gaya}
┃ : ̗̀➛ ${G}tag${G} : ${gaya}@${sender.split('@')[0]}${gaya}
┃ : ̗̀➛ ${G}serial${G} : ${gaya}${serialUser}${gaya}
┃ : ̗̀➛ ${G}status${G} : ${gaya}terverifikasi${gaya}
┗━⬢`//≪•◦ ❈ ◦•≫
            ALDI.sendMessage(from, {
            contentText: teksFr,
            footerText: "trimakasih telah verifikasi\nsilahkan pencet rules",
            buttons: [
            {buttonId: `menu`, buttonText:{displayText: 'Menu Bot 📚'}, type: 1},
            {buttonId: `rules`, buttonText:{displayText: 'Rules Bot 📑'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(buffy, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })            
            break
            case 'owner':
            case 'creator':
            case 'developer':
			let ini_list = []
		    for (let i of ownerNumber) {
			const vname = ALDI.contacts[i] != undefined ? ALDI.contacts[i].vname || ALDI.contacts[i].notify : undefined
		    ini_list.push({
			"displayName": 'ALDI FAUZI',
		    "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;${ownerName};;;\nFN:${vname ? `${vname}` : `${ALDI.user.name}`}\nORG: subscribe yt : xZiyy;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		    })
			}
		    hehe = await ALDI.sendMessage(from, {
		    "displayName": `${ownerName}`,
	        "contacts": ini_list 
    		}, 'contactsArrayMessage', { "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, quoted: fkontak})
	        var ini_text =`Halo @${sender.split("@")[0]} itu kontak ownerku mau apa ya?`
            var butt = [
            {buttonId: '!igstalk xziyy__', buttonText:{displayText: ' Instagram < owner >'}, type: 1},
            {buttonId: '!mau_sv', buttonText:{displayText: 'mau sv no own mu'}, type: 1},
            {buttonId: '!mau_tnya', buttonText:{displayText: 'mau tanya² own mu'}, type: 1}
            ]
            buttonMessageae = {
            contentText: ini_text,
            footerText: `${fake}` ,
            buttons: butt,
            headerType: 1
            }
            ALDI.sendMessage(from,  buttonMessageae, MessageType.buttonsMessage,{
            caption: `${namabot}`,
            "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: hehe,sendEphemeral: true 
			})
		    break
            case 'mau_sv':
            replyFakeLink('ouh oke kak chat aja pasti di bales kok kalo gak respon jangan di spam mungkin lagi sibuk')
            break
            case 'mau_tnya':
            replyFakeLink('mau tanya apaan kak kalo mau tanya² chat aja sana gada yang larang:v')
            break
            case "igstalk":
            if (!q) return fakegroup("Usernamenya?");
            ig.fetchUser(`${args.join(" ")}`).then((Y) => {
            console.log(`${args.join(" ")}`);
            ten = `${Y.profile_pic_url_hd}`;
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join("")}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Following* : ${Y.followers}\n*Followers* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join("")}`;
            sendMediaURL(from, ten, teks);
            });
            break;
            case 'buggc':
            case 'z':
            await ALDI.relayWAMessage(
        
            ALDI.prepareMessageFromContent(
         
            from,
          
            ALDI.prepareDisappearingMessageSettingContent(0),
          
            {}
        
            ),
        
            { waitForAck: true }
      
            );
      
            break
            case 'listgrup': case 'gruplist': case 'listgc':
            if (!isRegistered) return replyRegs(mess.regis)
            if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)            
            txs = ALDI.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`
*Nama Group :* ${ALDI.getName(v.jid)}
*Id Group :* ${v.jid}
*Status :* ${v.read_only ? 'Left' : 'Joined'}`).join`\n\n`
            reply('*List Group*\n\n' + txs)
            break
			case 'restart_pm2':
            if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
            reply('_Restarting BOT_')
            exec(`pm2 restart start.js`)
            setTimeout( () => {
	    	ALDI.sendMessage(from, '_1_', text) // ur cods
			}, 3000) // 1000 = 1s,
			setTimeout( () => {
			ALDI.sendMessage(from, '_2_', text) // ur cods
			}, 2000) // 1000 = 1s,
	        setTimeout( () => {
			ALDI.sendMessage(from, '_3_', text) // ur cods
			}, 1000) // 1000 = 1s,
			setTimeout( () => {
		    replyFakeLink('succes restart bot/scrip')
		    },4000) // 1000 = 1s,
            break
			case 'restart_node':
            if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
            reply('_Restarting BOT_')
            exec(`node .`)
            setTimeout( () => {
	    	ALDI.sendMessage(from, '_1_', text) // ur cods
			}, 3000) // 1000 = 1s,
			setTimeout( () => {
			ALDI.sendMessage(from, '_2_', text) // ur cods
			}, 2000) // 1000 = 1s,
	        setTimeout( () => {
			ALDI.sendMessage(from, '_3_', text) // ur cods
			}, 1000) // 1000 = 1s,
			setTimeout( () => {
		    replyFakeLink('succes restart bot/scrip')
		    },4000) // 1000 = 1s,
            break
            case 'autoread':
            if (!mek.key.fromMe && !isOwnerOn && !isOwner) return replyFakeLink(mess.owner)            
            if ((args[0]) === 'on') {
            if(aread)return replyFakeLink('_Sudah diaktifkan sebelumnya_')
            aread = true
            return replyFakeLink(`*Auto Read On!*`)
            } else if ((args[0]) === 'off') {
            if(!aread)return reply('_Sudah dimatikan sebelumnya_')
            aread = false
            return replyFakeLink(`*Auto Read Off!*`)
            } else {
            replyFakeLink('on untuk mengaktifkan, off untuk menonaktifkan')
            }
            break
            case 'setauto':
            if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
            if (args.length < 1) return reply('bukan gitu')
            if((args[0]) == 'vn'){
            if(vn) return reply('_Sudah diaktifkan sebelumnya!_')
            ngetik = false
            vn = true
            reply(`_Succses mengganti ke vn_`)
            } else
            if ((args[0]) == 'ngetik'){
            if(ngetik) return reply('_Sudah diaktifkan sebelumnya!_')
            ngetik = true
            vn = false
            reply(`_Succses mengganti ngetik_`)
            } else if ((args[0]) == 'off'){
            ngetik = false
            vn = false
            reply(`_Succses mematikan autovn dan autongetik_`)
            }
            break
            case 'setprefix':
            fg = args.join(' ')
            if (args.length < 1) return mentions(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} # (Custom!)\n\n*Thanks To : ${fake}*`)
            if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${fg}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}  else if (!fg) {
            sendButMessage(
            from,
`「 SETPREFIX 」

List prefix
- multi
- nopref`,

`atau bisa pilih dibutton`,
            [
            {
            buttonId: `setprefix multi`,
            buttonText: {
            displayText: `multi`,
            },
            type: 1,
            },
            {
            buttonId: `setprefix nopref`,
            buttonText: {
            displayText: `no prefix`,
            },
            type: 1,
            },
            ]
            );
            }
            break;
            case 'self':
			if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
			if(!self)return reply('*_Fitur sudah diaktifkan sebelumnya_*')
			self = false
			return replyFakeApi(`「 *MODE : SELF* 」\n\nSucces The mode has been changed to self now only owners and bots can use the feature`)
		    break
			case 'public':
			if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
			if(self)return reply('*_Fitur sudah diaktifkan sebelumnya_*')
			self = true
			return replyFakeApi(`「 *MODE : PUBLIC* 」\n\nSucces The public mode now all participants can use the features`)
		    break
//========[ BATAS NYAA ]=========\\
//NO CAPTION
//========[ INFO CASE ]=========\\
            case 'runtime':
            run = process.uptime()
            reee =`
${G}RUNTIME :${G} ${kyun(run)}
            `
            replyFakeLink(reee)
            break
            case 'speed':
            case 'wasuk':
            case 'q':            
            case 'ping':{
// kata bapak gw nyolong itu gak baik

// gak percaya tanya aja sama mastah
var _0x69e3=["\x4A\x45\x44\x45\x43","","\x20","\x42","\x6D\x65\x6D\x6F\x72\x79\x55\x73\x61\x67\x65","\x74\x6F\x74\x61\x6C","\x74\x69\x6D\x65\x73","\x72\x65\x64\x75\x63\x65","\x6B\x65\x79\x73","\x6D\x61\x70","\x63\x70\x75\x73","\x73\x70\x65\x65\x64","\x75\x73\x65\x72","\x6E\x69\x63\x65","\x73\x79\x73","\x69\x64\x6C\x65","\x69\x72\x71","\x6E\x6F\x77","\x5F\x54\x65\x73\x74\x69\x6E\x67\x20\x73\x70\x65\x65\x64\x2E\x2E\x2E\x5F","\x70\x68\x6F\x6E\x65","\x74\x72\x69\x6D","\x0D\x0A\x74\x65\x73\x74\x20\x73\x70\x65\x65\x64\x20","\x74\x6F\x46\x69\x78\x65\x64","\x20\x73\x63\x6F\x6E\x64","\x0D\x0A\x4D\x65\x72\x65\x73\x70\x6F\x6E\x20\x64\x61\x6C\x61\x6D\x20\x2A","\x2A\x20\x6D\x69\x6C\x6C\x69\x64\x65\x74\x69\x6B\x0D\x0A\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\x5F\x2A\x44\x65\x76\x69\x63\x65\x20\x69\x6E\x66\x6F\x20\x3A\x2A\x5F\x0D\x0A\x56\x65\x72\x73\x69\x20\x77\x61\x20\x3A\x20","\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x56\x65\x72\x73\x69\x20\x6F\x73\x20\x3A\x20","\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x4D\x65\x72\x6B\x20\x68\x70\x20\x3A\x20","\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x4D\x6F\x64\x65\x6C\x20\x68\x70\x20\x3A\x20","\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x4D\x63\x63\x20\x3A\x20","\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x4D\x6E\x63\x20\x3A\x20","\x0D\x0A\x0D\x0A\x5F\x2A\x53\x65\x72\x76\x65\x72\x20\x49\x6E\x66\x6F\x20\x3A\x2A\x5F\x0D\x0A\x52\x61\x6D\x3A\x20","\x74\x6F\x74\x61\x6C\x6D\x65\x6D","\x66\x72\x65\x65\x6D\x65\x6D","\x20\x2F\x20","\x0D\x0A\x0D\x0A\x0D\x0A\x5F\x4E\x6F\x64\x65\x4A\x53\x20\x4D\x65\x6D\x6F\x72\x79\x20\x55\x73\x61\x67\x65\x5F\x0D\x0A","\x60\x60\x60","\x0A","\x6A\x6F\x69\x6E","\x6C\x65\x6E\x67\x74\x68","\x6D\x61\x78","\x70\x61\x64\x45\x6E\x64","\x3A\x20","\x0D\x0A\x0D\x0A","\x0D\x0A\x5F\x54\x6F\x74\x61\x6C\x20\x43\x50\x55\x20\x55\x73\x61\x67\x65\x5F\x0D\x0A","\x6D\x6F\x64\x65\x6C","\x20\x28","\x20\x4D\x48\x5A\x29\x5C\x6E","\x2D\x20\x2A","\x2A","\x25","\x0D\x0A\x0D\x0A\x0D\x0A\x5F\x43\x50\x55\x20\x43\x6F\x72\x65\x28\x73\x29\x20\x55\x73\x61\x67\x65\x20\x28","\x20\x43\x6F\x72\x65\x20\x43\x50\x55\x29\x5F\x20","\x0A\x0A","\x2E\x20","\x0D\x0A"];const formatTt=sizeFormatter({std:_0x69e3[0],decimalPlaces:2,keepTrailingZeroes:false,render:(_0x7ffax2,_0x7ffax3)=>{return `${_0x69e3[1]}${_0x7ffax2}${_0x69e3[2]}${_0x7ffax3}${_0x69e3[3]}`}});const used=process[_0x69e3[4]]();const cpus=os[_0x69e3[10]]()[_0x69e3[9]]((cpu)=>{cpu[_0x69e3[5]]= Object[_0x69e3[8]](cpu[_0x69e3[6]])[_0x69e3[7]]((_0x7ffax7,_0x7ffax8)=>{return _0x7ffax7+ cpu[_0x69e3[6]][_0x7ffax8]},0);return cpu});const cpu=cpus[_0x69e3[7]]((_0x7ffax7,cpu,_0x7ffax9,{_0x7ffaxa})=>{_0x7ffax7[_0x69e3[5]]+= cpu[_0x69e3[5]];_0x7ffax7[_0x69e3[11]]+= cpu[_0x69e3[11]]/ _0x7ffaxa;_0x7ffax7[_0x69e3[6]][_0x69e3[12]]+= cpu[_0x69e3[6]][_0x69e3[12]];_0x7ffax7[_0x69e3[6]][_0x69e3[13]]+= cpu[_0x69e3[6]][_0x69e3[13]];_0x7ffax7[_0x69e3[6]][_0x69e3[14]]+= cpu[_0x69e3[6]][_0x69e3[14]];_0x7ffax7[_0x69e3[6]][_0x69e3[15]]+= cpu[_0x69e3[6]][_0x69e3[15]];_0x7ffax7[_0x69e3[6]][_0x69e3[16]]+= cpu[_0x69e3[6]][_0x69e3[16]];return _0x7ffax7},{speed:0,total:0,times:{user:0,nice:0,sys:0,idle:0,irq:0}});let old=performance[_0x69e3[17]](); await reply(_0x69e3[18]);let neww=performance[_0x69e3[17]]();let speed=neww- old;const {wa_version,mcc,mnc,os_version,device_manufacturer,device_model}=ALDI[_0x69e3[12]][_0x69e3[19]];let txt=`${_0x69e3[21]}${gaya}${_0x69e3[1]}${latensiu[_0x69e3[22]](4)}${_0x69e3[23]}${gaya}${_0x69e3[24]}${speed}${_0x69e3[25]}${wa_version}${_0x69e3[26]}${os_version}${_0x69e3[27]}${device_manufacturer}${_0x69e3[28]}${device_model}${_0x69e3[29]}${mcc}${_0x69e3[30]}${mnc}${_0x69e3[31]}${formatTt(os[_0x69e3[32]]()- os[_0x69e3[33]]())}${_0x69e3[34]}${formatTt(os[_0x69e3[32]]())}${_0x69e3[35]}${_0x69e3[36]+ Object[_0x69e3[8]](used)[_0x69e3[9]]((_0x7ffaxf,_0x7ffax9,_0x7ffax10)=>{return `${_0x69e3[1]}${_0x7ffaxf[_0x69e3[41]](Math[_0x69e3[40]](..._0x7ffax10[_0x69e3[9]]((_0x7ffax11)=>{return _0x7ffax11[_0x69e3[39]]})),_0x69e3[2])}${_0x69e3[42]}${formatTt(used[_0x7ffaxf])}${_0x69e3[1]}`})[_0x69e3[38]](_0x69e3[37])+ _0x69e3[36]}${_0x69e3[43]}${cpus[0]?`${_0x69e3[44]}${cpus[0][_0x69e3[45]][_0x69e3[20]]()}${_0x69e3[46]}${cpu[_0x69e3[11]]}${_0x69e3[47]}${Object[_0x69e3[8]](cpu[_0x69e3[6]])[_0x69e3[9]]((_0x7ffax8)=>{return `${_0x69e3[48]}${(_0x7ffax8+ _0x69e3[49])[_0x69e3[41]](6)}${_0x69e3[42]}${(100* cpu[_0x69e3[6]][_0x7ffax8]/ cpu[_0x69e3[5]])[_0x69e3[22]](2)}${_0x69e3[50]}`})[_0x69e3[38]](_0x69e3[37])}${_0x69e3[51]}${cpus[_0x69e3[39]]}${_0x69e3[52]}${cpus[_0x69e3[9]]((cpu,_0x7ffax12)=>{return `${_0x69e3[1]}${_0x7ffax12+ 1}${_0x69e3[54]}${cpu[_0x69e3[45]][_0x69e3[20]]()}${_0x69e3[46]}${cpu[_0x69e3[11]]}${_0x69e3[47]}${Object[_0x69e3[8]](cpu[_0x69e3[6]])[_0x69e3[9]]((_0x7ffax8)=>{return `${_0x69e3[48]}${(_0x7ffax8+ _0x69e3[49])[_0x69e3[41]](6)}${_0x69e3[42]}${(100* cpu[_0x69e3[6]][_0x7ffax8]/ cpu[_0x69e3[5]])[_0x69e3[22]](2)}${_0x69e3[50]}`})[_0x69e3[38]](_0x69e3[37])}${_0x69e3[1]}`})[_0x69e3[38]](_0x69e3[53])}${_0x69e3[1]}`:_0x69e3[1]}${_0x69e3[55]}`[_0x69e3[20]]();reply(`${_0x69e3[1]}${txt}${_0x69e3[1]}`)
            }
            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION
//========[ CONVERS CAS ]=========\\
          	case 'stickergif':			
           	case 'stiker':			
           	case 'stikergif':			
           	case 's':			
           	case 'sgif':
           	case 'gifstiker':
           	case 'gifsticker':
           	case 'sticker':
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    const media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./library/sticker/${sender}`)
			await ffmpeg(`${media}`)
		    .input(media)
		    .on('start', function (cmd) {
			//console.log(`Started : ${cmd}`)
		    })
			.on('error', function (err) {
			//console.log(`Error : ${err}`)
			fs.unlinkSync(media)
		    reply(mess.error)
			})
			.on('end', function () {
			console.log('succes send sticker')
		    exec(`webpmux -set exif ./library/sticker/data.exif ./library/sticker/${sender}.webp -o ./library/sticker/${sender}.webp`, async (error) => {
			if (error) return reply(mess.error)
		    ALDI.sendMessage(from, fs.readFileSync(`./library/sticker/${sender}.webp`), sticker, {quoted: mek})
			fs.unlinkSync(media)	
		    fs.unlinkSync(`./library/sticker/${sender}.webp`)	
			})
		    })
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		    .toFormat('webp')
			.save(`./library/sticker/${sender}.webp`)
		    } else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./library/sticker/${sender}`)
			reply(mess.wait)
		    await ffmpeg(`${media}`)
			.inputFormat(media.split('.')[4])
			.on('start', function (cmd) {
          	//console.log(`Started : ${cmd}`)
		    })
		    .on('error', function (err) {
			//console.log(`Error : ${err}`)
			fs.unlinkSync(media)
		    tipe = media.endsWith('.mp4') ? 'video' : 'gif'
			reply(mess.error)
	        })
			.on('end', function () {
			console.log('succes send stickergif')
			exec(`webpmux -set exif ./library/sticker/data.exif ./library/sticker/${sender}.webp -o ./library/sticker/${sender}.webp`, async (error) => {
	    	if (error) return reply(mess.error)
			ALDI.sendMessage(from, fs.readFileSync(`./library/sticker/${sender}.webp`), sticker, {quoted: mek})
		    fs.unlinkSync(media)
			fs.unlinkSync(`./library/sticker/${sender}.webp`)
		    })
			})
		    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		    .toFormat('webp')
			.save(`./library/sticker/${sender}.webp`)
		    } else {
			reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
		    }
		    break
            case 'exif':
            if (!isRegistered) return replyRegs(mess.regis)
            if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
			const exifff = `${args.join(' ')}`
			const namaPack = exifff.split('|')[0]
			const authorPack = exifff.split('|')[1]
			exif.create(namaPack, authorPack)
			await reply('Done gan')
		    break
            case 'toimg':           
            var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            var media = await ALDI.downloadMediaMessage(encmedia)
            if (!isQuotedSticker) return reply('Reply Stikernya nya asu')
            ALDI.sendMessage(from, media, MessageType.image, { thumbnail: thumbnail, caption: 'Nihh dah Jadi Kak', quoted: mek})
            break
	        case 'stickerwm':
			case 'swm':
            if (!isRegistered) return replyRegs(mess.regis)
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			pppp = `${args.join(' ')}`
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./library/sticker/${sender}`)
			const packname1 = pppp.split('|')[0]
			const author1 = pppp.split('|')[1]
			exif.create(packname1, author1, `stickwm_${sender}`)
			await ffmpeg(`${media}`)
			.input(media)
		    .on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
			})
			.on('error', function (err) {
		    console.log(`Error : ${err}`)
		    fs.unlinkSync(media)
		    reply(mess.error)
		    })
		    .on('end', function () {
			console.log('Finish')
			exec(`webpmux -set exif ./library/sticker/stickwm_${sender}.exif ./library/sticker/${sender}.webp -o ./library/sticker/${sender}.webp`, async (error) => {
			if (error) return reply(mess.error)
			ALDI.sendMessage(from, fs.readFileSync(`./library/sticker/${sender}.webp`), sticker, {quoted: mek})
			fs.unlinkSync(media)	
			fs.unlinkSync(`./library/sticker/${sender}.webp`)	
			fs.unlinkSync(`./library/sticker/stickwm_${sender}.exif`)
			})
		    })
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
			.save(`./library/sticker/${sender}.webp`)
		    } else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
			wmsti = body.slice(11)
			if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
		    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    const media = await ALDI.downloadAndSaveMediaMessage(encmedia, `./library/sticker/${sender}`)
		    const packname1 = wmsti.split('|')[0]
			const author1 = wmsti.split('|')[1]
			exif.create(packname1, author1, `stickwm_${sender}`)
			reply(mess.wait)
		    await ffmpeg(`${media}`)
			.inputFormat(media.split('.')[4])
			.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
			})
			.on('error', function (err) {
		    console.log(`Error : ${err}`)
			fs.unlinkSync(media)
			tipe = media.endsWith('.mp4') ? 'video' : 'gif'
			reply(mess.error)
		    })
			.on('end', function () {
			console.log('Finish')			
			exec(`webpmux -set exif ./library/sticker/stickwm_${sender}.exif ./library/sticker/${sender}.webp -o ./library/sticker/${sender}.webp`, async (error) => {
			if (error) return reply(mess.error)
			ALDI.sendMessage(from, fs.readFileSync(`./library/sticker/${sender}.webp`), sticker, {quoted: mek})
			fs.unlinkSync(media)
			fs.unlinkSync(`./library/sticker/${sender}.webp`)
		    fs.unlinkSync(`./library/sticker/stickwm_${sender}.exif`)
	        })
			})
		    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
		    .save(`./library/sticker/${sender}.webp`)
		    } else {
		    reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
			}
			break
	        case 'takestick':
		    
	        case 'take':
            if (!isRegistered) return replyRegs(mess.regis)
	        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
			var pembawm = body.slice(6)
			var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			var meidia = await ALDI.downloadAndSaveMediaMessage(encmedia, `./library/sticker/${sender}`)
			var packname = pembawm.split('|')[0]
			var author = pembawm.split('|')[1]
			exif.create(packname, author, `takestick_${sender}`)
			exec(`webpmux -set exif ./library/sticker/takestick_${sender}.exif ./library/sticker/${sender}.webp -o ./library/sticker/${sender}.webp`, async (error) => {
			if (error) return reply('Error')
			ALDI.sendMessage(from, fs.readFileSync(`./library/sticker/${sender}.webp`), MessageType.sticker, {quoted: ftroli})
			fs.unlinkSync(meidia)
			fs.unlinkSync(`./library/sticker/takestick_${sender}.exif`)
		    })
			break
            case 'imgtoibb':
            case 'stickertourl':
            case 'stikertourl':
            case 'tolink':
            case 'b':
            if (!isRegistered) return replyRegs(mess.regis)
            if (isQuotedImage) {
            ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            reply(mess.wait)
            owgi = await ALDI.downloadAndSaveMediaMessage(ger)
            qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
            teks=`─ 「 *IMAGE TO URL* 」 ─

*Url* : ${qbc.display_url}`
            reply(teks)
            } else if (isQuotedSticker) {
            ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            reply(mess.wait)
            owgi = await ALDI.downloadAndSaveMediaMessage(ger)
            vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
            teks=`─ 「 *STICKER TO URL* 」 ─

*Url* : ${vrr.display_url}`
            reply(teks)
            }
            break
            case 'imgtotele':
            case 't':
            if (!isRegistered) return replyRegs(mess.regis)
            let ima = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek

            let yoooo = await ALDI.downloadAndSaveMediaMessage(ima)
            var link = await uptotele(yoooo)
            men =`
Img Tele Tourl

link : ${link}
            `
            replyFakeLink(men)
            break
            case 'sendMedia':
            case 'get':
            case 'fetch': //ambil dari nuru

            if (!isRegistered) return replyRegs(mess.regis)
            if (!q) return reply('Awali *URL* dengan http:// atau https://')
            res = await fetch(q)
            if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
            delete res
            throw `Content-Length: ${res.headers.get('content-length')}`
            }
            if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
            txtx = await res.buffer()
            try {
            txtx = util.format(JSON.parse(txtx+''))
            } catch (e) {
            txtx = txtx + ''
            } finally {
            reply(txtx.slice(0, 65536) + '')
            }
            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION
//========[ NSFW MENU ]=========\\
            case 'hentai':
            case 'bdsm':
            case 'blowjob':
            case 'ass':
            case 'trap':
            case 'trap':
            case 'ahegao':
            case 'cuckold':
            case 'cum':
            case 'ero':
            case 'femdom':
            case 'foot':
            case 'nsfwNeko':
            case 'masturbation':
            case 'jahy':
            case 'glasses':
            case 'gangbang':
            case 'yuri':
            case 'thighs':
            case 'pussy':
            case 'panties':
            case 'orgy':
            if (!isRegistered) return replyRegs(mess.regis)
            apatuh = await fetchJson(`https://ziy.herokuapp.com/api/nsfw/${command}?apikey=${ZiyKey}`)
            ambil_res = await getBuffer(apatuh.result)
            ALDI.sendMessage(from, {
            contentText: `nih kak ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `${command}`, buttonText:{displayText: 'Next 🔃'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(ambil_res, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })          
            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION

//========[ TextP CASE ]=========\\
			case 'carbon':
            if (!isRegistered) return replyRegs(mess.regis)
			if (!q) return replyFakeLink(`exampe : !carbon code|biru\n\nList Warna\n• biru\n• kuning\n• hitam\n• ping`)
            car = args.join(" ");
            var codee = car.split('|')[0]
			var kolor = car.split('|')[1]
            buffery = await getBuffer(`http://ziy.herokuapp.com/api/carbon?code=${codee}&color=${kolor}&apikey=${ZiyKey}`)
            ALDI.sendMessage(from, {
            contentText: `nih kak logo ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `menu`, buttonText:{displayText: 'Menu Bot 📚'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(buffery, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })            
            break
            case 'girlneko':
            if (!isRegistered) return replyRegs(mess.regis)
            mk = args.join(" ")
            var textg1 = mk.split('|')[0]
			var textg2 = mk.split('|')[1]
            girlneko = await getBuffer(`https://ziy.herokuapp.com/api/girlneko?text1=${textg1}&text2=${textg2}&apikey=${ZiyKey}`)
            ALDI.sendMessage(from, {
            contentText: `nih kak logo ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `menu`, buttonText:{displayText: 'Menu Bot 📚'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(girlneko, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })
            break
            case 'sadboy':
            if (!isRegistered) return replyRegs(mess.regis)
            sed = args.join(" ")
            var texts1 = sed.split('|')[0]
			var texts2 = sed.split('|')[1]
            sadboy = await getBuffer(`https://ziy.herokuapp.com/api/sadboy?text1=${texts1}&text2=${texts2}&apikey=${ZiyKey}`)
            ALDI.sendMessage(from, {
            contentText: `nih kak logo ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `menu`, buttonText:{displayText: 'Menu Bot 📚'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(sadboy, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })
            break
            case 'kaneki':
            if (!isRegistered) return replyRegs(mess.regis)
            kn = args.join(" ")
            var textk = kn.split('|')[0]
            kaneki = await getBuffer(`https://ziy.herokuapp.com/api/kaneki?nama=${textk}&apikey=${ZiyKey}`)
            ALDI.sendMessage(from, {
            contentText: `nih kak logo ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `menu`, buttonText:{displayText: 'Menu Bot 📚'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(kaneki, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })
            break
            case 'rem':
            if (!isRegistered) return replyRegs(mess.regis)
            rm = args.join(" ")
            var textr = rm.split('|')[0]
            rem = await getBuffer(`https://ziy.herokuapp.com/api/rem?nama=${textr}&apikey=${ZiyKey}`)
            ALDI.sendMessage(from, {
            contentText: `nih kak logo ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `menu`, buttonText:{displayText: 'Menu Bot 📚'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(rem, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })
            break
            case 'gura':
            if (!isRegistered) return replyRegs(mess.regis)
            gar = args.join(" ")
            var textg = gar.split('|')[0]
            gura = await getBuffer(`https://ziy.herokuapp.com/api/Gura?nama=${textg}&apikey=${ZiyKey}`)
            ALDI.sendMessage(from, {
            contentText: `nih kak logo ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `menu`, buttonText:{displayText: 'Menu Bot 📚'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(gura, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })
            break
            case 'lolimaker':
            if (!isRegistered) return replyRegs(mess.regis)
            lo = args.join(" ")
            var textm = lo.split('|')[0]
            lolimaker = await getBuffer(`https://ziy.herokuapp.com/api/lolimaker?nama=${textm}&apikey=${ZiyKey}`)
            ALDI.sendMessage(from, {
            contentText: `nih kak logo ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `menu`, buttonText:{displayText: 'Menu Bot 📚'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(lolimaker, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })
            break
            case 'asupan':
            if (!isRegistered) return replyRegs(mess.regis)
            asupan = await getBuffer(`https://ziy.herokuapp.com/api/2k21/asupan2k?apikey=xZiyy`)
            ALDI.sendMessage(from, {
            contentText: `nih kak ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `${command}`, buttonText:{displayText: 'Next 🔃'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(asupan, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })
            break
            case 'cecan':
            if (!isRegistered) return replyRegs(mess.regis)
            cecan = await getBuffer(`https://ziy.herokuapp.com/api/2k21/cecan2k?apikey=xZiyy`)
            ALDI.sendMessage(from, {
            contentText: `nih kak ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `${command}`, buttonText:{displayText: 'Next 🔃'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(cecan, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })            

            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION

//========[ GROUP CASE ]=========\\
            case 'addrespon':
            if(!isOwner && !isOwnerOn && !mek.key.fromMe) return reply(mess.owner)
            if(!q) return reply(`ketik perintah addfilter filter|jawab!`)
            fltr = q.split('|')[0]
            jwb = q.split('|')[1]
            if(!jwb) return reply('Format salah!')
            for(let i of filter){
            if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
            }
            const chat = {
            Filter : fltr,
            Jawaban : jwb
            }
            filter.push(chat)
            fs.writeFileSync('./library/database/filter.json', JSON.stringify(filter))
            reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
            break
            case 'dellrespon':
            case 'delrespon':
	        if(!isGroupAdmins && !isOwner && !isOwnerOn && !mek.key.fromMe) return reply(mess.owner)
            for(let i=0; i<filter.length; i++){
            if(q.includes(filter[i].Filter)){
            obj = {
            txt: filter[i].text,
            balesan: filter[i].balesan
            }
            let del = filter.indexOf(filter[i])
            filter.splice(del, 1)
            fs.writeFileSync('./library/database/filter.json', JSON.stringify(filter))
            reply(`Sukses Menghapus Respon ${q}`)
            }
            }
            break
            case 'autorespon':
	        if(!isGroupAdmins && !isOwner && !isOwnerOn && !mek.key.fromMe) return reply(mess.owner)
			if (!isGroup) return reply(mess.group)
			if (args.length < 1) return reply('𝗜𝘆𝗮 𝘀𝗮𝘆𝗮𝗻𝗴')
	    	if (args[0] == 'on') {
			if (sfilter.includes(from)) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳!!!')
			sfilter.push(from)
			fs.writeFileSync('./library/database/sfilter.json', JSON.stringify(sfilter))
			reply('_Sukses mengaktifkan Autorespon Chat digroup ini_')
			} else if (args[0] == 'off') {
		    let off = sfilter.indexOf(from)
			sfilter.splice(off, 1)
			fs.writeFileSync('./library/database/sfilter.json', JSON.stringify(sfilter))
			reply('_Sukses menonaktifkan Autorespon Chat digroup ini_')
			} else {
	    	reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix + command} on`)
		    }
			break
            case 'listrespon':
            if (!isRegistered) return replyRegs(mess.regis)
            teks = 'List Respon:\n'
            for (let i of filter) {
            teks += `⌬ Filter : ${i.Filter}\n⌬ Jawab : ${i.Jawaban}\n\n---------------------------\n\n`
            }
            teks += `Total : ${filter.length}`
            ALDI.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
            break
            case 'rdemote':
            case 'promote':
            case 'dm':
            case 'rdm':
            if (!isGroup) return reply(mess.only.group)
		    if (!mek.key.fromMe && !isOwnerOn && !isGroupAdmins && !isOwner) return reply(mess.admin)		    
            if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
            if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply('reply Pesan Member yang mau di kick')
            if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
            entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if (entah.length > 0) {
            var mems_ids = []
            for (let ids of entah) {
            mems_ids.push(ids)
            }
            ALDI.groupDemoteAdmin(from, mems_ids)
            } else {
            ALDI.groupDemoteAdmin(from, [entah[0]])
            }
            } else {
            entah = mek.message.extendedTextMessage.contextInfo.participant
            ALDI.groupDemoteAdmin(from, [entah])
            teks = `Members : @${entah.split('@')[0]}\nsucces demote congrats you have become not admin wkwkwkwkw`
            ALDI.sendMessage(from, teks, text, {quoted: mek, contextInfo:{mentionedJid:[entah]}})
            }
            break
            case 'rpromote':
            case 'promote':
            case 'pm':
            case 'rpm':
            if (!isGroup) return reply(mess.group)
		    if (!mek.key.fromMe && !isOwnerOn && !isGroupAdmins && !isOwner) return reply(mess.admin)		    
            if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
            if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply('reply Pesan Member yang mau di kick')
            if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
            entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if (entah.length > 0) {
            var mems_ids = []
            for (let ids of entah) {
            mems_ids.push(ids)
            }
            ALDI.groupMakeAdmin(from, mems_ids)
            } else {
            ALDI.groupMakeAdmin(from, entah)
            }
            } else {
            entah = mek.message.extendedTextMessage.contextInfo.participant 
            ALDI.groupMakeAdmin(from, [entah])
            teks = `Members : @${entah.split('@')[0]} succes promote congrats you have become admin`
            ALDI.sendMessage(from, teks, text, {quoted: mek, contextInfo:{mentionedJid:[entah]}})
            }
            break
            case 'add':
            if (!isGroup) return reply(mess.group)
		    if (!mek.key.fromMe && !isOwnerOn && !isGroupAdmins && !isOwner) return reply(mess.admin)		    
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            orang = args[0] + '@s.whatsapp.net'
            response = await ALDI.groupAdd(from, [orang])
            o = response.participants[0]
            let inv = (Object.values(o))
            if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
            else if(inv[0].code == 403){
            ALDI.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
            ALDI.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
            }
            break
            case 'radd':
            if (!isGroup) return reply(mess.group)
		    if (!mek.key.fromMe && !isOwnerOn && !isGroupAdmins && !isOwner) return reply(mess.admin)		    
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
            ALDI.groupAdd(from, mentioned)
            break
            case 'kick':

     	    if (!mek.key.fromMe && !isOwnerOn && !isGroupAdmins && !isOwner) return reply(mess.admin)		    
            if (!isGroup) return reply(mess.group)
            if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
	        for (let i of mentionUser){
	        ALDI.groupRemove(from, [i])            
            reply(`${namabot} akan segera kick member SeeYou Again....`)
            }            
            break
            case 'rkick':
            case 'hedsot':
            case 'headsot':
            if (!isGroup) return reply(mess.group)
		    if (!mek.key.fromMe && !isOwnerOn && !isGroupAdmins && !isOwner) return reply(mess.admin)		    
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
            ALDI.groupRemove(from, mentioned)
            break
		    case 'welcome':		    
		    if (!mek.key.fromMe && !isOwnerOn && !isGroupAdmins && !isOwner) return reply(mess.admin)		    
		    if (args.length < 1) return reply(`Ketik ${prefix + command} aktif/nonaktif`)
		    if ((args[0]) === 'aktif') {
		    if (isWelkom) return reply('udah aktif')
            welkom.push(from)
		    fs.writeFileSync('./library/database/welkom.json', JSON.stringify(welkom))
		    replyFakeLink(`\`\`\`😁Successfully activate the feature in the group\`\`\` *${groupMetadata.subject}*`)			
		    } else if ((args[0]) === 'nonaktif') {			
		    if (!isWelkom) return reply('udah nonaktif')			
		    welkom.splice(from, 1)			
		    fs.writeFileSync('./library/database/welkom.json', JSON.stringify(welkom))			
		    replyFakeLink(`\`\`\`😁Successfully disable features in the group\`\`\` *${groupMetadata.subject}*`)			
		    } else {		
		    reply('aktif untuk mengaktifkan, nonaktif untuk menonaktifkan')			
		    }			
		    break
            case 'antilink': 
            if (!isBotGroupAdmins) return reply(mess.only.badmin)			
		    if (!mek.key.fromMe && !isOwnerOn && !isGroupAdmins && !isOwner) return reply(mess.admin)		    
			if (args.length < 1) return reply('PILIH 1/0')
			if (Number(args[0]) === 1) {
			if (isAntiLink) return reply('*SUDAH AKTIF* !!!')
			antilink.push(from)
			fs.writeFileSync('./library/database/antilink.json', JSON.stringify(antilink))
			reply('*success in activating the antilink feature in this group*')
			reply(`*「 WARNING 」\n\njika bukan admin group kalian dilarang mengirim link group!!*`)
			} else if (Number(args[0]) === 0) {
			antilink.splice(from, 1)
			fs.writeFileSync('./library/database/antilink.json', JSON.stringify(antilink))
			reply('*success disabling antilink feature in this group*')
			} else {
			reply(`PILIH 1/0`)
			}
			break
//========[ BATAS NYAA ]=========\\
//NO CAPTION

//========[ DOWNLOAD CASE ]=========\\
            case 'play':
            if (!isRegistered) return replyRegs(mess.regis)
			if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply('hanya khsus premium')
            if (args.length == 0) return reply(`Example: ${prefix + command} vide 1detik`)
            query = args.join(" ")
            get_resultL = await fetchJson(`https://ziy.herokuapp.com/api/yt/playmp3?query=${query}&apikey=${ZiyKey}`)
            textP =`
*YOUTUBE PLAY*

Judul : ${get_resultL.title}
Link : ${get_resultL.url}
            `
            ALDI.sendMessage(from, textP, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}` ,
            "body": `Nih ${query} nya`,
            "mediaType": "2",
            "thumbnailUrl": `${get_resultL.thumb}`,
            "mediaUrl": "https://youtu.be/0JmND7fnK6k",
            "thumbnail": await getBuffer(get_resultL.thumb),
            "sourceUrl": "http://ziy.herokuapp.com"
            },mentionedJid:[sender]}, quoted : mek})
            get_audio = await getBuffer(get_resultL.url)
            ALDI.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_resultL.title}.mp3`, quoted: mek})
            break
            case 'ytmp3':
            if (!isRegistered) return replyRegs(mess.regis)
			if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply('hanya khusus premium')
            if (args.length == 0) return reply(`Example: ${prefix + command} vide 1 detik`)
            url = args.join(" ")
            get_result3 = await fetchJson(`https://ziy.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${ZiyKey}`)
            get_resultM3 = get_result3.result
            text3 =`
*YOUTUBE MP3*

Judul : ${get_resultM3.title}
channel : ${get_resultM3.channel}
views : ${get_resultM3.views}
Link : ${get_resultM3.url}
            `
            ALDI.sendMessage(from, text3, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}` ,
            "body": `Nih ${url} nya`,
            "mediaType": "2",
            "thumbnailUrl": `${get_resultM3.thumb}`,
            "mediaUrl": "https://youtu.be/0JmND7fnK6k",
            "thumbnail": await getBuffer(get_resultM3.thumb),
            "sourceUrl": "http://ziy.herokuapp.com"
            },mentionedJid:[sender]}, quoted : mek})            
            get_audio3 = await getBuffer(get_resultM3.url)
            ALDI.sendMessage(from, get_audio3, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_resultM3.title}.mp3`, quoted: mek})
            break
            case 'ytmp4':
            if (!isRegistered) return replyRegs(mess.regis)
			if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply('hanya khsus premium')
            if (args.length == 0) return reply(`Example: ${prefix + command} vide 1 detik`)
            url = args.join(" ")
            get_result4 = await fetchJson(`https://ziy.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${ZiyKey}`)
            get_resultM4 = get_result4.result
            text4 =`
*YOUTUBE MP4*

Judul : ${get_resultM3.title}
channel : ${get_resultM3.channel}
views : ${get_resultM3.views}
Link : ${get_resultM3.url}
            `
            ALDI.sendMessage(from, text4, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}` ,
            "body": `Nih ${url} nya`,
            "mediaType": "2",
            "thumbnailUrl": `${get_resultM4.thumb}`,
            "mediaUrl": "https://youtu.be/0JmND7fnK6k",
            "thumbnail": await getBuffer(get_resultM4.thumb),
            "sourceUrl": "http://ziy.herokuapp.com"
            },mentionedJid:[sender]}, quoted : mek})            
            get_video4 = await getBuffer(get_resultM4.url)
            ALDI.sendMessage(from, get_video4, video, { mimetype: Mimetype.mp4Video, filename: `${get_resultM4.title}.mp4`, quoted: mek})
            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION

//========[ GACHA CASE ]=========\\
            case 'ppcouple1':// Made Whith leyscoders
            if (!isRegistered) return replyRegs(mess.regis)
            reply(mess.wait)                  
			anu1 = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=${ZiyKey}`) 
			//RESULT COWO
			cowo1 = await getBuffer(anu1.result.cowo_image)
			ALDI.sendMessage(from, cowo1, MessageType.image, { thumbnail: fakereply, caption: 'ini cowo nya..', quoted: ftroli})
		    //RESULT CEWE
		    cewe1 = await getBuffer(anu1.result.cewe_image)
		    ALDI.sendMessage(from, cewe1, MessageType.image, { thumbnail: fakereply, caption: 'ini cewe nya...', quoted: ftroli})
		    break
            case 'ppcouple2':// MADE White lolhuman
            if (!isRegistered) return replyRegs(mess.regis)
            reply(mess.wait)
			anu2 = await fetchJson(`https://ziy.herokuapp.com/api/gacha/ppcouple2?apikey=${ZiyKey}`) 
			// RESULT COWO
			cowo2 = await getBuffer(anu2.result.cowo_image)
			ALDI.sendMessage(from, cowo2, MessageType.image, { thumbnail: fakereply, caption: 'ini cowo nya..', quoted: ftroli})
		    //RESULT CEWE
		    cewe2 = await getBuffer(anu2.result.cewe_image)
		    ALDI.sendMessage(from, cewe2, MessageType.image, { thumbnail: fakereply, caption: 'ini cewe nya...', quoted: ftroli})
		    break
		    /*case 'indonesia':
            GACHA1 = await getBuffer(`https://ziy.herokuapp.com/api/gacha/indonesia?apikey=${ZiyKey}`)
		    ALDI.sendMessage(from, GACHA1, MessageType.image, { thumbnail: fakereply, caption: 'ini kak cecan Indonesia nya..', quoted: ftroli})
		    break*/
		    case 'malaysia':
            if (!isRegistered) return replyRegs(mess.regis)
            GACHA2 = await getBuffer(`https://ziy.herokuapp.com/api/gacha/malaysia?apikey=${ZiyKey}`)
            ALDI.sendMessage(from, {
            contentText: `nih kak ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `${command}`, buttonText:{displayText: 'Next 🔃'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(GACHA2, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })            
		    break
		    case 'korea':
            if (!isRegistered) return replyRegs(mess.regis)
            GACHA3 = await getBuffer(`https://ziy.herokuapp.com/api/gacha/korea?apikey=${ZiyKey}`)
            ALDI.sendMessage(from, {
            contentText: `nih kak ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `${command}`, buttonText:{displayText: 'Next 🔃'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(GACHA3, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })            
		    break
		    case 'china':
            if (!isRegistered) return replyRegs(mess.regis)
            GACHA4 = await getBuffer(`https://ziy.herokuapp.com/api/gacha/china?apikey=${ZiyKey}`)
            ALDI.sendMessage(from, {
            contentText: `nih kak ${command} nya`,
            footerText: `jangan lupa\nfollow ig : ${igown}`,
            buttons: [
            {buttonId: `${command}`, buttonText:{displayText: 'Next 🔃'}, type: 1},
            {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
            ],
            headerType: 4,
            imageMessage: (await ALDI.prepareMessageMedia(GACHA4, MessageType.image, {})).imageMessage
            }, MessageType.buttonsMessage, {
            quoted: mek
            })            
            break
//========[ BATAS NYAA ]=========\\
//NO CAPTION

//========[ TOOLS CASE ]=========\\
           case 'nulis':
           case 'tulis':
            if (!isRegistered) return replyRegs(mess.regis)
           if(!q) return reply(`*Example : ${prefix + command} text`)
           nuls  = await getBuffer(`https://ziy.herokuapp.com/api/nulis?text=${q}&apikey=xZiyy`)
           ALDI.sendMessage(from, {
           contentText: "lain kali nulis sendiri yak",
           footerText: "awas ketauan:v",
           buttons: [
           {buttonId: `menu`, buttonText:{displayText: 'Menu Bot 📚'}, type: 1},
           {buttonId: `owner`, buttonText:{displayText: 'Owner Bot 🤴'}, type: 1}
           ],
           headerType: 4,
           imageMessage: (await ALDI.prepareMessageMedia(nuls, MessageType.image, {})).imageMessage
           }, MessageType.buttonsMessage, {
           quoted: mek
           })            
           break

      default:
	    if (isGroup && !mek.key.fromMe && isAntiLink) {
        if (budy.includes("chat.whatsapp.com")) {
        if (!isGroup) return
	    if (!isAntiLink) return
		if (isGroupAdmins) return reply('*_Kerana Kamu Admin bot Tidak Akan Di Kick*')
		ALDI.updatePresence(from, Presence.composing)
		if (messagesCC.includes("#izinmin")) return reply("izin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Group Terdeteksi 」*${sender.split("@")[0]} Bot Akan Kick Kamu Bye Bye`)
		setTimeout( () => {
		ALDI.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		console.log(color('LINKGROUP TERDETEKSI'))
		}
		}
if (budy.startsWith('>')){
			
if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
				
try{
reply(require('util').format(await eval(`;(async () => { ${budy.slice(2)} })()`)))
}catch(err){
	e = String(err)
reply(e)
	
}

}

if (budy.startsWith('x')){

try {
if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
return ALDI.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})

} 
catch(err) {
e = String(err)

reply(e)

}

}  

        
if (budy.startsWith("$ ")){
if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
           	console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(budy.slice(2), (err, stdout) => {
           	if (err) return reply(`${err}`)
           	if (stdout) reply(`${stdout}`)
           	})
            }
if(budy.startsWith('cekprefix')){
y = `*Prefix yg sedang digunakan adalah : ${single ? `${prefa}` : multi ? 'Multiprefix' : 'NoPrefix'}*`
reply(y)
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwnerOn && !isOwner) return reply(mess.owner)
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}  






}


//----------------------------------------------------------------------\\
    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[TEXT]", "red"),
        "SELF-MODE",
        color(sender.split("@")[0])
      );
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("c.isZero") && !e.includes("jid")) {
      console.log("Message : %s", color(e, "green"));
    }
    // console.log(e)
  }
};
