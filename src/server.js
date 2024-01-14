import fs from "node:fs/promises"
import http from "node:http"
import open from "open"

async function createServer() {
      return http.createServer(async (req, res) => {
            const HTML_PATH = new URL('../index.html', import.meta.url).pathname;
            const template = await fs.readFile(HTML_PATH, 'utf-8');

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(template);
      });
}

export async function startServer() {
      const server = await createServer();
      server.listen(2137, () => {
            console.log("Diary is waiting for you on: ", "\x1b[31mhttp://localhost:2137\x1b[0m");
      });
      open('http://localhost:2137');
}