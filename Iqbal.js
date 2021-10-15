//Hai I`m Iqbalzz`
// SC NYA JANGAN DI JUAL
//Thanks To Mastah
//Hexagonz
//Usep
//Adi
//Fajar
//Dehante
//udin anggara 
//gesha
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const util = require('util');
const ggs = require('google-it')
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const FormData = require('form-data')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const setTtt = require('./lib/tictactoe.js')
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const { pinterest } = require('./lib/pinterest')
const { mediafireDl } = require('./lib/mediafire.js')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const _prem = require("./lib/premium"); 
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const Mthumb = fs.readFileSync('./media/thumb.jpeg')
const Mfake = fs.readFileSync ('./media/fake.jpeg')
const Bfake = fs.readFileSync ('./media/fake.jpeg','base64')
const { help, help2 } = require('./message')
const game = require("./lib/game");
let {    
    gamewaktu,
    limitCount
} = require('./config.json')

//DATABASE
let tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
let _win = JSON.parse(fs.readFileSync('./database/tttwin.json'))
let _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'))
let scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
let welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
let addJoi = JSON.parse(fs.readFileSync('./database/join.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let sambungkata = JSON.parse(fs.readFileSync('./database/sambungkata.json'))
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))


targetpc = setting.targetpc
owner = setting.owner
fake = setting.fake
botname = setting.botname
g = setting.g
notif = setting.notif
namaowner = setting.namaowner


lolkey = setting.lolkey
zeksapi = setting.zeksapi
dappakey = setting.dappakey
fxc7key = setting.fxc7key


gamewaktu = setting.gamewaktu
limitCount = setting.limitCount
limitCountb = setting.limitCountb


readG = true
readP = false
antitrol = true 
banChats = false
offline = false
autorespon = false
autovn = false
autongetik = false
antivo = false
menusimpel = false //By Rappa(Senku)

let buriq = []
let kuis = []
let mtk = []
let nime = []
let ckl = []
let tebakbendera = []
hit_today = []


numbernye = '0'
waktu = '-'
alasan = '-'


//tictactoe
const X = "❌"
const O = "⭕️" 
const tunjuk = "👈" 


//get lose
const getWins = (sender, total) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _win[position].win -= total
                 fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
            }
        }
 
const getLose = (sender, total) => {
            let position = false
            Object.keys(_lose).forEach((i) => {
                if (_lose[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lose[position].lose -= total
                 fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
            }
        }

//jam
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }

//cmd sticker
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}

//=================================================//
module.exports = iqbl = async (iqbl, bal) => {
	try {
        if (!bal.hasNewMessage) return
        bal = bal.messages.all()[0]
		if (!bal.message) return
		if (bal.key && bal.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(iqbl, bal)
    	bal.message = (Object.keys(bal.message)[0] === 'ephemeralMessage') ? bal.message.ephemeralMessage.message : bal.message
    	const content = JSON.stringify(bal.message)
		const from = bal.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const wib = moment().tz('asia/jakarta').format("hh:mm:ss")
		const wita = moment.tz('asia/makassar').format('hh:mm:ss')
        const wit = moment.tz('asia/jayapura').format('hh:mm:ss')
        const type = Object.keys(bal.message)[0]        
        var pes = (type === 'conversation' && bal.message.conversation) ? bal.message.conversation : (type == 'imageMessage') && bal.message.imageMessage.caption ? bal.message.imageMessage.caption : (type == 'videoMessage') && bal.message.videoMessage.caption ? bal.message.videoMessage.caption : (type == 'extendedTextMessage') && bal.message.extendedTextMessage.text ? bal.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim()
        const cmd = (type === 'conversation' && bal.message.conversation) ? bal.message.conversation : (type == 'imageMessage') && bal.message.imageMessage.caption ? bal.message.imageMessage.caption : (type == 'videoMessage') && bal.message.videoMessage.caption ? bal.message.videoMessage.caption : (type == 'extendedTextMessage') && bal.message.extendedTextMessage.text ? bal.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && bal.message.conversation.startsWith(prefix)) ? bal.message.conversation : (type == 'imageMessage') && bal.message[type].caption.startsWith(prefix) ? bal.message[type].caption : (type == 'videoMessage') && bal.message[type].caption.startsWith(prefix) ? bal.message[type].caption : (type == 'extendedTextMessage') && bal.message[type].text.startsWith(prefix) ? bal.message[type].text : (type == 'listResponseMessage') && bal.message[type].singleSelectReply.selectedRowId ? bal.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && bal.message[type].selectedButtonId ? bal.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(bal.message[type].fileSha256.toString('base64')) !== null && getCmd(bal.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(bal.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? bal.message.conversation : (type === 'extendedTextMessage') ? bal.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? bal.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? bal.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? bal.message.buttonsResponseMessage.selectedDisplayText : ''
        isImage = (type === 'imageMessage')
        listmes = (type == 'listResponseMessage') ? bal.message.listResponseMessage.title : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = iqbl.user.jid
		const botNumberss = iqbl.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = bal.key.fromMe
      ? iqbl.user.jid
      : isGroup
      ? bal.participant
      : bal.key.remoteJid;
    let senderr = bal.key.fromMe
      ? iqbl.user.jid
      : bal.key.remoteJid.endsWith("@g.us")
      ? bal.participant
      : bal.key.remoteJid;
	//	let sender = isGroup ? bal.participant : bal.key.remoteJid
		const senderNumber = sender.split("@")[0]
		ownerNumber = ["6281273417450@s.whatsapp.net","6281316438103@s.whatsapp.net","6281316438103@s.whatsapp.net","6281316438103@s.whatsapp.net","6281316438103@s.whatsapp.net","6281316438103@s.whatsapp.net"]
	//    const ownerNumber =  [`${owner}@s.whatsapp.net`]
	
        const isOwner = ownerNumber.includes(sender)
        const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        isStc = Object.keys(bal.message)[0] == "stickerMessage" ? bal.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
	    const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage") 
        hit_today.push(command)
		const totalchat = await iqbl.chats.all()
		const totalgroup = await iqbl.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await iqbl.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await iqbl.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       //const isWelkom = isGroup ? welkom.includes(from) : false 
        //const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false 
        const isJoin = addJoi.includes(sender)
        const conts = bal.key.fromMe ? iqbl.user.jid : iqbl.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = bal.key.fromMe ? iqbl.user.name : conts.notify || conts.vname || conts.name || '-'
        const antibot = m.isBaileys
       const gcounti = setting.gcount
        const gcount = isPremium ? gcounti.prem : gcounti.user
        //MESS
		mess = {
			wait: 'PERMINTAAN SEDANG DIPROSES...',
			success: 'DONE!!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			prem: '*_Hubungi Owner Untuk Menggunakan Fitur Premium_*',
			limit: `Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v' ,
				api: 'Linknya error:v',
			},
			only: {
				group: 'GROUP ONLY',
				admin: 'ADMIN ONLY',
				badmin: 'BOT NOT ADMIN',
				owner: 'OWNER ONLY',
			}
		}
		 const nebal = (angka) => {
return Math.floor(angka)
}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = iqbl.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return iqbl.relayWAMessage(po, {waitForAck: true})
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        
        const reply = (teks) => {
            iqbl.sendMessage(from, teks, text, {quoted:bal})
        }
        
        const freply = (teks) => {
            iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{"externalAdReply":{"title": fake,"body": `${fake}`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/6b0259fd741e108910fbe.jpg`,"thumbnail": Mthumb,"sourceUrl": `https://wa.me/6281273417450?text=Assalamualaikum`}}})
        }
        
        const fyt = (teks) => {
            iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{"externalAdReply":{"title": fake, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
        }

        const sendMess = (hehe, teks) => {
            iqbl.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? iqbl.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : iqbl.sendMessage(from, teks.trim(), extendedText, { quoted: bal, contextInfo: { "mentionedJid": memberr } })
        } 
         function monospace(string) {
            return '```' + string + '```'
        }   
      


        const fakestatus = (teks) => {
            iqbl.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/fake.jpeg`)},"title": fake,"description": "Copyright By ©SANZ`", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "Copyright By ©SANZ`","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "caption": `Rusia`,"name":`Rusia`}}}
            const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 1,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/fake.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
            const fvideo = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999999999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}
            const fgif = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}} 
            const floc = {
	              key : { participant : '0@s.whatsapp.net' }, message: { locationMessage: { name: 'Russia', jpegThumbnail: fs.readFileSync('./stik/fake.jpeg')}}}
            const fdoc = {
	              key : { participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'Copyright By ©SANZ', jpegThumbnail: fs.readFileSync('./stik/fake.jpeg')}}}
	
        const fakethumb = (teks, yes) => {
            iqbl.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:bal,caption:yes})
        }
        const fakegroup = (teks) => {
            iqbl.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const addSewaGroup = (gid, expired, _dir) => {
    const obj = { id: gid, expired: Date.now() + toMs(expired), status: true }
    _dir.push(obj)
    fs.writeFileSync('./database/sewa.json', JSON.stringify(_dir))
}

// Get Sewa
const getSewaPosition = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

// Get Sewa Expired
const getSewaExpired = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

// Check Sewa
const checkSewaGroup = (gid, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            status = true
        }
    })
    return status
}

// Expired Check
const expiredCheck = (iqbl, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Sewa expired: ${_dir[position].id}`)
            if (_dir[position].status === true){
                iqbl.sendMessage(_dir[position].id, `Waktu sewa di grup ini sudah habis, bot akan keluar otomatis`, MessageType.text)
                .then(() => {
                    iqbl.groupLeave(_dir[position].id)
                    .then(() => {
                        _dir.splice(position, 1)
                        fs.writeFileSync('./database/sewa.json', JSON.stringify(_dir))
                    })
                })
            }
        }
    }, 1000)
}
const isSewa = checkSewaGroup(from, sewa)
expiredCheck(iqbl, sewa)
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        iqbl.sendMessage(to, media, MessageType.sticker,{quoted:bal})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
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
                    iqbl.sendMessage(to, media, type, { quoted: bal, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
iqbl.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
iqbl.sendMessage(from, hasil, type, options).catch(e => {
iqbl.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
const sendFileFromUrl = async(link, type, options) => {
      hasil = await getBuffer(link)
	  iqbl.sendMessage(from, hasil, type, options).catch(e => {
	  fetch(link).then((hasil) => {
	  iqbl.sendMessage(from, hasil, type, options).catch(e => {
	  iqbl.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
})
})
})
})
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
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./stick/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
iqbl.sendMessage(from, media, sticker, {quoted: bal})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))  
});
});
});
}
const kick = function (from, orangnya) {
for (let i of orangnya) {
iqbl.groupRemove(from, [i]);
}
};
const add = function (from, orangnya) {
iqbl.groupAdd(from, orangnya);
};
const sendBug = async (target, teks) => {
if (!teks) teks = ".";
await iqbl.relayWAMessage(
iqbl.prepareMessageFromContent(
target,
iqbl.prepareDisappearingMessageSettingContent(0),
{}
),
{ waitForAck: true }
);
iqbl.sendMessage(target, teks, "conversation");
};
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      iqbl.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
kntl = await iqbl.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: kntl.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
iqbl.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//FUNCTION
            cekafk(afk)
            if (!bal.key.remoteJid.endsWith('@g.us') && offline){
            if (!bal.key.fromMe){
            if (isAfk(bal.key.remoteJid)) return
            addafk(bal.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            iqbl.sendMessage(bal.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (bal.key.remoteJid.endsWith('@g.us') && offline) {
        if (!bal.key.fromMe){
        if (bal.message.extendedTextMessage != undefined){
        if (bal.message.extendedTextMessage.contextInfo != undefined){
        if (bal.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of bal.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(bal.key.remoteJid)) return
        addafk(bal.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        iqbl.sendMessage(bal.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (bal.key.fromMe) return
reply('Njier jangan pake fake trolli _-\n\n' + require('util').format(m.key))
await iqbl.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      iqbl.sendMessage(from, commandsDB[i].balasan, text, {quoted: bal})
      }
      }
var chats = await iqbl.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readG === false) return
await iqbl.chatRead(jid)
})
var chatss = await iqbl.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readP === false) return
await iqbl.chatRead(jid)
})

var premi = '𝑼𝑺𝑬𝑹'
			if (bal.key.fromMe) {
				premi = '𝑶𝑾𝑵𝑬𝑹'
		    }
		    // function for get the winner
const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return iqbl.sendMessage(from, `Anda belum pernah memainkan game gelut\n\nJumlah kemenangan kamu didalam game *_Gelut_* adalah: ${winCounts}`, text, { quoted: bal })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return iqbl.sendMessage(from, `Anda belum pernah memainkan game gelut\n\nJumlah kemenangan kamu didalam game *_Gelut_* adalah: ${winCounts}`, text, { quoted: bal })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
        return iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎳 \`\`\`TICTACTOE\`\`\` 🎲\n•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `\n\n•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `\n_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎳 \`\`\`TICTACTOE\`\`\` 🎲\n`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻\n\n`
                    teks += board
                    teks += `\n\n•> Win : @${player2} 🎉`
                    return iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉\n\n`
                    teks += board
                    teks += `\n\n•> Lose : @${player2} 👻`
                    return iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎳 \`\`\`TICTACTOE\`\`\` 🎲\n`
                teks += `•> Draw : @${player1} 🦁\n\n`
                teks += board
                teks += `\n\n•> Draw : @${player2} 🐯`
                return iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎳 \`\`\`TICTACTOE\`\`\` 🎲\n•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `\n\n•> Player 2 : @${lawan.split("@")[0]} (${pelawan})`
                return iqbl.sendMessage(from, tesk, text, {quoted:bal, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		iqbl.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: bal, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}
 
 _prem.expiredCheck(premium) 

     game.cekWaktuK(iqbl, kuis)
if (game.isKuis(from, kuis)){
if (budy.toLowerCase().includes(game.getJawabanKuis(from, kuis))){
var htgm2 = randomNomor(1000)
addBalance(sender, htgm2, balance)
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanKuis(from, kuis)}\n\n*Balance Yang Didapat Adalah*\n*${htgm2}*\nIngin bermain lagi? kirim *${prefix}kuis*`
let ge = await iqbl.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}kuis`, buttonText: {displayText: '↪️ Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
iqbl.relayWAMessage(ge)
kuis.splice(game.getKuisPosi(from, kuis), 1)
}
}
game.cekWaktuSA(iqbl, buriq)
if (game.isSiapaAku(from, buriq)){
if (budy.toLowerCase().includes(game.getJawabanSA(from, buriq))){
var htgm2 = randomNomor(1000)
addBalance(sender, htgm2, balance)
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, buriq)}\n\n*Balance Yang Didapat Adalah*\n*${htgm2}*\nIngin bermain lagi? kirim *${prefix}kuis*`
let ge = await iqbl.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}siapaaku`, buttonText: {displayText: '↪️ Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
iqbl.relayWAMessage(ge)
buriq.splice(game.getSAPosi(from, buriq), 1)
}
}

game.cekWaktuTB(iqbl, tebakbendera)
     if (game.isTebakBendera(from, tebakbendera)){       
if (budy.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var htgm2 = randomNomor(1000)
addBalance(sender, htgm2, balance)
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n\n*Balance Yang Didapat Adalah*\n*${htgm2}*\nIngin bermain lagi? kirim *${prefix}kuis*`
let ge = await iqbl.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}tebakbendera`, buttonText: {displayText: '↪️ Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
iqbl.relayWAMessage(ge)
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
}
}

game.cekWaktuCkl(iqbl, ckl)
if (game.isCkl(from, ckl)){
if (budy.toLowerCase().includes(game.getJawabanCkl(from, ckl))){
var htgm2 = randomNomor(1000)
addBalance(sender, htgm2, balance)
jawab = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanCkl(from, ckl)}\n\nIngin bermain lagi? kirim pencet dibawah ini`
let ge = await iqbl.prepareMessageFromContent(mdata.id, {
"buttonsMessage": {
"contentText": `${jawab}`,
"buttons": [
{buttonId: 'caklontong', buttonText: {displayText: '↪️Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: falfa, contextInfo: {"mentionedJid": [num]}})
iqbl.relayWAMessage(ge)
ckl.splice(game.getCklPosi(from, ckl), 1)
}
}

game.cekWaktuMtk(iqbl, mtk)
            if (game.isMtk(from, mtk)){
if (budy.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm2 = randomNomor(1000)
addBalance(sender, htgm2, balance)
jawabya = `*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMtk(from, mtk)}\n\n*Balance Yang Didapat Adalah*\n*${htgm2}*\nIngin bermain lagi? kirim *${prefix}kuis*`
let ge = await iqbl.prepareMessageFromContent(from, {
"buttonsMessage": {
"contentText": `${jawabya}`,
"buttons": [
{buttonId: `${prefix}mathkuis ${q}`, buttonText: {displayText: '↪️ Try Again'}, type: 1}
],
headerType: 1
},
					},{quoted: floc})
iqbl.relayWAMessage(ge)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}
  

/*if (!isGroup && !isCmd && !command && !bal.key.fromMe && !autorespon) {
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
simi = await fetchJson(`https://api.simsimi.net/v1/?lang=${numd.data.country_code}&cf=false&text=${cmd}`)
sami = simi.success
iqbl.sendMessage(from, `_${sami}_`, text, {thumbnail: Mthumb, sendEphemeral: true, quoted:bal, contextInfo : {forwardingScore: 508, isForwarded: true, "externalAdReply": {"title": `Hai Kak ${pushname}👋🏻`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
                      }*/
//AntiViewOnce By Iqbalzz
if (isGroup && !antivo && m.mtype == 'viewOnceMessage'){
var msg = {...bal}
msg.message = bal.message.viewOnceMessage.message
msg.message[Object.keys(msg.message)[0]].viewOnce = false
reply('Terdeteksi Mengirim Foto/Video ViewOnce')
iqbl.copyNForward(from, msg)
}
if (messagesC.match('https://wa.me/')){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
iqbl.updatePresence(from, Presence.composing)
if (messagesC.includes('#izinadmin')) return reply('#izinadmin diterima')
var kic = `${sender.split('@')[0]}@s.whatsapp.net`
xexe = `Antilink Detector, maaf @${sender.split('@')[0]} anda akan di kick dari group`		        
iqbl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})		    
button = [
  {buttonId: `${prefix}antilink 0`, buttonText: {displayText: 'MATIKAN ANTIKLINK'}, type: 1},
]
 buttons = {
    contentText: `${xexe}`,
    footerText: `${fake}`,
    buttons: button,
    headerType: 1
}
await iqbl.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: bal, contextInfo: { mentionedJid: [sender, `${owner}@s.whatsapp.net`]}})
}
if (messagesC.match('wa.me/')){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
iqbl.updatePresence(from, Presence.composing)
if (messagesC.includes('#izinadmin')) return reply('#izinadmin diterima')
var kic = `${sender.split('@')[0]}@s.whatsapp.net`
xexe = `Antilink Detector, maaf @${sender.split('@')[0]} anda akan di kick dari group`		        
iqbl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})		    
button = [
  {buttonId: `${prefix}antilink 0`, buttonText: {displayText: 'MATIKAN ANTIKLINK'}, type: 1},
]
 buttons = {
    contentText: `${xexe}`,
    footerText: `${fake}`,
    buttons: button,
    headerType: 1
}
await iqbl.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: bal, contextInfo: { mentionedJid: [sender, `${owner}@s.whatsapp.net`]}})
}
if (messagesC.match('Wa.me/')){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
iqbl.updatePresence(from, Presence.composing)
if (messagesC.includes('#izinadmin')) return reply('#izinadmin diterima')
var kic = `${sender.split('@')[0]}@s.whatsapp.net`
xexe = `Antilink Detector, maaf @${sender.split('@')[0]} anda akan di kick dari group`		        
iqbl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})		    
button = [
  {buttonId: `${prefix}antilink 0`, buttonText: {displayText: 'MATIKAN ANTIKLINK'}, type: 1},
]
 buttons = {
    contentText: `${xexe}`,
    footerText: `${fake}`,
    buttons: button,
    headerType: 1
}
await iqbl.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: bal, contextInfo: { mentionedJid: [sender, `${owner}@s.whatsapp.net`]}})
}
if (messagesC.match('https://chat.whatsapp.com/')){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
iqbl.updatePresence(from, Presence.composing)
if (messagesC.includes('#izinadmin')) return reply('#izinadmin diterima')
var kic = `${sender.split('@')[0]}@s.whatsapp.net`
xexe = `Antilink Detector, maaf @${sender.split('@')[0]} anda akan di kick dari group`		        
iqbl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})		    
button = [
  {buttonId: `${prefix}antilink 0`, buttonText: {displayText: 'MATIKAN ANTIKLINK'}, type: 1},
]
 buttons = {
    contentText: `${xexe}`,
    footerText: `${fake}`,
    buttons: button,
    headerType: 1
}
await iqbl.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: bal, contextInfo: { mentionedJid: [sender, `${owner}@s.whatsapp.net`]}})
}
             // Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    yoka = `Jawaban Anda Benar!\nHadiah ${htgm2}`
                    var htgm2 = randomNomor(10000)
                  addBalance(sender, htgm2, balance)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    button = [
  {buttonId: `${prefix}tebakgambar`, buttonText: {displayText: 'AGAIN GAME'}, type: 1},
]
 buttons = {
    contentText: `${yoka}`,
    footerText: `${fake}`,
    buttons: button,
    headerType: 1
}
await iqbl.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: bal, contextInfo: { mentionedJid: [sender, `${owner}@s.whatsapp.net`]}})
                }
            }
               
         
                
            
            //SAMBUNG KATA
            
            if (sambungkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = sambungkata[sender.split('@')[0]]
                userAnswer = budy.toLowerCase()
                if (userAnswer.startsWith(jawaban[jawaban.length - 1])) {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${lolkey}&text=${userAnswer}`)
                    wahyu = get_result.result
                    await iqbl.sendMessage(from, wahyu, MessageType.text, { quoted: bal }).then(() => {
                    	var htgm2 = randomNomor(1000)
                  addBalance(sender, htgm2, balance)
                        sambungkata[sender.split('@')[0]] = get_result.result.toLowerCase()
                        fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    })
                } else {
                    reply("Silahkan jawab dengan kata yang dimulai huruf " + jawaban[jawaban.length - 1])
                }
            }
            
            // Tebak Anime
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    var htgm2 = randomNomor(1000)
                  addBalance(sender, htgm2, balance)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply(`( Jawaban Anda Salah! )\n\nJika Tidak Mau Jawab Ketik !canceltebaknime`)
                }
            }
if (isGroup && !isGroupAdmins && isBotGroupAdmins) {
                if (isImage) {
                        var filePath = await iqbl.downloadAndSaveMediaMessage(bal);
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        var get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${lolkey}`, {...options })
                        fs.unlinkSync(filePath)
                        var get_resulttt = get_result.result
                        var is_nsfw = "No"
                        if (Number(get_resulttt.replace("%", "")) >= 60) var is_nsfw = "Yes"
                        if (is_nsfw === "Yes") {
		        reply(`Gambar NSFW Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
                iqbl.groupRemove(from, [sender])
              }
                }
          }

        
    
//Auto Vn
if (!isGroup && !isCmd && !bal.key.fromMe && !autovn) {
             for (let i of totalchat) {
             	autovn = false
          iqbl.updatePresence(i.jid, Presence.recording)
                   }
             }
//Auto Ngetik
if (!isGroup && !isCmd && !bal.key.fromMe && !autongetik) {
             for (let i of totalchat) {
             	autongetik = false
          iqbl.updatePresence(i.jid, Presence.composing)
                   }
             }
             // CMD
        if (isCmd && !isGroup) {
            addBalance(sender, randomNomor(50), balance)
			console.log(color('[CMD]'), color(moment(bal.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))
        }
        if (isCmd && isGroup) {
            addBalance(sender, randomNomor(50), balance)
			console.log(color('[CMD]'), color(moment(bal.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }


             
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      if (antibot === true) return
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!bal.key.fromMe && banChats === true) return

const isBtMsg = (type == 'buttonsResponseMessage') ? bal.message.buttonsResponseMessage.selectedButtonId : ''
const isStMsg = (type == 'listResponseMessage') ? bal.message.listResponseMessage.singleSelectReply.selectedRowId : ''
// Cmd Button Msg
switch (isBtMsg) {
case 'public':
reply('Bacot')
break
}
// Cmd List Msg
switch (isStMsg) {
case 'publicbals':
if (!bal.key.fromMe && !isOwner) return
if (banChats === false) return
uptime = process.uptime()
banChats = false
freply(`「 *PUBLIC-MODE* 」`)
break
case 'selfbals':
if (!bal.key.fromMe && !isOwner) return
if (banChats === true) return
uptime = process.uptime()
banChats = true
freply(`「 *SELF-MODE* 」`)
break
case 'statusbals':
            freply(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break

case 'speedbals':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			freply(pingnya)
			})
			break  
			case 'runtimebals':
            run = process.uptime() 
            teks = `${kyun(run)}`
            freply(teks)
            break  
case 'scbals': 
freply(`Bot ini menggunakan sc : https://github.com/Hexagonz/SELF-HX`)
break
case 'deletepcbals':
if (!bal.key.fromMe && !isOwner) return
anu = await iqbl.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
for (let _ of anu) {
iqbl.modifyChat(_.jid, 'delete', {
includeStarred: false
})
}
await reply(`Berhasil menghapus ${anu.length} pribadi chat`)
break
case 'restartbals':
if (!bal.key.fromMe && !isOwner) return
const cmdse = 'pm2 restart main'
reply('Restart...')
await exec(cmdse, (err, stdout) => {
if (err) return iqbl.sendMessage(from, `${err}`, text, { quoted: bal })
if (stdout) {
reply('Restart...')
}
})
console.log(stdout)
break
}

// Stick Cmd
switch (isStc) {
case "c1f40a203939746b645c97e107d97c4ed66793acdbcd541905b4e9d7ecf8ab69": // JADI ADMIN
if (!isOwner) return
if (!isBotGroupAdmins) return
if (!isGroup) return
mentioned = sender
if (mentioned.length > 1) {
teks = `@${mentioned.split('@')[0]} Sekarang Admin!`
iqbl.sendMessage(from, teks, text, {contextInfo:{mentionedJid:[mentioned]}})
iqbl.groupMakeAdmin(from, [mentioned])
} else {
iqbl.sendMessage(from, `@${mentioned.split('@')[0]} Sekarang Admin!`, text, {contextInfo:{mentionedJid:[mentioned]}})
iqbl.groupMakeAdmin(from, [mentioned])
}
break
}
switch (command) {
	case 'addcmd': 
case 'setcmd':
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = bal.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply("Done")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = bal.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done")
break
case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
reply(teksnyee)
break
  case 'addprem':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
if (!q)return reply(`*Format Error!*\n\n*Example :*\n• *${prefix + command} @tag 10d*\n\n*Note :*\n• s : detik\n• m : menit\n• h : jam\n• d : hari\n\n`)
expired = q.split(" ")[1]
const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
reply(`_Succses_`)
break

case 'delprem':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
user = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(user.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
mentions(`Succes delete premium @${user.split("@")[0]}`,[user],true)
}
}
break 
case 'sewa':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0] === 'add'){
if (isSewa) return reply(`Sudah ada`)
addSewaGroup(from, args[1], sewa)
reply(`Success`)
} else if (args[0] === 'del'){
if (!isSewa) return reply(`Tidak ada`)
sewa.splice(getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
reply(`Succes`)
} else {
reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
break
// Sewa Check
case 'sewacheck':
case 'ceksewa':
if (!isGroup) return
if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvip = ms(getSewaExpired(from, sewa) - Date.now())
let premiumnya = `*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik`
reply(premiumnya)
break
       case 'clearall':{
                if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
                let chiit = await iqbl.chats.all()
                for (let i of chiit){
                    iqbl.modifyChat(i.jid, 'delete', {
                        includeStarred: false
                    })
                }
                reply(`Selesai`)
            }
                break
     case 'listprem':
                let ttt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium){
                    men.push(i.id)
                    let cekvip = ms(i.expired - Date.now())
                    ttt += `*ID :* @${i.id.split("@")[0]}\n*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                }
                mentions(ttt, men, true)
                break

// Sewa List
case 'sewalist': 
case 'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}`
for (let i of sewa){
let cekvipp = ms(i.expired - Date.now())
txtnyee += `\n\n*ID :* ${i.id} \n*Expire :* ${cekvipp.days} Hari ${cekvipp.hours} Jam ${cekvipp.minutes} Menit ${cekvipp.seconds} Detik`
}
reply(txtnyee)
break
    case 'jadibot': 
      if (!isPremium && !bal.key.fromMe) return reply(mess.prem)
    if(bal.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,iqbl,from)
    break
    case 'stopjadibot':
    if(bal.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'setmenu': //By Rappa
if (!bal.key.fromMe && !isOwner)return mentions(`*Perintah ini Khusus @${owner} !*`, [`${owner}@s.whatsapp.net`], true)
if(args[0] == 'simpel'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'ori'){
menusimpel = false
reply('Sucsess')
}else{
reply(`Cara Penggunaan : ${prefix + command} image\n\nTersedia\n •simpel\n •ori`)
}
break
case 'help': case 'menu':
if(menusimpel == false){
console.log(bgcolor(`Command ${prefix+command} Dari`, 'cyan'), color(`${pushname}`))
const timestamppp = speed();
const latensiii = speed() - timestamppp
const totalgroupp = await iqbl.chats.array.filter(v => v.jid.endsWith('g.us'))
const totalkontakk = await iqbl.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchatt = await iqbl.chats.all()
stst = await iqbl.getStatus(`${sender.split('@')[0]}@c.us`)//By Denis
stst = stst.status == 401 ? '' : stst.status
let cekvipp = ms(getSewaExpired(from, sewa) - Date.now())
let expired = `${cekvipp.days} Hari ${cekvipp.hours} Jam ${cekvipp.minutes} Menit ${cekvipp.seconds} Detik`
let cekvippp = ms(getSewaExpired(from, sewa) - Date.now())
let expiredd = `${cekvippp.days} Hari ${cekvippp.hours} Jam ${cekvippp.minutes} Menit ${cekvippp.seconds} Detik`
gambar = fs.readFileSync('./stik/thumb.jpeg')
fakee = fs.readFileSync('./stik/fake.jpeg')
   try {
				             pporang = await iqbl.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				yoke = await getBuffer(pporang) 
menu = `${ucapanWaktu} @${sender.split("@")[0]}

*</BOT INFO>*
🔖 _Creator_ : @${owner.split("@")[0]}
🔖 _Hit Today_ : ${hit_today.length} 𝑯𝒊𝒕
🔖 _Lib_ : 𝑩𝒂𝒊𝒍𝒆𝒚𝒔
🔖 _Type_ : 𝑵𝒐𝒅𝒆𝑱𝒔
🔖 _Prefix_ : 「 𝑴𝒖𝒍𝒕𝒊𝑷𝒓𝒆𝒇𝒊𝒙 」
🔖 _Mode_ : ${banChats ? '𝑺𝑬𝑳𝑭' : '𝑷𝑼𝑩𝑳𝑰𝑪'}
🔖 _Status_ : ${offline ? '𝑶𝑭𝑭𝑳𝑰𝑵𝑬' : '𝑶𝑵𝑳𝑰𝑵𝑬'}
🔖 _User_ : ${premi}
🔖 _Group Chats_ : ${totalgroupp.length}
🔖 _Private Chats_ : ${totalkontakk.length}
🔖 _Total Chats_ : ${totalchatt.length}
🔖 _Speed_ : ${latensiii.toFixed(4)} 𝑺𝒆𝒄𝒐𝒏𝒅𝒔

*</USER INFO>*
🔖 _Sisa Limit_ : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\n🔖 _Limit Game_ : ${cekGLimit(sender, gcount, glimit)}/${gcount}\n🔖 _Balance_ : $${getBalance(sender, balance)}
🔖 _Nama_ : ${pushname}
🔖 _Status_ : ${isPremium ? 'Premium':'Free'}
🔖 _Status User_ : ${isOwner ? 'Owner':'User'}
🔖 _Bio_ : ${stst}
🔖 _Premium Check Group_ :
*Expired Prem* : ${isSewa ?  `${expired}` : isSewa ? expired : 'Not Premium'}

*</INFO TIME>*
🔖 _${wib}_ 𝙒𝙄𝘽
🔖 _${wita}_ 𝙒𝙄𝙏𝘼
🔖 _${wit}_ 𝙒𝙄𝙏

*</OWNER>*
🌹 _${prefix}Off_
🌹 _${prefix}On_
🌹 _${prefix}Self_
🌹 _${prefix}Public_
🌹 _${prefix}Sewa_
🌹 _${prefix}Addprem_
🌹 _${prefix}Delprem_
🌹 _${prefix}Get_
🌹 _${prefix}Culik_ <id>
🌹 _${prefix}Term_ <code>
🌹 _${prefix}Antidelete_
🌹 _${prefix}Baileys_
🌹 _${prefix}Autoread_
🌹 _${prefix}Autorespon_
🌹 _${prefix}Autovn_
🌹 _${prefix}Autongetik_
🌹 _${prefix}Antiviewonce_
🌹 _${prefix}Addrespon_
🌹 _${prefix}Dellrespon_
🌹 _${prefix}Setthumb_
🌹 _${prefix}Bc_
🌹 _${prefix}Bcimage_
🌹 _${prefix}Settarget_
🌹 _${prefix}Setfakeimg_
🌹 _${prefix}Setreply_
🌹 _${prefix}Searchmsg_
🌹 _${prefix}Spamsw_

*</MAKER>*
🌹 _${prefix}Sticker_
🌹 _${prefix}Swm_ <author|packname>
🌹 _${prefix}Take_ <author|packname>
🌹 _${prefix}Fdeface_
🌹 _${prefix}Emoji_
🌹 _${prefix}Stickmeme_
🌹 _${prefix}Stickmeme2_
🌹 _${prefix}Stickmeme3_
🌹 _${prefix}Sizestick_

*</ANIME>*
🌹 _${prefix}Loli_
🌹 _${prefix}Cosplay_
🌹 _${prefix}Husbu_
🌹 _${prefix}Wallml_
🌹 _${prefix}Waifu_
🌹 _${prefix}Shinobu_
🌹 _${prefix}Megumin_
🌹 _${prefix}Neko_
🌹 _${prefix}KlikManga_
🌹 _${prefix}Kiryu_
🌹 _${prefix}Quotesanime_
🌹 _${prefix}Stotyanime_
🌹 _${prefix}Animeplanet_

*</NSFW>*
🌹 _${prefix}Nsfwneko_ 
🌹 _${prefix}Milf_ 
🌹 _${prefix}Blowjob_ 
🌹 _${prefix}Nsfwyuri_
🌹 _${prefix}Nsfwlesbian_
🌹 _${prefix}Nsfwneko_
🌹 _${prefix}Nsfwavatar_
🌹 _${prefix}Nsfwtits_
🌹 _${prefix}Nsfwketa_
🌹 _${prefix}Nsfweroyuri_
🌹 _${prefix}Nsfweroneko_

*</CONVERT>*
🌹 _${prefix}Toimg_
🌹 _${prefix}Tomp3_
🌹 _${prefix}Tomp4_
🌹 _${prefix}Slow_
🌹 _${prefix}Fast_
🌹 _${prefix}Reverse_
🌹 _${prefix}Tourl_

*</UP STORY>*
🌹 _${prefix}Upswteks_
🌹 _${prefix}Upswimage_
🌹 _${prefix}Upswvideo_

*</FUN>*
🌹 _${prefix}Fitnah_
🌹 _${prefix}Fitnahpc_
🌹 _${prefix}Kontak_
🌹 _${prefix}Setcmd_
🌹 _${prefix}Delcmd_
🌹 _${prefix}Listcmd_
🌹 _${prefix}Once_
🌹 _${prefix}Oncevid_
🌹 _${prefix}Tebakgambar_
🌹 _${prefix}Listprem_
🌹 _${prefix}Viewonce_
🌹 _${prefix}Ttt_
🌹 _${prefix}Size_
🌹 _${prefix}Sizevn_

*</TAG>*
🌹 _${prefix}Hidetag_
🌹 _${prefix}Kontag_
🌹 _${prefix}Sticktag_
🌹 _${prefix}Rptag_
🌹 _${prefix}Totag_
🌹 _${prefix}Tag_

*</GROUP>*
🌹 _${prefix}Promote_
🌹 _${prefix}Demote_
🌹 _${prefix}Group_
🌹 _${prefix}Leave_<id>
🌹 _${prefix}Antidelete_
🌹 _${prefix}Caripesan_ <query>
🌹 _${prefix}Getcaption_
🌹 _${prefix}Voting_
🌹 _${prefix}Antilink_
🌹 _${prefix}Delvote_
🌹 _${prefix}Tagall_
🌹 _${prefix}Sider_
🌹 _${prefix}Listonline_
🌹 _${prefix}Kick_
🌹 _${prefix}add_
🌹 _Vote_
🌹 _Devote_

*</DOWNLOAD>*
🌹 _${prefix}Ytsdl_ <query>
🌹 _${prefix}Ytdl_ <link/query>
🌹 _${prefix}Play_ <query>
🌹 _${prefix}Play2_ <query>
🌹 _${prefix}Video_ <query>
🌹 _${prefix}Ytmp3_ <link>
🌹 _${prefix}Ytmp4_ <link>
🌹 _${prefix}Nhsearch_ <query>
🌹 _${prefix}Nhdl_ <code>
🌹 _${prefix}Ig_ <link>
🌹 _${prefix}Igdl_ <link>
🌹 _${prefix}Igstory_ <username>
🌹 _${prefix}Twitter_ <link>
🌹 _${prefix}Tiktokdl_ <link>
🌹 _${prefix}Tiktoknowm_ <link>
🌹 _${prefix}Ttmp3_ <link>
🌹 _${prefix}Ttmp4_ <link>
🌹 _${prefix}Mediafire_ <link>

*</SEARCHING>*
🌹 _${prefix}Ytsearch_ <query>
🌹 _${prefix}Igstalk_ <query>
🌹 _${prefix}Tinyurl_ <link>
🌹 _${prefix}Fb_ <link>
🌹 _${prefix}Brainly_ <query>
🌹 _${prefix}Image_ <query>
🌹 _${prefix}Anime_ <random>
🌹 _${prefix}Pinterest_ <query>
🌹 _${prefix}Pinterest2_ <query>
🌹 _${prefix}Wiki_ <query>
🌹 _${prefix}Google_ <query>
🌹 _${prefix}Komiku_ <query>
🌹 _${prefix}Lirik_ <query>
🌹 _${prefix}Lirik2_ <query>
🌹 _${prefix}Chara_ <query>
🌹 _${prefix}Playstore_ <query>
🌹 _${prefix}Otaku_ <query>
🌹 _${prefix}Herodetail_ <query>
🌹 _${prefix}Stickerwa <query>
🌹 _${prefix}Wallpapersearch_
🌹 _${prefix}Wallpapersearch2_
🌹 _${prefix}Wallpapersearch3_
🌹 _${prefix}Herolist_

*</OTHER>*
🌹 _${prefix}Waifustick_
🌹 _${prefix}Gura_
🌹 _${prefix}Ppcouple_
🌹 _${prefix}Status_
🌹 _${prefix}Presence_
🌹 _${prefix}Ping_
🌹 _${prefix}Inspect_
🌹 _${prefix}Ppcouple_
🌹 _${prefix}Join_
🌹 _${prefix}Ceksewa_ Op
🌹 _${prefix}Listsewa_
🌹 _${prefix}Listrespon_
🌹 _${prefix}Jadibot_
🌹 _${prefix}Listbot_
🌹 _${prefix}Stopjadibot_
🌹 Menu [List Menu]`
sendButLocation(from, menu, `Copyright By ©SANZ\n*TQ TO*:\nIqbal\nHexagonz\nAkira\nMyGod`, {jpegThumbnail:yoke}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER'},type:1},{buttonId:`${prefix}rules`,buttonText:{displayText:'RULES'},type:1}], {contextInfo: { mentionedJid: [sender, `${owner}@s.whatsapp.net`]}})
}
else if(menusimpel = true){
console.log(bgcolor(`Command ${prefix+command} Dari`, 'cyan'), color(`${pushname}`))
const timestamppp = speed();
const latensiiio = speed() - timestamppp
const totalgroupp = await iqbl.chats.array.filter(v => v.jid.endsWith('g.us'))
const totalkontakk = await iqbl.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchatt = await iqbl.chats.all()
stst = await iqbl.getStatus(`${sender.split('@')[0]}@c.us`)//By Denis
stst = stst.status == 401 ? '' : stst.status
let cekvipp = ms(getSewaExpired(from, sewa) - Date.now())
let expired = `*Expired :* ${cekvipp.days} Hari ${cekvipp.hours} Jam ${cekvipp.minutes} Menit ${cekvipp.seconds} Detik`
const owner = "6281273417450@s.whatsapp.net"
		run = process.uptime() 
    teks = `${kyun(run)}`
    try {
pic = await iqbl.getProfilePicture(sender)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
gambar = await getBuffer(pic)
yokw = `*</BOT INFO>*
🔖 _Creator_ : @${owner.split("@")[0]}
🔖 _Hit Today_ : ${hit_today.length} 𝑯𝒊𝒕
🔖 _Lib_ : 𝑩𝒂𝒊𝒍𝒆𝒚𝒔
🔖 _Type_ : 𝑵𝒐𝒅𝒆𝑱𝒔
🔖 _Prefix_ : 「 𝑴𝒖𝒍𝒕𝒊𝑷𝒓𝒆𝒇𝒊𝒙 」
🔖 _Mode_ : ${banChats ? '𝑺𝑬𝑳𝑭' : '𝑷𝑼𝑩𝑳𝑰𝑪'}
🔖 _Status_ : ${offline ? '𝑶𝑭𝑭𝑳𝑰𝑵𝑬' : '𝑶𝑵𝑳𝑰𝑵𝑬'}
🔖 _User_ : ${premi}
🔖 _Group Chats_ : ${totalgroupp.length}
🔖 _Private Chats_ : ${totalkontakk.length}
🔖 _Total Chats_ : ${totalchatt.length}
🔖 _Speed_ : ${latensiiio.toFixed(4)} 𝑺𝒆𝒄𝒐𝒏𝒅𝒔

*</USER INFO>*
🔖 _Sisa Limit_ : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\n🔖 _Limit Game_ : ${cekGLimit(sender, gcount, glimit)}/${gcount}\n🔖 _Balance_ : $${getBalance(sender, balance)}
🔖 _Nama_ : ${pushname}
🔖 _Status_ : ${isPremium ? 'Premium':'Free'}
🔖 _Status User_ : ${isOwner ? 'Owner':'User'}
🔖 _Bio_ : ${stst}
🔖 _Premium Check Group_ :
*Expired Prem : ${isSewa ? `${expired}` : isSewa ? expired : 'Not Premium'}*

*</INFO TIME>*
🔖 _${wib}_ 𝙒𝙄𝘽
🔖 _${wita}_ 𝙒𝙄𝙏𝘼
🔖 _${wit}_ 𝙒𝙄𝙏
`
    mhan = await iqbl.prepareMessage(from, gambar, image, {thumbnail: gambar, quoted: ftroli, contextInfo:{"forwardingScore":999,"isForwarded":true, "mentionedJid": [owner],"externalAdReply": {"title": `Hai Kak ${pushname}👋🏻`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
    button = [
  {buttonId: '👤 CONTACT OWNER', buttonText: {displayText: ' 👤 OWNER'}, type: 1},
  {buttonId: '📒 MENU BOT', buttonText: {displayText: '📒 MENU BOT'}, type: 1},
  {buttonId: '📄 SCRIPT BOT', buttonText: {displayText: '📄 SCRIPT BOT'}, type: 1}
]
 buttons = {
imageMessage: mhan.message.imageMessage,
    contentText: `${yokw}`,
    footerText: `${fake}`,
    buttons: button,
    headerType: 4
}
await iqbl.sendMessage(from, buttons, MessageType.buttonsMessage, {
        jpegThumbnail: fs.readFileSync('./stik/fake.jpeg'),
        caption: `${yokw}`,
            mentionedJid: [owner]},
            {quoted: ftroli})
}
break
    case 'delvote':
            if(!isGroupAdmins && !bal.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !bal.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (bal.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || bal.message.extendedTextMessage.contextInfo == null) {
            let id = bal.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            limitAdd(sender, limit)
            break
    case 'igstory': 
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    iqbl.sendMessage(from,link,video,{quoted: bal,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    iqbl.sendMessage(from,link,image,{quoted: bal,caption: `Type : ${i.type}`})                  
                }
            }
            });
            limitAdd(sender, limit)
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await iqbl.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await iqbl.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
//case 'limit': case 'ceklimit': case 'balance': case 'glimit':
//if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
reply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
limitAdd(sender,  limit)
break
 	case 'ppcouple':
                 // 	 if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
				reply(mess.wait)
				anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/couple?apikey=${dappakey}`) 
				cowo = await getBuffer(anu.result.pria)
				iqbl.sendMessage(from, cowo, image, {quoted: bal, caption: `*COWO*`})
				cewe = await getBuffer(anu.result.wanita)
				iqbl.sendMessage(from, cewe, image, {quoted: bal, caption: `*CEWE*`})
				limitAdd(sender, limit)
				break 
				case 'infoall': case 'tagall':
if(!q) return reply('Ingfonya apa?')
if (!isGroup) return reply(mess.only.group)
var nom = bal.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┃${shp}  *@${mem.jid.split('@')[0]}*\n`
	members_id.push(mem.jid)
	}
mentions(`┏━━⬣ 𝙄𝙉𝙁𝙊 \n┃ *From : @${sender.split("@")[0]}*\n┃ *Info :  ${q}*\n┃ *Total Member : ${groupMembers.length}*\n┃ *Nama Group : ${groupName}*\n┗⬣\n┏━━•𝙏𝘼𝙂 𝘼𝙇𝙇\n┃`+teks+'┃\n┗•', members_id, false)
                   
                    break
     case "listonline": //copas dari stikerinbot  
    /// if (isBanned) return reply(mess.baned)
///   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
if (!isGroup) return reply(mess.only.group)
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(iqbl.chats.get(id).presences),
            iqbl.user.jid,
          ];
          iqbl.reply(
            m.chat,
            "┌─〔 Daftar Online 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;

      case "sider": //copas dari stikerinbot
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await iqbl.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await iqbl.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: iqbl.parseMention(txt),
          },
        });
        break;
case 'limit': case 'ceklimit': case 'balance': case 'glimit':
tiyo = `*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`
sendButMessage(from, tiyo, `CLICK DIBAWAH UNTUK MEMBELI LIMIT`, [
            {              
              buttonId: `${prefix}buylimit`,
              buttonText: {
                displayText: `💸BUYLIMIT`,
              },
              type: 1,
            },
          ]);                  
        break;            
case 'balance': case 'topbalance':
if(!isGroup)return reply(mess.only.group)
client.updatePresence(from, Presence.composing)
let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
let mebn = [];
for (let i of balance){
mebn.push(i.id)
let bl = (i.balance)
txot += `*ID :* @${i.id.split("@")[0]}\n➸ Balance : ${bl}\n\n`
  }
mentions(txot, mebn, true)
break

case 'buylimit':
if (!q)return reply(`Example : ${prefix + command} 10`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
tiyu = `PEMBELIAN SEBANYAK ${q}`
sendButMessage(from, tiyu, `SILAHKAN CLICK SALAH SATU UNTUK MEMBELI LIMIT`, [
            {              
              buttonId: `${prefix}bylimit ${q}`,
              buttonText: {
                displayText: `🧾LIMIT FITUR`,
              },
              type: 1,
               },
          {
            buttonId: `${prefix}buyglimit ${q}`,
            buttonText: {
              displayText: `🎮LIMIT GAME`,
            },
            type: 1,
              },
          {
            buttonId: `${prefix}limit`,
            buttonText: {
              displayText: `🔖CHECK LIMIT`,
            },
            type: 1,
          },
        ]);               
        break;            
case 'buymlimit':
					if (args.length < 1) return reply(`mau beli berapa? misal 1 atau 2 dst, harga perlimit 500 Contoh ${prefix + command} 3`)
				payout = body.slice(11)
				const koinPerlimit = 500
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`MAAF UANG KAMU BELUM CUKUP, JIKA INGIN MELIHAT UANG KETIK ${prefix}dompet`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*PEMBELIAN BERHASIL*\n\n*diterima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
     case 'bylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
ta = `Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`
sendButMessage(from, ta, `CLICK DIBAWAH UNTUK MENGECEK LIMIT`, [
            {              
              buttonId: `${prefix}limit`,
              buttonText: {
                displayText: `🔖CHECKLIMIT`,
              },
              type: 1,
            },
          ]);                  
          }
        break;           

case 'buyglimit':{
if(!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
kentod = `Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`
sendButMessage(from, kentod, `CLICK DIBAWAH UNTUK MENGECEK LIMIT`, [
            {              
              buttonId: `${prefix}limit`,
              buttonText: {
                displayText: `🔖CHECKLIMIT`,
              },
              type: 1,
            },
          ]);                  
          }
break
    case 'lirik':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            limitAdd(sender, limit)
            break
case 'lirik2':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
limitAdd(sender, limit)
break

    case 'otaku':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            iqbl.sendMessage(from,ram,image,{quoted:bal,caption:rem})
            limitAdd(sender, limit)
            break

    case 'komiku':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            limitAdd(sender, limit)
            break
    case 'chara':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await iqbl.sendMessage(from,li,image,{quoted: bal})
            limitAdd(sender, limit)
            break

  case 'happymod': 
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} free fire`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/happymod?query=${query}&apikey=${dappakey}`, {method: 'get'})
                    kontol = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of kontol) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break   
  case 'klikmanga': 
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} naruto`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://dapuhy-api.herokuapp.com/api/manga/klikmanga?query=${query}&apikey=${dappakey}`, {method: 'get'})
                    kontol = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of kontol) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.genre}\n`
                        ini_txt += `${x.author}\n`
                        ini_txt += `${x.status}\n`
                        ini_txt += `${x.release}\n`
                        ini_txt += `${x.desc}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break   
case 'kiryu': 
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} naruto`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://dapuhy-api.herokuapp.com/api/manga/kiryuu?query=${query}&apikey=${dappakey}`, {method: 'get'})
                    kontol = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of kontol) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.episode}\n`
                        ini_txt += `${x.rating}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break   
                    case 'animeplanet': 
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} naruto`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://dapuhy-api.herokuapp.com/api/manga/animeplanet?query=${query}&apikey=${dappakey}`, {method: 'get'})
                    kontol = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of kontol) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    limitAdd(sender, limit)
                    break   
                    
  case 'quotesanime':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
hehq = `*Quotes* : _${anu.data.result.quote}_\n\n*Karakter* : _―${anu.data.result.character}_\n\n*Anime* : _―${anu.data.result.anime}_\n\n*Episode* : _―${anu.data.result.episode}_`
button = [
{buttonId: `${prefix+command}`, buttonText: {displayText: '️➡️ 𝑵𝒆𝒙𝒕'}, type: 1},
{buttonId: `y`, buttonText: {displayText: '️❌ 𝑺𝒕𝒐𝒑'}, type: 1},
]
 buttons = {
contentText: `${hehq}`,
footerText: `Created By ©SANZ`,
buttons: button,
headerType: 1
}
await iqbl.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: bal})
limitAdd(sender, limit)
break
}

case 'storyanime':	
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply(mess.wait)
kntl = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=${dappakey}`)                    
mhan2 = await iqbl.prepareMessage(from, kntl, video, { thumbnail: Mfake })
ggbutsan = [
{buttonId: `${prefix+command}`, buttonText: {displayText: '➡️ 𝑵𝒆𝒙𝒕'}, type: 1},
{buttonId: `y`, buttonText: {displayText: '️❌ 𝑺𝒕𝒐𝒑'}, type: 1},
]
gbbuttonan = {
videoMessage : mhan2.message.videoMessage,
contentText: `CLICK NEXT UNTUK MELANJUTKAN`,
footerText: `${fake}`,
buttons: ggbutsan,
headerType: 5
}
await iqbl.sendMessage(from, gbbuttonan, MessageType.buttonsMessage, {
quoted: bal, contextInfo: { mentionedJid: [sender]}})
limitAdd(sender, limit)
break


    case 'pinterest':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            mhan2 = await iqbl.prepareMessage(from, di, image, { thumbnail: Mfake })
gbutsan = [
  {buttonId: `${prefix+command} ${q}`, buttonText: {displayText: 'NEXT'}, type: 1}
]

 gbuttonan = {
imageMessage : mhan2.message.imageMessage,
    contentText: `Hasil Dari Pencarian *${q}*`,
    footerText: "By ©SANZ",
    buttons: gbutsan,
    headerType: 4
}
await iqbl.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
			quoted: bal, contextInfo: { mentionedJid: [sender]}})
			limitAdd(sender, limit)
   break


case 'pinterest2':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${q}`)
})
limitAdd(sender, limit)
break

    case 'playstore':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            limitAdd(sender, limit)
            break
 case 'tebakgambar': 
   if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                const dataa = fs.readFileSync('./lib/tebakgambar.js');
                 jsonData = JSON.parse(dataa);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 ini_image = randKey.result.soal
                    jawaban = randKey.result.jawaban
                    ini_buffer = await getBuffer(ini_image)
                    await iqbl.sendMessage(from, ini_buffer, image, { quoted: fkontak, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
              //        sleep(30000)
                    })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    gameAdd(sender, glimit)
                    break
/* case 'tebakgambar':  
 if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply(`*_MASIH ADA SOAL BELUM DIJAWAB_*`)
                    get_result = await axios.get(`http://api.zeks.xyz/api/tebakgambar?apikey=HADIR_HMM`)
                    const petunjuk = get_result.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    get_result1 = get_result.data.result
                    ini_image = get_result1.soal
                    jawaban = get_result1.jawaban
                    ini_buffer = await getBuffer(ini_image)
                    iqbl.sendMessage(from, ini_buffer, MessageType.image, { quoted: bal, caption: `*SILAHKAN JAWAB SOAL BERIKUT*\n*_PETUNJUK_*: ${petunjuk}`}).then(() => {
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    })
                    setTimeout(() => {
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {                 
                    sendButMessage(from, `*_Maaf ${pushname} Soal Sudah Ditutup_*\n*Jawaban:* _${jawaban}_`, `*${fake}*`, [{buttonId: `${prefix+command}`,buttonText: {displayText: `🔄AGAIN GAME`,},type: 1,},{buttonId: `Y`,buttonText: {displayText: `⚠️STOP`,},type: 1,},])
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    }, 60000);
                    gameAdd(sender, glimit)
break */
case 'canceltebak':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("Success mengcancel tebak gambar sebelumnya")
                    break
                    
      
    case 'on':
            if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
    if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':            
    if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            iqbl.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break


case 'get':
        case 'fetch': //ambil dari nuru
               if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
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
case 'kirim':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!bal.quoted) return reply('reply chatnya!')
if(!q) return reply('apa yg mau di kirim?') 
reply('sukses mengirim pesan!')
sendMess(bal.quoted.sender , q)
limitAdd(sender, limit)
break
    case 'sticktag':
            if ((isMedia && !bal.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            file = await iqbl.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await iqbl.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: bal
            }
            ini_buffer = fs.readFileSync(file)
            iqbl.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
            if ((isMedia && !bal.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            file = await iqbl.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await iqbl.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: bal
            }
            ini_buffer = fs.readFileSync(file)
            iqbl.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !bal.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            file = await iqbl.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await iqbl.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: bal
            }
            ini_buffer = fs.readFileSync(file)
            iqbl.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !bal.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            file = await iqbl.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await iqbl.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: bal
            }
            ini_buffer = fs.readFileSync(file)
            iqbl.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !bal.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            file = await iqbl.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await iqbl.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: bal
            }
            ini_buffer = fs.readFileSync(file)
            iqbl.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = bal.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            iqbl.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
case 'kick':
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !bal.key.fromMe) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          bal.message.extendedTextMessage === undefined ||
          bal.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = bal.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          iqbl.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = bal.message.extendedTextMessage.contextInfo.participant;
          iqbl.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          iqbl.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;  
        case "add":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !bal.key.fromMe) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply(mess.only.admin)
        mentioned = bal.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          add(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = bal.message.extendedTextMessage.contextInfo.participant;
          iqbl.groupAdd(from, [anu]);
          reply(mess.success);
        } else {
          add(from, mentioned);
          reply(mess.success);
        }
        break;
    case 'settarget':
    if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = bal.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await iqbl.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await iqbl.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await iqbl.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            iqbl.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: bal })
            fs.unlinkSync(ran)
            })
            limitAdd(sender, limit)
            break

    case 'fast':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await iqbl.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            iqbl.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: bal })
            fs.unlinkSync(ran)
            })
            limitAdd(sender, limit)
            break
    case 'slow':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await iqbl.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            iqbl.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: bal })
            fs.unlinkSync(ran)
            })
            limitAdd(sender, limit)
            break

    case 'reverse':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await iqbl.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            iqbl.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: bal })
            fs.unlinkSync(ran)
            })
            limitAdd(sender, limit)
            break

    case 'anime':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            iqbl.sendMessage(from,media,image,{quoted:bal,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            iqbl.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await iqbl.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, iqbl, bal, from)
			limitAdd(sender, limit)
			break

	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !bal.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : bal
             media = await iqbl.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            iqbl.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: bal })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            iqbl.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: bal })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && bal.message.videoMessage.seconds < 11 || isQuotedVideo && bal.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : bal
            const media = await iqbl.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            iqbl.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: bal })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            iqbl.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: bal })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            limitAdd(sender, limit)
            break
    case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            iqbl.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            cihcih = await iqbl.downloadMediaMessage(swsw)
            iqbl.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            iqbl.sendMessage(from, bur, text, { quoted: bal, thumbnail: Mthumb })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            cihcih = await iqbl.downloadMediaMessage(swsw)
            iqbl.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            iqbl.sendMessage(from, bur, text, { quoted: bal, thumbnail: Mthumb })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : bal
            const tipes = await iqbl.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await iqbl.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		iqbl.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await iqbl.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: bal
			}
			iqbl.sendMessage(from, optionshidetag, text)
			break
	case 'play': 
	if (!isPremium && !bal.key.fromMe) return reply(mess.prem)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join(' ')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam baltuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        buffe = await getBuffer(dl_link)
                        fakke = await getBuffer(thumb)
                        iqbl.sendMessage(from, fakke, MessageType.image, {quoted:bal, caption:captions})
                        iqbl.sendMessage(from, buffe, MessageType.audio, {
"contextInfo": {
mimetype: 'audio/mp4',
text: '©SANZ',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${title}`,
"body": `${title}`,
"previewType": "PHOTO",
"thumbnailUrl": `${thumb}`,
"thumbnail": fakke,
"sourceUrl": args[0]
}}, quoted:bal, ptt:false
}).catch(() => reply(mess.error.api))
})
})
} catch (err) {
reply(mess.error.api)
}
                   break  
        case 'video':
        if (!isPremium && !bal.key.fromMe) return reply(mess.prem)
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam baltuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
                   case 'gura':
                case 'gurastick':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    iqbl.sendSticker(from, wifegerakx, bal)
             		limitAdd(sender, limit)
                    }
                    break
 case 'waifusticker':
                case 'waifustick':
                case 'animesticker':
                case 'nimesticker':
                case 'nimestick': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    iqbl.sendSticker(from, wifegerakx, bal)
             		limitAdd(sender, limit)
                    }
                    break
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !bal.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            const media = await iqbl.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                iqbl.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: bal})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && bal.message.videoMessage.seconds < 11 || isQuotedVideo && bal.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
                const media = await iqbl.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            iqbl.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: bal})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await iqbl.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			limitAdd(sender, limit)
			break
	case 'ytsearch':
	 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await iqbl.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
    		limitAdd(sender, limit)
			break
case 'wallpapersearch': 
               
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await iqbl.sendMessage(from, ini_buffer, image, { quoted: bal })
                  limitAdd(sender, limit)
                    break
                case 'wallpapersearch2':
               
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${lolkeyy}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await iqbl.sendMessage(from, ini_buffer, image, { quoted: bal})
                  limitAdd(sender, limit)
                      break 
                      case 'wallpapersearch3':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper3?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await iqbl.sendMessage(from, ini_buffer, image, { quoted: bal})
                    break 
                        case 'stickerwa': 
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`)
                        await iqbl.sendMessage(from, ini_buffer, sticker)
                    }
                    limitAdd(sender, limit)
                    break 
	case 'setreply':
	case 'setfake':
	if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
	if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
        	if ((isMedia && !bal.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : bal
			delb = await iqbl.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
	        if ((isMedia && !bal.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : bal
			delb = await iqbl.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			case 'ytsdl':{
			   if (!isPremium && !bal.key.fromMe) return reply(mess.prem)
            //  	if (!isPremium && !isOwner) return reply("Khusus Premium!")
                if (args.length < 2) return reply(`Kirim perintah *${command}* _query_`)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                        let list = []
                        let startnum = 1
                        for (var x of yt) {
                        let yy = { title: 'Data ke-'+ startnum++,
                        rows: [
                           {
                            title: `${x.title}`,
                            description: `\n\n*Viewers: ${x.views}*\n*Duration: ${x.timestamp}*\n*Upload: ${x.ago}*\n*Url: ${x.url}*`,
                            rowId: `${prefix}ytdl ${x.url}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    listmsg(from, `*[ YTS DOWNLOAD ]*`, `\n${g}Data Berhasil Ditemukan, Hasil Pencarian${g} *⌕ ${q}* ${g}Pilih DIbawah Ya Kak${g}`, list)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'YT SEARCH Error : ' + err)
                    console.log(color('[YT SEARCH]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
case 'nhsearch': case 'nhentaisearch': { 
               if (!isPremium && !bal.key.fromMe) return reply(mess.prem)
               if (!q) return reply(`Example: ${prefix}nhentaisearch Nakano Nino`)
               reply(mess.wait)
               let rowsdata = [];
               let res = await axios.get(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${args[0]}`)
               for (let i = 0; i < res.data.result.length; i++) {
                  rowsdata.push({ title: res.data.result[i].title_english, rowId: `${prefix}nhdl ${res.data.result[i].id}`, description: res.data.result[i].id })
}
                  let listM = iqbl.prepareMessageFromContent(from, { listMessage: { title: "", description: `*◩ NHENTAI BOT*\n\n*Hallo Kak* *_@${sender.split("@")[0]}_* *Silahkan Pilih Dibawah*\n*Untuk Mendownload Code*`, buttonText: "Click Here", listType: 1, sections: [{ rows: rowsdata }] }}, { quoted: bal, contextInfo: { mentionedJid: [sender, `${owner}@s.whatsapp.net`]}})
                  iqbl.relayWAMessage(listM, { waitForAck: true })
           }
               break
case 'xnxxdown':
case 'xxnxdownload':
if (!isPremium && !bal.key.fromMe) return reply(mess.prem)
if (!q) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${q}`)
nxx = 
`*XNXX DOWNLOADER*
*Title* : ${anu.result.title}
*Durasi* : ${anu.result.duration}
*Rating* : ${anu.result.rating}
*Penonton* : ${anu.result.view}
*Like* : ${anu.result.like}
*Dislike* : ${anu.result.dislike}
*Comment*: ${anu.result.comment}

*VIDEO AKAN DI KIRIM...*`
sendMediaURL(from,`${anu.result.thumbnail}`,nxx)
sendMediaURL(from,`${anu.result.link[0].link}`,`${anu.result.title}`)
break
   case 'nekopoidown': 
   if (!isPremium && !bal.key.fromMe) return reply(mess.prem)
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
          //      if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _link nekopoi_`)
                if (!isUrl(args[1]) && !args[1].includes('nekopoi.care')) return reply(mess.error.Iv)
                reply(mess.wait)
                    fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${args[1]}`)
                    .then((data) => {
                    var get_result = data.result
                    let ini_txt = `*Title* : ${get_result.anime}\n`
                    ini_txt += `*Porducers* : ${get_result.producers}\n`
                    ini_txt += `*Duration* : ${get_result.duration}\n`
                    ini_txt += `*Size* : ${get_result.size}\n`
                    ini_txt += `*Sinopsis* : ${get_result.sinopsis}\n`
                    var link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        var link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                   xinz.sendFileFromUrl(from, get_result.thumb, ini_txt, bal)
                    limitAdd(sender, limit)
                   })
              .catch((err) => {
                            iqbl.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                   
                    break
   case 'nhdl':                
   if (!isPremium && !bal.key.fromMe) return reply(mess.prem)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    reply(mess.wait)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await iqbl.sendMessage(from, ini_buffer, document, { quoted: bal, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
case 'ytplay':
    case 'ytdl':
       if (!isPremium && !bal.key.fromMe) return reply(mess.prem)
     	if (args[0].startsWith('https://youtube.com/shorts/')) return reply(`*_GAGAL SAAT MENGAMBIL DATA, GUNAKAN LINK YOUTUBE YANG BENAR_*\n *_CONTOH:_* ${prefix+command} <query>\n(LEWAT PENCARIAN)\n${prefix+command} <link>\n(LEWAT LINK YOUTUBE YANG BENAR)`)
if (args.length < 1) return reply(`Kirim perintah *${prefix}ytplay judul music/video*`)
reply(mess.wait)
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `*P L A Y*\n\n*SILAHKAN DIPILIH TYPE NYA KAK* _@${sender.split("@")[0]}_\n\n*_Title_* : ${g}${title}${g}\n *_Size_* : ${g}${filesizeF}${g}\n *_Views_* : ${g}${yut.videos[0].views}${g}\n*_Duration_* : ${g}${yut.videos[0].timestamp}${g}\n *_URL_* : ${g}${yut.videos[0].url}${g}`
ya = await getBuffer(thumb) 
sendButLocation(from, capti, `${fake}\n @0`, {jpegThumbnail:ya}, [{buttonId:`${prefix}ytmp3 ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1},{buttonId:`${prefix}ytmp4 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1}], {contextInfo: { mentionedJid: [sender, '0@s.whatsapp.net']}})
})
break
/*case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            denz.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break*/
	case 'ytmp4':
	 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
	if (args[0].startsWith('https://youtube.com/shorts/')) return reply('*_GAGAL SAAT MENGAMBIL DATA GUNAKAN LINK YOUTUBE YANG BENAR_*')
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
reply(mess.wait)
try {
ytv(args[0])
.then(async(res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async(a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YT MP4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
const captionsYtmp4 = `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Please wait, the media file is being sent it may take a few minutes_`
buff = await getBuffer(dl_link)
fak = await getBuffer(thumb)
iqbl.sendMessage(from, fak, MessageType.image, {quoted:bal, caption:captionsYtmp4})
iqbl.sendMessage(from, buff, MessageType.video, {
"contextInfo": {
mimetype: 'video/mp4',
text: '©SANZ',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${title}`,
"body": `${title}`,
"previewType": "PHOTO",
"thumbnailUrl": `${thumb}`,
"thumbnail": fak,
"sourceUrl": args[0]
}}, quoted:bal, caption:"Done!", thumbnail:Bfake
}).catch(() => reply(mess.error.api))
})		
})
} catch (err) {
reply(mess.error.api)
}
limitAdd(sender, limit)
break

	case 'emoji':
	 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
   			limitAdd(sender, limit)
    		break
	case 'ytmp3':
	 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
	if (args[0].startsWith('https://youtube.com/shorts/')) return reply('*_GAGAL SAAT MENGAMBIL DATA GUNAKAN LINK YOUTUBE YANG BENAR_*')
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
freply(mess.wait)
try {
yta(args[0])
.then(async(res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async(a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
const captions = `*YT MP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Please wait, the media file is being sent it may take a few minutes_`
buff = await getBuffer(dl_link)
fak = await getBuffer(thumb)
iqbl.sendMessage(from, fak, MessageType.image, {quoted:bal, caption:captions})
iqbl.sendMessage(from, buff, MessageType.audio, {
"contextInfo": {
mimetype: 'audio/mp4',
text: '©SANZ',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${title}`,
"body": `${title}`,
"previewType": "PHOTO",
"thumbnailUrl": `${thumb}`,
"thumbnail": fak,
"sourceUrl": args[0]
}}, quoted:bal, 
}).catch(() => reply(mess.error.api))
})
})
} catch (err) {
reply(mess.error.api)
}
limitAdd(sender, limit)
break
   case "image":
      case "gimage":
      case "googleimage": 
   //   if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        limitAdd(sender, limit)
        break
 	
case 'igdl':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!q) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
limitAdd(sender, limit)
                    break
case 'tiktokdl':
      case 'tiktok':
       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://vm.tiktok.com/ZSJkHUCwK/`)
                reply(mess.wait)
                link = args.join(' ')
                dppa = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${link}`)
                uhyy = dppa.result
                buffer = await getBuffer(uhyy.link)
                magee = await getBuffer(uhyy.thumbnail)
                textt = `Username : ${uhyy.author.username}\nNickname : ${uhyy.author.nickname}\nTitle : ${uhyy.title}\nKeywords : ${uhyy.keywords}\nDescription : ${uhyy.description}\nDuration : ${uhyy.duration}\nDigg Count : ${uhyy.statistic.diggCount}\nShare Count : ${uhyy.statistic.shareCount}\nComment Count : ${uhyy.statistic.commentCount}\nPlay Count : ${uhyy.statistic.playCount}\n`
                sendButLocation(from, textt, `*SILAHKAN PILIH SALAH SATU KAK @${sender.split("@")[0]}*`, {jpegThumbnail:magee}, [{buttonId:`${prefix}tiktoknowm ${q}`,buttonText:{displayText:'🎞️NO WATERMARK'},type:1},{buttonId:`${prefix}tiktokwm ${q}`,buttonText:{displayText:'🎬WATERMARK'},type:1}, {buttonId:`${prefix}ttmp3 ${q}`,buttonText:{displayText:'🎶ONLY AUDIO'},type:1}], {contextInfo: { mentionedJid: [sender, '0@s.whatsapp.net']}})
                limitAdd(sender, limit)
                break
case 'tiktoku':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		iqbl.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:bal,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
                   case 'tiktoknowm':
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
case 'tiktokwm':
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.watermark}`)
break
    
case 'ttmp4':

if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.ttdownloader(lin).then(res => {
console.log('[ TIKTOK')
anu = res.nowm
fto = Mthumb
iqbl.sendMessage(from, fto, image, {quoted:bal, caption:`*TIKTOK MP4*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, anu, 'Done!')
})
break
// Tiktok mp3 ( MyMans APIs & iqblgonz )
case 'ttmp3':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
freply(mess.wait)
hx.ttdownloader(lin).then(async (res) => {
console.log('[ TIKTOK ]')
anu = res.nowm
fto = Mthumb
khs = await getBuffer(anu)
iqbl.sendMessage(from, khs, audio, {quoted:bal, mimetype:'audio/mp4', filename:'tiktok.mp3', ptt:true})
})
break
   case "brainly": 
    //  if (isBanned) return reply(mess.baned)
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          iqbl.sendMessage(from, teks, text, {
            quoted: bal,
            detectLinks: false,
          });
        });
        limitAdd(sender, limit)
        break;   

    case 'ig':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
        if (!q) return fakegroup(`Link Nya Kawan\nContoh Penggunaan: \n${prefix+command} https://www.instagram.com/p/CUq1hrsgLdP/?utm_medium=copy_link`)
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)        
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    iqbl.sendMessage(from,link,video,{quoted: bal,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    iqbl.sendMessage(from,link,image,{quoted: bal,caption: `Type : ${i.type}`})                  
                }
            }
            });
            limitAdd(sender, limit)
	    break
    case 'igstalk':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            limitAdd(sender, limit)
            break    
    case 'fb':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            limitAdd(sender, limit)
            break    
	case 'term':
	if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
if (isJoin) return reply(`Kamu telah menggunakan fitur ini sebelumnya hubungi owner untuk menyewa bot`)
if (args.length < 1) return reply('Linknya?')
if (isSewa) return reply('Sudah masuk')
cos = args[0]
var net = cos.split('https://chat.whatsapp.com/')[1]
if (!net) return reply('pastikan itu link https://whatsapp.com/')
let { size, idd } = await iqbl.query({ 
json: ["query", "invite",net],
expect200:true })
if (size < 50) {
reply('Member Lo Dikit Jadi Bot Gk Mau Join, minimal member harus 50 orang')
} else if (size > 50) {
try {
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
var codeInvite = cos.split('https://chat.whatsapp.com/')[1]
if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
var response = await iqbl.acceptInvite(codeInvite)
reply('Succes Bergabung Dalam Group')
orgnyee = sender
txtye = `\`\`\`「 Fitur Join 」\`\`\`\n\n•> Nomer : @${orgnyee.split("@")[0]}\n•> Command : Join`
iqbl.sendMessage(`6281273417450@s.whatsapp.net`, txtye, text, {quoted:bal, contextInfo:{mentionedJid:[orgnyee]}})
addJoi.push(sender)
addSewaGroup(`${idd}`, `21600000`, sewa)
fs.writeFileSync('./database/join.json', JSON.stringify(addJoi))
} catch {
reply('LINK ERROR!')
}
} else {
reply('Error!')
}
break
    case'twitter': 
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if (!q) return fakegroup('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)            
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            limitAdd(sender, limit)
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
    if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
            if ((isMedia && !bal.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            file = await iqbl.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await iqbl.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: bal
            }
            ini_buffer = fs.readFileSync(file)
            iqbl.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !bal.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            file = await iqbl.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await iqbl.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: bal
            }
            ini_buffer = fs.readFileSync(file)
            iqbl.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !bal.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            file = await iqbl.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await iqbl.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: bal
            }
            ini_buffer = fs.readFileSync(file)
            iqbl.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !bal.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            file = await iqbl.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await iqbl.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: bal
            }
            ini_buffer = fs.readFileSync(file)
            iqbl.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if ((isMedia && !bal.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(bal).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : bal
            owgi = await iqbl.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            limitAdd(sender, limit)
            break
case 'leave':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`\`\`\`Example :\`\`\`\n\`\`\`${prefix}leave <id>\`\`\``)
ids = args.join(" ")
try {
iqbl.groupLeave(ids)
reply(`Succes leave group ${ids}`)
} catch(e) {
reply('Error!')
}
break
case 'group': case 'grup': case 'gc':
if (!bal.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply('Bot not admin')
if (args[0] === 'buka') {
reply('Sukses Membuka Group')
iqbl.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
await iqbl.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply('Sukses Menutup Grup')
}
break           
case 'promote':
if (!bal.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply('Bot not admin')
if (bal.message.extendedTextMessage === undefined || bal.message.extendedTextMessage === null) return reply('Reply members')
mentionede = bal.message.extendedTextMessage.contextInfo.participant
iqbl.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{mentionedJid:[mentionede]}})
break
case 'demote':
if (!bal.key.fromMe && !isGroupAdmins) return reply('Admin Group Only')
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply('Bot not admin')
if (bal.message.extendedTextMessage === undefined || bal.message.extendedTextMessage === null) return reply('Reply members')
mentionede = bal.message.extendedTextMessage.contextInfo.participant
iqbl.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
iqbl.sendMessage(from, teks, text, {quoted:bal, contextInfo:{mentionedJid:[mentionede]}})
break
    case 'tourl':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            if ((isMedia && !bal.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : bal
            owgi = await iqbl.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            limitAdd(sender, limit)
            break	
    case 'inspect':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await iqbl.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             iqbl.sendMessage(from,par,text,{quoted:bal,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             limitAdd(sender, limit)
             break
case 'once':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
res = await iqbl.prepareMessageFromContent(from,{
					"viewOnceMessage": {
						"message": {
							"imageMessage": {
								"url": "https://mmg.whatsapp.net/d/f/AkDDJ2975Us3dWKRidt-fQcaa_xhkyQmpMHTJosKhlra.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "wgXag8O9U0ncVltenjKQxgaHM+7/LnagjSGy41FZ1eA=",
								"fileLength": "99999999999",
								"height": 1080,
								"width": 1079,
								"mediaKey": "BXO9mBMMMTUsIuKolKNkdvKrTRqCUsVAodT2c5cz16A=",
								"fileEncSha256": "6eY5tqbUffAeC35hsdFpc/TIrfLTEmkB6wOFosH6Bjs=",
								"directPath": "/v/t62.7118-24/11947364_877631506213291_8995743566609849051_n.enc?ccb=11-4&oh=3173a27ea575a14a3549e0ace07bec93&oe=612EF9B9",
								"mediaKeyTimestamp": "1628129633",
								"viewOnce": true
							}
						}
					}
				},{quoted: bal})
                  iqbl.relayWAMessage(res)
                  limitAdd(sender, limit)
                  break
case 'oncevid':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
res = await iqbl.prepareMessageFromContent(from,{
					"viewOnceMessage": {
						"message": {
							"videoMessage": {
								"url": "https://mmg.whatsapp.net/d/f/AmsBfXD1MIsjaboyqeCbX6hgal74dg4f7ukAPL1sty4l.enc",
								"mimetype": "video/mp4",
								"fileSha256": "Fi8kirqiMoq+hEdy+4Q6v78oRvx26zVh68bPU0dpCxY=",
								"fileLength": "9999999999",
								"seconds": 99,
								"mediaKey": "DiRDvbn2Vt7dFLXiBxbyv7c2sO4BS3vPpj4OtM0XYpM=",
								"height": 1138,
								"width": 640,
								"fileEncSha256": "H1J948Q7NaPzICeHs6RzzDkpMdH1X3CRIyPEXcNZuKI=",
								"directPath": "/v/t62.7161-24/29747677_444646636518257_7026527804713552982_n.enc?ccb=11-4&oh=2db2d8046b15ba65f83fa879a7eb71ad&oe=61327E84",
								"mediaKeyTimestamp": "1628277591",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKAMBIgACEQEDEQH/xAAtAAEAAwEAAAAAAAAAAAAAAAAAAgMEAQEBAQEBAAAAAAAAAAAAAAAAAAIBA//aAAwDAQACEAMQAAAAyuKdcBwZJT0TWbm2JjTMhdmsyruQpzZIqmJeyhsiZWobbwYjl3wjrx//xAAlEAACAgEEAQMFAAAAAAAAAAABAgADEQQSITFBExQgIjAzYYH/2gAIAQEAAT8A+znmZYQWMILT5Ea1j1FfBGZWu9iINOJ6NfRxDVQJaEDDA4lLlCT+ol7eTH+kZ7gY48S4ktEIzyYPSj2LtwBMxmz8sExNNe/SGe02/ksUQpSvWWnA8T3FNfFVQi1azUck7Fj6SpKt2SzZj7Kzlz/I9hY8cCf/xAAZEQACAwEAAAAAAAAAAAAAAAAQEQACMDL/2gAIAQIBAT8ALjx6uh//xAAbEQADAAIDAAAAAAAAAAAAAAAAARECAxASIP/aAAgBAwEBPwDmEIIo/OL667Buun//2Q==",
								"viewOnce": true
							}
						}
					}
				},
				{quoted: bal})
                  iqbl.relayWAMessage(res)
                  limitAdd(sender, limit)
                  break
case 'viewonce':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
res = await iqbl.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": Mthumb,
"viewOnce": true
}
}
}
}, {}) 
iqbl.relayWAMessage(res)
limitAdd(sender, limit)
break
case 'spamsw':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					iqbl.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	

case 'getcaption':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
try {
reply(`${bal.quoted.title}`)
} catch {
reply(`${bal.quoted.caption}`)
}
limitAdd(sender, limit)
break
case 'presence':
freply(`Recording : ${autovn ? 'OFF' : 'ON'}\nComposing : ${autongetik ? 'OFF' : 'ON'}`)
break
case 'listsett':
freply(`Recording : ${autovn ? 'OFF' : 'ON'}\nComposing : ${autongetik ? 'OFF' : 'ON'}\nAntiViewOnce : ${antivo ? 'OFF' : 'ON'}\nAntiDelete : ${antidel ? 'ON' : 'OFF'}\nBanChats : ${banChats ? 'SELF' : 'PUBLIC'}\nStatus : ${offline ? 'OFF' : 'ON'}\nAutoRespon : ${autorespon ? 'OFF' : 'ON'}`)
break
case 'tictactoe':
case 'ttt':
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (bal.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!bal.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}deletesesi-ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *Memulai Game Tictactoe* 」\n\n•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe \n[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan\n\n_Game tictactoe`
iqbl.sendMessage(from, starGame, text, {quoted: bal, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
gameAdd(sender, glimit)
break
case 'delsesi':
if (!isGroup) return reply(mess.only.group)
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply('Berhasil Menghapus Sesi Ttt')
} else {
reply('Tidak ada sesi yang berlangsung')
}
} else {
reply('Pilih')
}
break
case 'dota':
           ct = body.slice(6)
				dap1 = ct.split("/")[0];
                dap2 = ct.split("/")[1];
          buffer = await getBuffer(`https://dhnjing.xyz/maker/photooxy/dota?character=${dap1}&text=${dap2}`)
           iqbl.sendMessage(from, buffer, image, {quoted: bal})
break
case 'cekhistory':
if (!isGroup) return reply(mess.only.group)
reply(`\`\`\`「 Status Tictactoe 」\`\`\`\n•> Win : ${checkWin(sender)}\n•> Lose : ${checkLose(sender)}`)
break
case 'neko':
case 'waifu':
case 'megumin':
case 'shinobu':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
anu = await fetchJson(`https://waifu.pics/api/sfw/${command}`)
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(anu.url))
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: '➡️ ️𝑵𝒆𝒙𝒕'},type:1},{buttonId: '❌ Stop',buttonText:{displayText: '❌ 𝑺𝒕𝒐𝒑'},type:1}]
              imageMsg = ( await iqbl.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Created By ©SANZ`', imageMessage: imageMsg,
              contentText:`Hai ${pushname} Silahkan Pilih`,buttons,headerType:4}
              prep = await iqbl.prepareMessageFromContent(from,{buttonsMessage},{quoted: bal, contextInfo:{"externalAdReply": {"title": `Nih Kak ${pushname} Silahkan Filih`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
              iqbl.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              limitAdd(sender, limit)
              break
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: '➡️ ️𝑵𝒆𝒙𝒕'},type:1},{buttonId: '❌ Stop',buttonText:{displayText: '❌ 𝑺𝒕𝒐𝒑'},type:1}]
              imageMsg = ( await iqbl.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Created By ©SANZ`', imageMessage: imageMsg,
              contentText:`Hai ${pushname} Silahkan Pilih`,buttons,headerType:4}
              prep = await iqbl.prepareMessageFromContent(from,{buttonsMessage},{quoted: bal, contextInfo:{"externalAdReply": {"title": `Nih Kak ${pushname} Silahkan Filih`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
              iqbl.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              limitAdd(sender, limit)
              break


/*case 'nsfwneko': 
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(anu.url))
		            buttons = [{buttonId: '➡️ 𝑵𝒆𝒙𝒕 𝑵𝒆𝒌𝒐',buttonText:{displayText: '➡️ 𝑵𝒆𝒙𝒕 𝑵𝒆𝒌𝒐'},type:1},{buttonId: '❌ 𝑺𝒕𝒐𝒑',buttonText:{displayText: '❌ 𝑺𝒕𝒐𝒑'},type:1}]
                    imageMsg = ( await iqbl.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
                    buttonsMessage = {footerText:'Created By ©SANZ`', imageMessage: imageMsg,
                    contentText:`Hai ${pushname} Silahkan Pilih`,buttons,headerType:4}
                    prep = await iqbl.prepareMessageFromContent(from,{buttonsMessage},{quoted: bal, contextInfo:{"externalAdReply": {"title": `Nih Kak ${pushname} Neko Nya`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
                    iqbl.relayWAMessage(prep)
                    fs.unlinkSync(`./${sender}.jpeg`)
					break*/
case 'blowjob':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(anu.url))
		            buttons = [{buttonId: `${prefix}blowjob`,buttonText:{displayText: '➡️ 𝑵𝒆𝒙𝒕'},type:1},{buttonId: '❌ Stop',buttonText:{displayText: '❌ Stop'},type:1}]
                    imageMsg = ( await iqbl.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
                    buttonsMessage = {footerText:'Created By ©SANZ`', imageMessage: imageMsg,
                    contentText:`Hai ${pushname} Silahkan Pilih`,buttons,headerType:4}
                    prep = await iqbl.prepareMessageFromContent(from,{buttonsMessage},{quoted: bal, contextInfo:{"externalAdReply": {"title": `Nih Kak ${pushname}`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
                    iqbl.relayWAMessage(prep)
                    fs.unlinkSync(`./${sender}.jpeg`)
                    limitAdd(sender, limit)
					break

case 'nsfwloli':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${lolkey}`)	
		            buttons = [{buttonId: `${prefix+command}`,buttonText:{displayText: '➡️ 𝑵𝒆𝒙𝒕'},type:1},{buttonId: '❌ 𝑺𝒕𝒐𝒑',buttonText:{displayText: '❌ 𝑺𝒕𝒐𝒑'},type:1}]
                    imageMsg = ( await iqbl.prepareMessage(from, anu, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
                    buttonsMessage = {footerText:'Created By ©SANZ`', imageMessage: imageMsg,
                    contentText:`Hai ${pushname} Silahkan Pilih`,buttons,headerType:4}
                    prep = await iqbl.prepareMessageFromContent(from,{buttonsMessage},{quoted: bal, contextInfo:{"externalAdReply": {"title": `Nih Kak ${pushname}`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
                    iqbl.relayWAMessage(prep)         
                    limitAdd(sender, limit)           
					break
case 'nsfwyuri':
case 'nsfwlesbian':
case 'nsfwneko':
case 'nsfwavatar':
case 'nsfwtits':
case 'nsfwketa':
case 'nsfweroyuri':
case 'nsfweroneko':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                    anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/nsfw/${command}?apikey=${dappakey}`)	
		            buttons = [{buttonId: `${prefix+command}`,buttonText:{displayText: '➡️ 𝑵𝒆𝒙𝒕'},type:1},{buttonId: '❌ 𝑺𝒕𝒐𝒑',buttonText:{displayText: '❌ 𝑺𝒕𝒐𝒑'},type:1}]
                    imageMsg = ( await iqbl.prepareMessage(from, anu, 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
                    buttonsMessage = {footerText:'Created By ©SANZ`', imageMessage: imageMsg,
                    contentText:`Hai ${pushname} Silahkan Pilih`,buttons,headerType:4}
                    prep = await iqbl.prepareMessageFromContent(from,{buttonsMessage},{quoted: bal, contextInfo:{"externalAdReply": {"title": `Nih Kak ${pushname}`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
                    iqbl.relayWAMessage(prep)       
                    limitAdd(sender, limit)             
					break

case 'antidelete':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return freply('Pilih on atau off')
if (args[0] === "on") {
if (antidel === true) return
antidel = true
freply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
freply(`Succes mematikan antidelete`)
} else {
freply(`Pilih on atau off`)
}
break
/*case 'welcome':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return freply('Pilih on atau off')
if (args[0] === "on") {
if (welkom === true) return
welkom = true
freply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if (welkom === false) return
welkom = false
freply(`Succes mematikan antidelete`)
} else {
freply(`Pilih on atau off`)
}
break*/
case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = iqbl.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
case 'rptag':
if (bal.message.extendedTextMessage === undefined || bal.message.extendedTextMessage === null) return reply("Gada yang di tag")
mentioned = bal.message.extendedTextMessage.contextInfo.mentionedJid
teks = `*Repeat Tag*\n${q}`
teks += "\n\n"
members_id = []
for (let z = 0; z < 2000; z++) {
teks += ` @${mentioned[0].split("@")[0]}`
members_id.push(mentioned[0])
}
mentions(teks, members_id, true)
break
case 'searchmsg':
case 'searchmessage':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
 xtext = args.join(' ')
                cond = xtext.split(" ")
                 a = await iqbl.searchMessages(xtext, from, 10, 1)// count 10 
                 fox = '*「 Message Search 」*\n\n'
                num = 0
                for (j of a.messages){
                    num += 1
                    if (j.message.conversation) {
                        if (j.key.fromMe){ 
                            fox += num+'. Sender: '+iqbl.user.jid+'\n    Msg: '+j.message.conversation+'\n    MsgID: '+j.key.id+'\n    Type: conversation\n\n'
                        }else{
                            fox += num+'. Sender: '+j.key.participant+'\n    Msg: '+j.message.conversation+'\n    MsgID: '+j.key.id+'\n    Type: conversation\n\n'
                        } 
                    }
                    else if (j.message.extendedTextMessage){
                        if (j.key.fromMe){ 
                            fox += num+'. Sender: '+iqbl.user.jid+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    MsgID: '+j.key.id+'\n    Type: extendedTextMessage\n\n'
                        }else{
                            fox += num+'. Sender: '+j.key.participant+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    MsgID: '+j.key.id+'\n    Type: extendedTextMessage\n\n'
                        } 
                    }
                }
                reply(fox)
                break
case 'addrespon':{
          if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      case 'dellrespon':
      case 'delrespon':{
          if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          }
      break
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          reply(txt)
          }
        break
case 'bc':
			   case 'bcimage':
			   if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
			   if (args.length < 1) return reply('```TEXT?```')
			   hy = args.join(' ')       
				anu = await iqbl.chats.all()
				if (isMedia && !bal.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo : bal
				bc = await iqbl.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				sendButLocation(_.jid, hy, `[ *BROADCAST* ]`, {jpegThumbnail:bc}, [{buttonId:`y`,buttonText:{displayText:'OKH'},type:1},{buttonId:`Y`,buttonText:{displayText:'GAJE ASU'},type:1}], {contextInfo: { mentionedJid: [sender]}})
		        }
				reply('```SUKSESS BROADCAST```')
				} else {
				for (let _ of anu) {
				sendButMessage(_.jid, hy, `[ *BROADCAST* ]`, [{buttonId: `Y`,buttonText: {displayText: `OKH`,},type: 1,},{buttonId: `Y`,buttonText: {displayText: `GAJE ASU`,},type: 1,},]);}
				reply('```SUKSESS BROADCAST```')
				}
				break
case 'autoread':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readG === true) return
readG = true
freply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readG === false) return
readG = false
freply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readP === true) return
readP = true
freply(`Succes mengaktifkan autoread pribadi`)
} else if (args[1] === "off") {
if (readP === false) return
readP = false
freply(`Succes mematikan autoread pribadi`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break   
case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
reply(`${bal.quoted.isBaileys}`)
break
case 'autorespon':
      if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
       if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
           if (q === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (q === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else {
                    reply(mess.error.api)
                }
                break
case 'antiviewonce':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
       if (args.length < 1) return reply(`Penggunaan ${prefix}antiviewonce on/off`)
           if (q === 'on'){
              antivo = false
                    reply(`Berhasil mengaktifkan antiviewonce`)
                } else if (q === 'off'){
                    antivo = true
                    reply(`Berhasil menonaktifkan antiviewonce`)
                } else {
                    reply(mess.error.api)
                }
                break
/* case "welcome":         
        if (!isGroup) return reply(mess.only.group) 
        if (args[0] == "on") {
          if (isWelkom) return reply("Sudah aktif!!");
          welkom.push(from);
          fs.writeFileSync(
            "./database/welkom.json",
            JSON.stringify(welkom)
          );
          reply("Sukses mengaktifkan WELCOME!");
        } else if (args[0] == "off") {
          welkom.splice(from, 1);
          fs.writeFileSync(
            "./database/welkom.json",
            JSON.stringify(welkom)
          );
          reply("Sukses mematikan WELCOME!");
        } else if (!q) {
          sendButMessage(from, `MODE WELCOME`, `Hay @${sender.split("@")[0]} Silahkan pilih salah satu`, [{buttonId: `${prefix+command} on`,buttonText: {displayText: `on`,},type: 1,},{buttonId: `${prefix+command} off`,buttonText: {displayText: `off`,},type: 1,},]),{contextInfo: { mentionedJid: [sender, `${owner}@s.whatsapp.net`]}}
}
        break; */
  case "antilink":         
  if (!isGroup) return reply(mess.only.group)
        if (!isBotGroupAdmins) return reply(mess.only.badmin)
        if (!isGroupAdmins && !bal.key.fromMe) return reply(mess.only.admin)    
        if (args[0] == "on") {
          if (isAntiLink) return reply("Sudah aktif!!")
          antilink.push(from)
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1)
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!")
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Hay @${sender.split("@")[0]} Silahkan pilih salah satu`, [{buttonId: `${prefix+command} on`,buttonText: {displayText: `on`,},type: 1,},{buttonId: `${prefix+command} off`,buttonText: {displayText: `off`,},type: 1,},]),{contextInfo: { mentionedJid: [sender, `${owner}@s.whatsapp.net`]}}
}
break; 
        
case 'autovn':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
       if (args.length < 1) return reply(`Penggunaan ${prefix}autovn on/off`)
           if (q === 'on'){
              autovn = false
                    reply(`Berhasil mengaktifkan autovn`)
                } else if (q === 'off'){
                    autovn = true
                    reply(`Berhasil menonaktifkan autovn`)
                } else {
                    reply(mess.error.api)
                }
                break
case 'autongetik':
if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
       if (args.length < 1) return reply(`Penggunaan ${prefix}autongetik on/off`)
           if (q === 'on'){
              autongetik = false
                    reply(`Berhasil mengaktifkan autongetik`)
                } else if (q === 'off'){
                    autongetik = true
                    reply(`Berhasil menonaktifkan autongetik`)
                } else {
                    reply(mess.error.api)
                }
                break
case 'culik':
              if (!isOwner && !bal.key.fromMe) return reply(mess.only.owner)
              if (args.length < 1) return reply('Masukin id grupnya')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
              }
              iqbl.groupAdd(args[0], pantek)
              break

case 'sizevn':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply('Masukan angkanya')
siz = args[0]
costick4 = await iqbl.prepareMessageFromContent(from,{
"audioMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": siz,
	"seconds": m.quoted.seconds,
	"ptt": m.quoted.ptt,
	"mediaKey": m.quoted.mediaKey.low,
	"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
}
}, {quoted:bal})
iqbl.relayWAMessage(costick4)
limitAdd(sender, limit)
break
case 'stickmeme':							
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply(`Example :Reply sticker dengan Caption  ${prefix + command} TEST` )
if (bal.message.extendedTextMessage != undefined || bal.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await iqbl.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/stickermeme?url=${teks}&teks=${q}`, bal)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break
case 'stickmeme2':					
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)				
if(!q) return reply(`Example : Reply sticker dengan Caption ${prefix + command} TEST`)
if (bal.message.extendedTextMessage != undefined || bal.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await iqbl.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${teks}`, bal)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break
case 'stickmeme3':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (!isQuotedSticker) return reply(`Format salah! Reply sticker\nContoh ${prefix + command} text|text`)
var tex1 = body.slice(12).split('|')[0]
var tex2 = body.slice(12).split('|')[1]
if (!tex2) return reply(`Format salah! Reply sticker\nContoh ${prefix + command} text|text`)
if (bal.message.extendedTextMessage != undefined || bal.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(bal).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(mess.wait)
owgi = await iqbl.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`, bal)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break
case 'mediafire':
if (!isPremium) return reply(mess.only.prem)
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `Media Fire Downloader
_*Tunggu Proses Mengirim Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: bal})
break 
case 'tinyurl':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
limitAdd(sender, limit)
break
case 'herolist':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
limitAdd(sender, limit)
break
case 'herodetail':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
limitAdd(sender, limit)
break
				case 'google':
case 'googlesearch':
case 'ggs':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
limitAdd(sender, limit)
break
case 'wiki':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: bal, caption: result}).catch(e => {
  reply(result)
})
limitAdd(sender, limit)
break
case "rules":
	xixi = `*RULES*:\n${g}⬥DILARANG SPAM/VC${g}\n⬥DILARANG MEMAKAI SEENAKNYA${g}\n⬥BOLEH CULIK BOT ASAL PATUHI RULES\n⬥LIMIT AKAN DIRESET SETIAP 00:00\n⬥JIKA LIMIT KALIAN HABIS, HUBUNGI OWNER UNTUK MENDAPATKAN 10LIMIT\nATAU ${prefix}buylimit UNTUK MEMBELI LIMIT${g}\n*SIMPEL YANG PENTING PATUHI 😌*`
	button = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK MENU'}, type: 1},
  {buttonId: '📄 SCRIPT BOT', buttonText: {displayText: '📄 SCRIPT BASE'}, type: 1},
]
 buttons = {
    contentText: `${xixi}`,
    footerText: `${fake}`,
    buttons: button,
    headerType: 1
}
await iqbl.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: bal})
break
	break
case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = iqbl.contacts[i] != undefined ? iqbl.contacts[i].vname || iqbl.contacts[i].notify : undefined
inilist.push({
"displayName": '©SANZ',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${iqbl.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await iqbl.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: bal })
button = [
  {buttonId: '📒 SEWA BOT', buttonText: {displayText: '📒 SEWA BOT'}, type: 1},
  {buttonId: '📄 SCRIPT BOT', buttonText: {displayText: '📄 SCRIPT BOT'}, type: 1},
]
 buttons = {
    contentText: 'Nih Kak Owner ku ><',
    footerText: `Created By ©SANZ`,
    buttons: button,
    headerType: 1
}
await iqbl.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: hehe})
break

case 'tag':
noes = `${args[0]}@s.whatsapp.net`
beks = `@${noes.split("@")[0]}`
iqbl.sendMessage(from, beks, text, {quoted:bal, contextInfo:{mentionedJid:[noes]}})                
break
default:
if (button == '👤 CONTACT OWNER') {
console.log('Melihat Contacts Owner')
let inilist = []
for (let i of ownerNumber) {
const vname = iqbl.contacts[i] != undefined ? iqbl.contacts[i].vname || iqbl.contacts[i].notify : undefined
inilist.push({
"displayName": '©SANZ',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${iqbl.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await iqbl.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: bal })
button = [
  {buttonId: '📒 SEWA BOT', buttonText: {displayText: '📒 SEWA BOT'}, type: 1},
  {buttonId: '📄 SCRIPT BOT', buttonText: {displayText: '📄 SCRIPT BOT'}, type: 1},
]
 buttons = {
    contentText: 'Nih Kak Owner ku ><',
    footerText: `Created By ©SANZ`,
    buttons: button,
    headerType: 1
}
await iqbl.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: hehe})
}
if (button == '📒 MENU BOT') {
console.log(bgcolor(`Command ${prefix+command} Dari`, 'cyan'), color(`${pushname}`))
const timestamppp = speed();
const latensiii = speed() - timestamppp
const totalgroupp = await iqbl.chats.array.filter(v => v.jid.endsWith('g.us'))
const totalkontakk = await iqbl.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchatt = await iqbl.chats.all()
gambar = fs.readFileSync('./stik/thumb.jpeg')
fakee = fs.readFileSync('./stik/fake.jpeg')
   try {
				             pporang = await iqbl.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
				} catch {
					          pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				yoke = await getBuffer(pporang) 
bals = `${ucapanWaktu} @${sender.split("@")[0]}

🔖 _Creator_ : @${owner.split("@")[0]}
🔖 _Hit Today_ : ${hit_today.length} 𝑯𝒊𝒕
🔖 _Lib_ : 𝑩𝒂𝒊𝒍𝒆𝒚𝒔
🔖 _Type_ : 𝑵𝒐𝒅𝒆𝑱𝒔
🔖 _Prefix_ : 「 𝑴𝒖𝒍𝒕𝒊𝑷𝒓𝒆𝒇𝒊𝒙 」
🔖 _Mode_ : ${banChats ? '𝑺𝑬𝑳𝑭' : '𝑷𝑼𝑩𝑳𝑰𝑪'}
🔖 _Status_ : ${offline ? '𝑶𝑭𝑭𝑳𝑰𝑵𝑬' : '𝑶𝑵𝑳𝑰𝑵𝑬'}
🔖 _User_ : ${premi}
🔖 _Group Chats_ : ${totalgroupp.length}
🔖 _Private Chats_ : ${totalkontakk.length}
🔖 _Total Chats_ : ${totalchatt.length}
🔖 _Speed_ : ${latensiii.toFixed(4)} 𝑺𝒆𝒄𝒐𝒏𝒅𝒔

*</INFO TIME>*
🔖 _${wib}_ 𝙒𝙄𝘽
🔖 _${wita}_ 𝙒𝙄𝙏𝘼
🔖 _${wit}_ 𝙒𝙄𝙏

*</OWNER>*
🌹 _${prefix}Off_
🌹 _${prefix}On_
🌹 _${prefix}Self_
🌹 _${prefix}Public_
🌹 _${prefix}Sewa_
🌹 _${prefix}Addprem_
🌹 _${prefix}Delprem_
🌹 _${prefix}Get_
🌹 _${prefix}Culik_ <id>
🌹 _${prefix}Term_ <code>
🌹 _${prefix}Antidelete_
🌹 _${prefix}Baileys_
🌹 _${prefix}Autoread_
🌹 _${prefix}Autorespon_
🌹 _${prefix}Autovn_
🌹 _${prefix}Autongetik_
🌹 _${prefix}Antiviewonce_
🌹 _${prefix}Addrespon_
🌹 _${prefix}Dellrespon_
🌹 _${prefix}Setthumb_
🌹 _${prefix}Settarget_
🌹 _${prefix}Setfakeimg_
🌹 _${prefix}Setreply_
🌹 _${prefix}Searchmsg_
🌹 _${prefix}Spamsw_

*</MAKER>*
🌹 _${prefix}Sticker_
🌹 _${prefix}Swm_ <author|packname>
🌹 _${prefix}Take_ <author|packname>
🌹 _${prefix}Fdeface_
🌹 _${prefix}Emoji_
🌹 _${prefix}Stickmeme_
🌹 _${prefix}Stickmeme2_
🌹 _${prefix}Stickmeme3_
🌹 _${prefix}Sizestick_

*</ANIME>*
🌹 _${prefix}Loli_
🌹 _${prefix}Cosplay_
🌹 _${prefix}Husbu_
🌹 _${prefix}Wallml_
🌹 _${prefix}Waifu_
🌹 _${prefix}Shinobu_
🌹 _${prefix}Megumin_
🌹 _${prefix}Neko_
🌹 _${prefix}Nsfwneko_ <18+>
🌹 _${prefix}Milf_ <18+>
🌹 _${prefix}Blowjob_ <18+>

*</CONVERT>*
🌹 _${prefix}Toimg_
🌹 _${prefix}Tomp3_
🌹 _${prefix}Tomp4_
🌹 _${prefix}Slow_
🌹 _${prefix}Fast_
🌹 _${prefix}Reverse_
🌹 _${prefix}Tourl_

*</UP STORY>*
🌹 _${prefix}Upswteks_
🌹 _${prefix}Upswimage_
🌹 _${prefix}Upswvideo_

*</FUN>*
🌹 _${prefix}Fitnah_
🌹 _${prefix}Fitnahpc_
🌹 _${prefix}Kontak_
🌹 _${prefix}Setcmd_
🌹 _${prefix}Delcmd_
🌹 _${prefix}Listcmd_
🌹 _${prefix}Once_
🌹 _${prefix}Oncevid_
🌹 _${prefix}Tebakgambar_
🌹 _${prefix}Listprem_
🌹 _${prefix}Viewonce_
🌹 _${prefix}Ttt_
🌹 _${prefix}Size_
🌹 _${prefix}Sizevn_

*</TAG>*
🌹 _${prefix}Hidetag_
🌹 _${prefix}Kontag_
🌹 _${prefix}Sticktag_
🌹 _${prefix}Rptag_
🌹 _${prefix}Totag_
🌹 _${prefix}Tag_

*</GROUP>*
🌹 _${prefix}Promote_
🌹 _${prefix}Demote_
🌹 _${prefix}Group_
🌹 _${prefix}Leave_<id>
🌹 _${prefix}Caripesan_ <query>
🌹 _${prefix}Getcaption_
🌹 _${prefix}Voting_
🌹 _${prefix}Antilink_
🌹 _${prefix}Delvote_
🌹 _${prefix}Kick_
🌹 _${prefix}add_
🌹 _Vote_
🌹 _Devote_

*</DOWNLOAD>*
🌹 _${prefix}Ytsearch_ <query>
🌹 _${prefix}Ytsdl_ <query>
🌹 _${prefix}Ytdl_ <link/query>
🌹 _${prefix}Igstalk_ <query>
🌹 _${prefix}Play_ <query>
🌹 _${prefix}Play2_ <query>
🌹 _${prefix}Video_ <query>
🌹 _${prefix}Ytmp3_ <link>
🌹 _${prefix}Ytmp4_ <link>
🌹 _${prefix}Nhsearch_ <query>
🌹 _${prefix}Nhdl_ <code>
🌹 _${prefix}Ig_ <link>
🌹 _${prefix}Igdl_ <link>
🌹 _${prefix}Igstory_ <username>
🌹 _${prefix}Twitter_ <link>
🌹 _${prefix}Tiktokdl_ <link>
🌹 _${prefix}Tiktoknowm_ <link>
🌹 _${prefix}Ttmp3_ <link>
🌹 _${prefix}Ttmp4_ <link>
🌹 _${prefix}Tinyurl_ <link>
🌹 _${prefix}Fb_ <link>
🌹 _${prefix}Brainly_ <query>
🌹 _${prefix}Image_ <query>
🌹 _${prefix}Anime_ <random>
🌹 _${prefix}Pinterest_ <query>
🌹 _${prefix}Pinterest2_ <query>
🌹 _${prefix}Wiki_ <query>
🌹 _${prefix}Google_ <query>
🌹 _${prefix}Komiku_ <query>
🌹 _${prefix}Mediafire_ <link>
🌹 _${prefix}Lirik_ <query>
🌹 _${prefix}Lirik2_ <query>
🌹 _${prefix}Chara_ <query>
🌹 _${prefix}Playstore_ <query>
🌹 _${prefix}Otaku_ <query>
🌹 _${prefix}Herodetail_ <query>
🌹 _${prefix}Herolist_

*</OTHER>*
🌹 _${prefix}Status_
🌹 _${prefix}Presence_
🌹 _${prefix}Ping_
🌹 _${prefix}Inspect_
🌹 _${prefix}Join_
🌹 _${prefix}Ceksewa_Op
🌹 _${prefix}Listsewa_
🌹 _${prefix}Listrespon_
🌹 _${prefix}Jadibot_
🌹 _${prefix}Listbot_
🌹 _${prefix}Stopjadibot_
🌹 Menu [List Menu]`
iqbl.sendMessage(from, gambar, image, {quoted: ftroli, caption: bals, thumbnail: fakee, sendEphemeral: true, contextInfo:{text: 'HelloWorld',"forwardingScore":999,"isForwarded":true, "mentionedJid": [sender],"externalAdReply": {"title": `Hallo kak ${pushname}`,"body": `${ucapanWaktu}`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/6b0259fd741e108910fbe.jpg`,"thumbnail": Mthumb}}})
}
if (button == '📄 SCRIPT BOT') {
console.log('Melihat Script Bot')
iqbl.sendMessage(from, `Bot ini menggunakan sc : https://github.com/Hexagonz/SELF-HX`, text, {quoted: bal})
}
if (button == '➡️ 𝑵𝒆𝒙𝒕 𝑵𝒆𝒌𝒐') {
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(anu.url))
buttons = [{buttonId: '➡️ 𝑵𝒆𝒙𝒕 𝑵𝒆𝒌𝒐',buttonText:{displayText: '➡️ 𝑵𝒆𝒙𝒕 𝑵𝒆𝒌𝒐'},type:1},{buttonId: '❌ 𝑺𝒕𝒐𝒑',buttonText:{displayText: '❌ 𝑺𝒕𝒐𝒑'},type:1}]
imageMsg = ( await iqbl.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Created By ©SANZ`', imageMessage: imageMsg,
contentText:`Hai ${pushname} Silahkan Pilih`,buttons,headerType:4}
prep = await iqbl.prepareMessageFromContent(from,{buttonsMessage},{quoted: bal, contextInfo:{"externalAdReply": {"title": `Nih Kak ${pushname} Neko Nya`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
iqbl.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
}
if (budy.startsWith('$')){
if (!bal.key.fromMe) return reply('lu siapa?')
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`SELF-BOT:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('_>/<')){
if (!bal.key.fromMe && !isOwner) return
if (!isBotGroupAdmins) return
if (!isGroup) return
anu = fs.readFileSync('media/hac.jpeg')
iqbl.updateProfilePicture(from, anu)
iqbl.groupUpdateSubject(from, `Hacked by Sanz`)
iqbl.groupUpdateDescription(from, `Mampos Gw Kudet`)
iqbl.groupSettingChange(from, GroupSettingChange.messageSend, true)
setTimeout(() => {
fakegroup('Mwuehehe kena hack kacian')
}, 8000)
}
if (budy.startsWith('Menu')){
let bitch = iqbl.prepareMessageFromContent(from, {
					"listMessage":{
                  "title": `\`\`\`Hi ${pushname}👋🏻\`\`\``,
                  "description": `\`\`\`Use The Bot As Best You Can And Dont Misuse The Bot Feature\`\`\``,
                  "buttonText": "LIST MENU",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                      "title": `${ucapanWaktu} ${pushname}`,
                        "rows": [
                          {
                              "title": "Public",
                              "rowId": "publicbals"
                           },
                           {
                              "title": "Self",
                              "rowId": "selfbals"
                           },
                           {
                              "title": "Status",
                              "rowId": "statusbals"
                           },
                           {
                              "title": "Speed",
                              "rowId": "speedbals"
                           },
                           {
                              "title": "Runtime",
                              "rowId": "runtimebals"
                           },
                           {
                              "title": "Sc",
                              "rowId": "scbals"
                           }
                        ]
                     }]}}, {}) 
            iqbl.relayWAMessage(bitch)
            }
            if (budy.startsWith('<')){
		if(!bal.key.fromMe) return
	console.log('[', color('EVAL', 'silver'),']', color(moment(bal.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}
if (budy.startsWith('>')){
if (!bal.key.fromMe) return reply('lu siapa?')
var konsol = budy.slice(2)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 1)
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
	if (isGroup && budy != undefined) {
	} else {
	console.log(bgcolor(`Command ${prefix+command} Dari`, 'red'), color(`${pushname}`))
	}		
if (isGroup && budy != undefined) {
	} else {
	console.log(bgcolor(`Pesan Chats Dari`, 'green'), `${fake} ${ucapanWaktu}`, color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
	iqbl.sendMessage(`6282376222531@s.whatsapp.net`, `\`\`\`Ada Yang Error!\`\`\`\n────────────────────\n*${e}*`, MessageType.extendedText, {contextInfo: { forwardingScore: 508, isForwarded: true, "externalAdReply": {"title": `Ada Yang Error!`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/6b0259fd741e108910fbe.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/5odMRQDrhoI`}}})
        }
	// console.log(e)
	}
}


	
    
