import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/navidad.json`)).data  
let dorrat = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_Navidad π§βπ_`, author, dorrat, [['π ππΈπΆππΈπ΄π½ππ΄ π', `${usedPrefix + command}`]], m)}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(navidad)$/i
export default handler
