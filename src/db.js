import fs from 'node:fs/promises'

const DATABASE_PATH = new URL('../database.json', import.meta.url).pathname;

export async function getDB() {
      const database = await fs.readFile(DATABASE_PATH, 'utf8');
      return JSON.parse(database);
}


export async function saveDB(database) {
      await fs.writeFile(DATABASE_PATH, JSON.stringify(database, null, 2));
      return database;
}


export async function insert(data) {
      const database = await getDB();
      database.mood.push(data);
      await saveDB(database);
      return data;
}