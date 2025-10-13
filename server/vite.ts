// server/vite.ts
import { createServer as createViteServer } from 'vite';
import { ViteDevServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function setupVite(app: any, server: any) {
  const vite = await createViteServer({
    server: { 
      middlewareMode: true,
      hmr: {
        clientPort: 24678,
      }
    },
    appType: 'custom'
  });

  app.use(vite.middlewares);
  
  // Handle all other requests with index.html
  app.use('*', async (req: any, res: any, next: any) => {
    const url = req.originalUrl;
    
    try {
      // 1. Read index.html from the client directory
      let template = fs.readFileSync(
        resolve(__dirname, '..', 'client', 'index.html'),
        'utf-8'
      );

      // 2. Apply Vite HTML transforms
      template = await vite.transformIndexHtml(url, template);

      // 3. Send the processed HTML
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      // If an error occurs, let Vite fix the stack trace
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  return vite;
}

export function serveStatic(app: any) {
  app.use(express.static('dist/client'));
}

export function log(message: string) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}