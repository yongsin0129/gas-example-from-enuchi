export function getAllTasks () {
  const tasks = SpreadsheetApp.getActive().getSheetByName('sheet1').getDataRange().getValues()

  // change array to object
  const keys = tasks[0]
  const result = []

  tasks.slice(1).forEach(arr => {
    const obj = {}

    keys.forEach((key, index) => {
      obj[key] = arr[index]
    })

    result.push(obj)
  })

  return result
}

export function updateTask (taskId, completed) {
  const sheet = SpreadsheetApp.getActive().getSheetByName('sheet1')
  const taskRow = parseInt(taskId) + 1  // Google Sheets 的列數從 1 開始

  // 更新任務的完成狀態
  sheet.getRange(taskRow, 3).setValue(completed ? 'False' : 'True')

  return true

}

export function addTask (task) {
  const sheet = SpreadsheetApp.getActive().getSheetByName('sheet1')
  const lastRow = sheet.getLastRow()
  const newRow = lastRow + 1

  // 將任務新增到試算表中
  sheet.getRange(newRow, 2).setValue(task)
  sheet.getRange(newRow, 3).setValue('False')  // 預設未完成

  return true
}

export function deleteTask (taskId) {
  const sheet = SpreadsheetApp.getActive().getSheetByName('sheet1')
  const taskRow = parseInt(taskId) + 1  // Google Sheets 的列數從 1 開始

  // 刪除任務列
  sheet.deleteRow(taskRow)

  return true
}
