export function onOpen () {
  SpreadsheetApp.getUi()
    .createMenu('Todo List')
    .addItem('showModal_todoList', 'showModal_todoList')
    .addToUi()
}

export function showModal_todoList () {
  const ui = SpreadsheetApp.getUi()
  // const html = HtmlService.createHtmlOutputFromFile('index').setWidth(900).setHeight(600)
  // ui.showModalDialog(html,'React_todoList')

  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-bootstrap')
    .setWidth(600)
    .setHeight(600)
  SpreadsheetApp.getUi().showModelessDialog(html, 'React_todoList')
}