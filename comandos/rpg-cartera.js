import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let grupos = [md, yt]
let dorrat = [imagen1, imagen4]
let dos = [md]

let user = global.db.data.users[who]
let premium = user.premium
const cartera = {
    economia: {
    exp: true,
    limit: true,
    dorracoins: true,
  },
}
const recursos = Object.keys(cartera.economia).map(v => user[v] && `*${global.rpgshop.emoticon(v)} âĒ ${user[v]}*`).filter(v => v).join('\n').trim()
await conn.sendButton(m.chat, `ðïļ ðĢ ðĨ ð ð  ð ðĻ ð  âĒ ${premium ? 'â' : 'â'}\n${wm}`, `ð âĒ ${name}\n` + recursos + `\n\n*PARA VER MÃS RECURSOS VISITE EL INVENTARIO*`, imagen1, [
['ððĢðŦððĢðĐðð§ððĪ ð', '/inventario'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖâïļ', '/menu']], m, md)  
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
