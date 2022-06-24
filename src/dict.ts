import { workspace } from 'vscode'

const userConfig = workspace.getConfiguration('html-entities-converter').get<Record<string, string>>('overrides')
export const dict: Record<string, string> = Object.assign({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&#39;',
  '`': '&#96;',
  ' ': '&nbsp;',
  '\t': '&nbsp;&nbsp;&nbsp;&nbsp;',
  '\n': '<br>',
  '|': '<broken />'
}, userConfig)