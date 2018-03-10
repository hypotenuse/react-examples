
export let keyGenerate = () => String(Math.random()).split('.')[1]

export let node = (id) => document.getElementById(id)

export let interpolate = (string, replacement) => string.replace(/\{\{\s*(.+?)\s*\}\}/g, (match, cg1) => replacement[cg1] || match)