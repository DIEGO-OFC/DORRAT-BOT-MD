let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw '*[β] π·πΎπ»π° π²ππ΄π°π³πΎπ, π²πΎπΌπΎ π΄πππ°? ππππ΄π³ ππ° π΄π π°π³πΌπΈπ½ π³π΄ π΄πππ΄ πΆπππΏπΎ*'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('*[β] π΄πππΎπ, π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π³π°ππ»π΄ π°π³πΌπΈπ½*')}}
handler.command = /^autoadmin$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
