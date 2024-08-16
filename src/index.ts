import { decode, encode } from "entities"
import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('converter.encode', () => {
      const editor = window.activeTextEditor
      if (!editor) return

      const selection = editor.selection
      const text = editor.document.getText(selection)
      if (!text) return


      editor.edit(textEditor => {
        textEditor.replace(selection, encode(text, 1))
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
        textEditor.replace(selection, decode(text, 1))
      })
    })
  )

}