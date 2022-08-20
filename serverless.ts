import 'zone.js/dist/zone-node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as compression from 'compression';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

import { AppServerModule } from './src/main.server';

export const app = express();
app.use(compression());
const distFolder = join(process.cwd(), 'dist/angularSeo/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html'))
  ? 'index.original.html'
  : 'index';
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModule,
  })
);

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)

app.set('view engine', 'html');
app.set('views', distFolder);
// Example Express Rest API endpoints
// server.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get(
  '*.*',
  express.static(distFolder, {
    maxAge: '1y',
  })
);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(indexHtml, {
    req,
    providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
  });
});

export * from './src/main.server';
