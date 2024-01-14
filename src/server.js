import fs from "node:fs/promises"
import http from "node:http"
import open from "open"

async function createServer(list) {
      return http.createServer(async (req, res) => {
            const HTML_PATH = new URL('../index.html', import.meta.url).pathname;
            const template = await fs.readFile(HTML_PATH, 'utf-8');

            function emoji(mood) {
                  if (mood == 'neutral') return '😐';
                  else if (mood == 'good') return '😀';
                  else return "😢";
            }

            function idConverter(id) {
                  const date = new Date(id);
                  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
            }

            const listHtml = list.map(item => `<li class='list-item'><h2 class='list-header'>${emoji(item.type)}</h2><p class='list-text'>${item.description}</p><p class='date'>${idConverter(item.id)}</p></li>`).join('');
            const html = template.replace('<!-- PLACEHOLDER -->', listHtml);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
      });
}

export async function startServer(list) {
      const server = await createServer(list);
      server.listen(2137, () => {
            console.log("Diary is waiting for you on: ", "\x1b[31mhttp://localhost:2137\x1b[0m");
      });
      open('http://localhost:2137');
}