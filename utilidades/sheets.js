const sheets = require('@googleapis/sheets');

export default async function inicio() {
  const auth = new sheets.auth.GoogleAuth({
    keyFile: `./secretos/${process.env.SECRETOS}`,
    scopes: ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive'],
  });

  const authClient = await auth.getClient();
  client = sheets.sheets({
    version: 'v4',
    auth: authClient,
  });

  const res = await client.spreadsheets.get({
    spreadsheetId: '1nNwf-HMnyVPGcHnIXd86dD5uOcFBgSh4oNWo-IF_v3M',
    includeGridData: true,
  });

  return res;
}
