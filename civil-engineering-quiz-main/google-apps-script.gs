/**
 * Civil Engineering Quiz tracking for Google Sheets.
 * Deploy as a Web App: Execute as Me; access: Anyone.
 * Each PlaySessions row represents one game start. A later signup updates
 * that same row, so unconverted attempts can be counted in the Dashboard.
 */
const PLAY_SHEET = 'PlaySessions';
const LEADS_SHEET = 'Leads';
const DASHBOARD_SHEET = 'Dashboard';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = (e && e.parameter) ? e.parameter : {};
    const event = String(p.event || 'signup').toLowerCase();
    const sessionId = String(p.sessionId || '').trim();
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) throw new Error('No spreadsheet is bound to this Apps Script project.');

    const playSheet = getSheet_(ss, PLAY_SHEET, ['Session ID', 'Started At', 'Status', 'Signed Up At', 'Category', 'Page URL']);
    const leadsSheet = getSheet_(ss, LEADS_SHEET, ['Submitted At', 'Session ID', 'Name', 'Phone', 'Email', 'Target Exam']);

    if (event === 'play') {
      if (sessionId && findSessionRow_(playSheet, sessionId) === -1) {
        playSheet.appendRow([sessionId, new Date(), 'Not signed up', '', p.category || 'All Topics', p.pageUrl || '']);
      }
    } else if (event === 'signup') {
      if (sessionId) {
        const row = findSessionRow_(playSheet, sessionId);
        if (row === -1) {
          playSheet.appendRow([sessionId, '', 'Signed up', new Date(), p.category || '', p.pageUrl || '']);
        } else {
          playSheet.getRange(row, 3).setValue('Signed up');
          playSheet.getRange(row, 4).setValue(new Date());
          if (p.pageUrl) playSheet.getRange(row, 6).setValue(p.pageUrl);
        }
      }
      // Store the lead separately, retaining the existing signup workflow.
      leadsSheet.appendRow([new Date(), sessionId, p.name || '', p.phone || '', p.email || '', p.targetExam || '']);
    }

    updateDashboard_(ss, playSheet);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    console.error(err);
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function getSheet_(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function findSessionRow_(sheet, sessionId) {
  if (!sessionId || sheet.getLastRow() < 2) return -1;
  const found = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1)
    .createTextFinder(sessionId).matchEntireCell(true).findNext();
  return found ? found.getRow() : -1;
}

function updateDashboard_(ss, playSheet) {
  let dashboard = ss.getSheetByName(DASHBOARD_SHEET);
  if (!dashboard) dashboard = ss.insertSheet(DASHBOARD_SHEET);
  const rows = Math.max(playSheet.getLastRow() - 1, 0);
  let totalPlays = 0;
  let signedUp = 0;
  if (rows > 0) {
    const values = playSheet.getRange(2, 1, rows, 3).getValues();
    totalPlays = values.filter(r => String(r[0] || '').trim() !== '').length;
    signedUp = values.filter(r => String(r[0] || '').trim() !== '' && String(r[2] || '') === 'Signed up').length;
  }
  const notSignedUp = Math.max(totalPlays - signedUp, 0);
  dashboard.clearContents();
  dashboard.getRange(1, 1, 1, 2).setValues([['Metric', 'Count']]);
  dashboard.getRange(2, 1, 4, 2).setValues([
    ['Total play attempts', totalPlays],
    ['Play sessions that signed up', signedUp],
    ['Played but did not sign up', notSignedUp],
    ['Signup conversion rate', totalPlays ? signedUp / totalPlays : 0]
  ]);
  dashboard.getRange(5, 2).setNumberFormat('0.0%');
  dashboard.setFrozenRows(1);
  dashboard.autoResizeColumns(1, 2);
}
