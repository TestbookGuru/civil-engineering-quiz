# Google Sheets play and signup tracking setup

The app now sends a `play` event when the student presses Play and a `signup` event when the student submits the score-unlock form. The same session ID connects the two events.

## Important setup

The game already contains a Google Apps Script Web App URL in `src/App.tsx`. For the dashboard and session status to work, update the Apps Script project that is connected to the same Google Sheet:

1. Open the Google Sheet used for quiz signup tracking.
2. Choose **Extensions → Apps Script**.
3. Back up the existing script, then replace its code with `google-apps-script.gs` from this project.
4. Save the script.
5. Choose **Deploy → Manage deployments → Edit** (pencil icon), select **New version**, then deploy. If needed, authorize the script.
6. Keep the deployed Web App URL the same as the URL in `src/App.tsx`. If Google gives you a different URL, update `GOOGLE_SHEETS_WEB_APP_URL` in `src/App.tsx`.
7. Test one play without signing up and one play with signup.

The script creates these tabs if they do not already exist:

- **PlaySessions** — one row per play session, with status `Not signed up` or `Signed up`.
- **Leads** — submitted signup details.
- **Dashboard** — total play attempts, signed-up sessions, sessions without signup, and conversion rate.

The dashboard counts play sessions, not unique people. A student who starts three separate games creates three play sessions. Because the browser uses `no-cors` for Google Apps Script, the frontend cannot confirm the write; verify the test events in the spreadsheet before relying on the metrics.
