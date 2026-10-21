/**
 * Mohegh newsletter → Google Sheet
 * 1. Create a Google Sheet. Extensions → Apps Script. Paste this file. Save.
 * 2. Deploy → New deployment → type "Web app" → Execute as: Me → Who has access: Anyone → Deploy.
 * 3. Copy the web-app URL into FORM_ENDPOINT in index.html and push.
 */
const HEADERS = ['time', 'name', 'contact', 'housing', 'concerns', 'level', 'skill'];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  const d = JSON.parse(e.postData.contents || '{}');
  sheet.appendRow(HEADERS.map(h => String(d[h] || '').slice(0, 300)));
  return ContentService.createTextOutput('ok');
}
