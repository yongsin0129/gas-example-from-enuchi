function getColumnIndex (columnName) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]

  // Find the column index of the "columnName"
  const columnIndex = headers.indexOf(columnName) + 1

  return columnIndex
}

export { getColumnIndex } 