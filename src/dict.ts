import { workspace } from 'vscode'

const userConfig = workspace.getConfiguration('html-entities-converter').get('overrides') as Record<string, string>
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