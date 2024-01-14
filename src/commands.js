import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { newMood, erase, removeMood, allMoods } from './mood.js';
import { startServer } from './server.js';

yargs(hideBin(process.argv))
      .command('neutral <description>', 'adding neutral mood to diary', yargs => {
            return yargs.positional('mood', {
                  type: 'string',
            })
      }, async (argv) => {
            const mood = await newMood('neutral', argv.description);
            console.log(`Neutral mood added! Mood id: ${mood.id}`);
      })
      .command('good <description>', 'adding good mood to diary', yargs => {
            return yargs.positional('mood', {
                  type: 'string',
            })
      }, async (argv) => {
            const mood = await newMood('good', argv.description);
            console.log(`Good mood added! :D Mood id: ${mood.id}`);
      })
      .command('bad <description>', 'adding bad mood to diary', yargs => {
            return yargs.positional('mood', {
                  type: 'string',
            })
      }, async (argv) => {
            const mood = await newMood('bad', argv.description);
            console.log(`Bad mood added! Don't worry everything gonna be alright soon!!! Mood id: ${mood.id}`);
      })
      .command('remove <id>', 'remove mood raport by id', yargs => {
            return yargs.positional('id', {
                  type: "number",
            })
      }, async argv => {
            const id = removeMood(argv.id);
      })
      .command('erase', 'delete your diary', () => { }, async argv => {
            await erase();
            console.log("Erased your mood diary!");
      })
      .command('diary', 'opens your mood diary', () => { }, async argv => {
            const moodList = await allMoods();
            await startServer();
      })
      .demandCommand(1)
      .parse()
