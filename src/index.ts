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


  context.subscriptions.push(
    commands.registerCommand('converter.encode', async () => {
      window.showInformationMessage('decode!')
      const editor = window.activeTextEditor
      if (!editor)
        return

      console.log('converter.encode running!!');


      const selection = editor.selection
      const text = editor.document.getText(selection)
      if (!text)
        return


      editor.edit(textEditor => {
        textEditor.replace(
          selection,
          text.replaceAll(reg, (match) => dict[match])
        )
      })
    })
  )


  context.subscriptions.push(
    commands.registerCommand('extension.decode', function () {
      window.showInformationMessage('decode!')
    })
  )

}