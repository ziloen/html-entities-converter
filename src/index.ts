import { window, commands } from 'vscode'
import type { ExtensionContext } from 'vscode'
import { dict } from './dict'

export async function activate(context: ExtensionContext) {
  function escapeRegExp(str: string) {
    return str
      .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
      .replace(/-/g, '\\x2d')
  }

  const reg = new RegExp(`(?:${Object.keys(dict).map(escapeRegExp).join('|')})`, 'g')

  const reversedDict: Record<string, string> = Object.entries(dict).reduce(
    (prev, [key, val]) => (prev[val] = key, prev)
    , {} as Record<string, string>
  )

  const reverseReg = new RegExp(`(?:${Object.keys(reversedDict).map(escapeRegExp).join('|')})`, 'g')


  context.subscriptions.push(
    commands.registerCommand('converter.encode', () => {
      const editor = window.activeTextEditor
      if (!editor) return

      const selection = editor.selection
      const text = editor.document.getText(selection)
      if (!text) return


      editor.edit(textEditor => {
        textEditor.replace(
          selection,
          text.replaceAll(reg, match => dict[match])
        )
      })
    })
  )


  context.subscriptions.push(
    commands.registerCommand('converter.decode', function () {

      const editor = window.activeTextEditor
      if (!editor) return

      const selection = editor.selection
      const text = editor.document.getText(selection)
      if (!text) return

      editor.edit(textEditor => {
        textEditor.replace(
          selection,
          text.replaceAll(reverseReg, match => reversedDict[match])
        )
      })
    })
  )

}