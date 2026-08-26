const NEED_PX = new Set([
  "width", "height", "minwidth", "maxwidth", "minheight", "maxheight",
  "margin", "margintop", "marginright", "marginbottom", "marginleft",
  "padding", "paddingtop", "paddingright", "paddingbottom", "paddingleft",
  "top", "right", "bottom", "left", "inset", "gap", "rowgap", "columngap",
  "fontsize", "borderwidth", "borderradius", "outlinewidth",
  "letterspacing", "wordspacing", "flexbasis",
])

export function cssObj(str) {
  const out = {}
  if (!str) return out
  for (const decl of str.split(";")) {
    const i = decl.indexOf(":")
    if (i < 0) continue
    const prop = decl.slice(0, i).trim().toLowerCase()
    let val = decl.slice(i + 1).trim()
    if (!prop) continue
    const camelProp = prop.startsWith("--") ? prop : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    if (/^-?\d+(\.\d+)?$/.test(val) && NEED_PX.has(prop.replace(/-/g, ""))) {
      val = val + "px"
    }
    out[camelProp] = val
  }
  return out
}
