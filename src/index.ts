import { window, commands } from 'vscode'
import type { ExtensionContext } from 'vscode'
import { dict } from './dict'


export async function activate(context: ExtensionContext) {
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


      editor.edit(textEditor => {
        textEditor.replace(
          selection,
          text.replaceAll(reg, (match) => dict[match])
        )
      })
    })
  )

  // context.subscriptions.push(commands.registerCommand('converter.test', async () => {
  //   // 获取配置文件
  //   if (!workspace.workspaceFolders) return
  //   const folderUri = workspace.workspaceFolders[0].uri
  //   const fileUri = folderUri.with({ path: posix.join(folderUri.path, 'test.toml') })
  //   const file = await workspace.fs.readFile(fileUri)
  //   if (!file.length) return
  //   const fileContent = TOML.parse(file)
  //   const fileConfig = Object.assign({
  //     fileName: 'test.json',
  //     key: 'VITE_BASE_URL',
  //     command: 'pnpm run dev',
  //     startTask: true
  //   }, fileContent.config)

  //   // 选择选择要使用的环境
  //   const options = fileContent.server as Record<string, string>
  //   const selectedEnvName = await window.showQuickPick<QuickPickItem>(Object.keys(options).map(val => ({
  //     label: val,
  //     description: options[val]
  //   })))
  //   if (!selectedEnvName) return

  //   // 读取已有环境变量文件
  //   const envFileUri = folderUri.with({ path: posix.join(folderUri.path, fileConfig.fileName) })
  //   const envFile = JSON.parse(Buffer.from(await workspace.fs.readFile(envFileUri)).toString('utf8'))

  //   // 修改并写入文件
  //   envFile[fileConfig.key] = options[selectedEnvName.label]
  //   workspace.fs.writeFile(envFileUri, Buffer.from(JSON.stringify(envFile, null, '  '), 'utf8'))

  //   // 读取 task ... 
  //   // 重启任务
  //   const terminal = window.createTerminal('converter')
  //   terminal.sendText(fileConfig.command)
  //   terminal.show()
  // }))

  // const statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, 100)
  // statusBarItem.text = '$(zap) converter'
  // statusBarItem.command = 'converter.test'
  // statusBarItem.show()


  context.subscriptions.push(
    commands.registerCommand('extension.decode', function () {
      window.showInformationMessage('decode!')
    })
  )

}