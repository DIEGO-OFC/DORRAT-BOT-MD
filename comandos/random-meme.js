import hispamemes from 'hispamemes'
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme()  
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme|memes)$/i
handler.limit = 3
export default handler
