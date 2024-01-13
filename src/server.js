import fs from "node:fs/promises"
import http from "node:http"
import open from "open"

function createServer(items) {
      return http.createServer((req, res) => {
            const HTML_PATH = new URL('../index.html', import.meta.url).pathname;
            const template = fs.readFile(HTML_PATH, 'utf-8');

            res.writeHead(200, { 'Content-Type': 'text/html' });
            // res.end(items);
      });
}

export function startServer(items) {
      const server = createServer(items);
      server.listen(2137, () => {
            console.log("Diary is waiting for you on: ", "\x1b[31mhttp://localhost:2137\x1b[0m");
      });
      open('http://localhost:2137');
}