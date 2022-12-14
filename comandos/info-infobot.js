import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let pp = './Menu2.jpg'
let old = performance.now()
let neww = performance.now()
let speed = neww - old

let info = `
β βγ ππππ πππ πππ γ β
β 
β β’ [π€΄π»] *CREADOR: ΰΌοΈπ³πΈπ΄πΆπΎ-πΎπ΅π²ΰΌοΈ*
β β’ [#οΈβ£] *NUMERO: +593 95 942 5714*
β β’ [π³] *PREFIJO: ${usedPrefix}*
β β’ [π] *CHATS PRIVADOS: ${chats.length - groups.length}*
β β’ [π¦] *CHAT DE GRUPOS: ${groups.length}* 
β β’ [π‘] *CHATS TOTALES: ${chats.length}* 
β β’ [π] *ACTIVIDAD: ${uptime}*
β β’ [π©] *USUARIOS: ${totalreg} πππππππ*
β β’ [βοΈ] *AUTOREAD:* ${autoread ? '*ππππππππ*' : '*πππππππππππ*'}
β β’ [β] *RESTRICT:* ${restrict ? '*ππππππππ*' : '*πππππππππππ*'} 
β β’ [π¬] *ANTIPRIVADO*: ${antiprivado ? '*ππππππππ*' : '*πππππππππππ*'}
β β’ [π΅] *ANTILLAMADA:* ${antiCall ? '*ππππππππ*' : '*πππππππππππ*'}
β β’ [π¬] *PCONLY*: ${pconly ? '*ππππππππ*' : '*πππππππππππ*'}
β β’ [π’] *GCONLY*: ${gconly ? '*ππππππππ*' : '*πππππππππππ*'}
β β’ [π] *MODO*: ${self ? '*πππππππ*' : '*πππππππ*'}
β β’ [π¨βπ¦―] *VELOCIDAD*: 
β   *${speed} ms* 
β 
β βγ πβπΊπβ―ππβ―π΅παͺ£π­β―πΉβ―πβ€ γ β
`.trim() 
conn.sendButton(m.chat, info, wm, pp, [
['π¦ ππππππ', '#grupos'],
['π‘οΈ ππππ', '.menu']
], m)

//conn.reply(m.chat, info, m)
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot|infodorrat|informaciΓ³ndorrat|informaciondorrats)$/i
export default handler
function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
