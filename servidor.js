const { createReadStream } = require('fs');
const Koa = require('koa');
const Router = require('@koa/router');
const dotenv = require('dotenv');
const sheets = require('@googleapis/sheets');

dotenv.config();

const app = new Koa();
const router = new Router();
let client;

if (process.env.NODE_ENV === 'development') {
  const cors = require('@koa/cors');
  console.log('..:: Activando CORS durante desarrollo ::..');
  app.use(cors());
}

async function iniciarSheets() {
  const auth = new sheets.auth.GoogleAuth({
    keyFile: `./secretos/${process.env.SECRETOS}`,
    scopes: ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive'],
  });

  const authClient = await auth.getClient();

  client = sheets.sheets({
    version: 'v4',
    auth: authClient,
  });
}

iniciarSheets().catch(console.error);

router.get('/', async (ctx) => {
  return {
    foo: 'bar',
  };
});

// Aquí buscamos en el API de Twitter desde Node y le enviamos la respuesta al explorador
router.get('/actualizar', async (ctx) => {
  const { conDatos } = ctx.request.query;

  const res = await client.spreadsheets.get({
    spreadsheetId: '1nNwf-HMnyVPGcHnIXd86dD5uOcFBgSh4oNWo-IF_v3M',
    includeGridData: true,
  });

  ctx.body = await res;
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => console.log('..:: Servidor corriendo en puerto 3000 ::..'));
