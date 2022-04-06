'use strict'

import { window, commands } from 'vscode'
import type { ExtensionContext } from 'vscode'
import { dict } from './dict'


const reg = new RegExp('[' + Object.keys(dict).join('') + ']', 'g')

export function activate(context: ExtensionContext) {
  const disposeEncode = commands.registerCommand('converter.encode', async () => {
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

  context.subscriptions.push(disposeEncode)


  const disposeDecode = commands.registerCommand('extension.decode', function () {
    window.showInformationMessage('decode!')
  })

  context.subscriptions.push(disposeDecode)
}