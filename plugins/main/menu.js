export default {
  name: "menu",
  category: "main",
  command: ["menu"],
  run: async (conn, m, { Func }) => {
    let grouped = {}
    for (let plugin of Object.values(plugins)) {
      if (!grouped[plugin.category]) grouped[plugin.category] = []
      grouped[plugin.category].push(plugin)
    }

    let time = new Date().toLocaleString("id-ID", {
        timeZone: 'Asia/Jakarta',
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
        })

    let header = `
━━━ 〔 ZENITH BOT 〕 ━━━

Status : Online
Aktif  : ${Func.runtime(process.uptime())}
Waktu  : ${time}
`

    let body = Object.entries(grouped).map(([category, items]) => {
      return (
        `\n▸ ${category.toUpperCase()}\n` +
        items.map(p => `  • ${m.prefix}${p.name}`).join("\n")
      )
    }).join("\n")

    let footer = `\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Kategori: ${Object.keys(grouped).length} | Total Fitur: ${Object.values(grouped).flat().length}`

    let menu = header + body + footer
    m.reply(menu)
  }
}