'use strict'

import { window, commands } from 'vscode'
import type { ExtensionContext } from 'vscode'
import { dict } from './dict'




export function activate(context: ExtensionContext) {
  const reg = new RegExp('(?:' + Object.keys(dict).join('|') + ')', 'g')

  context.subscriptions.push(
    commands.registerCommand('converter.encode', async () => {
      const editor = window.activeTextEditor
      if (!editor)
        return

      const selection = editor.selection
      const text = editor.document.getText(selection)
      if (!text)
        return

      editor.edit(builder => {
        builder.replace(
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