import { insert, getDB, saveDB } from "./db.js";

export async function newMood(type, description) {
      const data = {
            id: Date.now(),
            description: description,
            type: type,
      }

      await insert(data);
      return data;
}

export async function allMoods() {
      const database = await getDB();
      return database.mood;
}

export async function removeMood(id) {
      const moods = await allMoods();

      const included = moods.find(mood => mood.id == id);

      if (included) {
            const removedMoods = moods.filter(mood => mood.id != id);
            await saveDB({ notes: removedMoods });
            return id;
      }
      else {
            console.log("This ID don't exist! in database")
      }
}

export async function erase() {
      await saveDB({ mood: [] })
}