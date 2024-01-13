import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
      .command('diary', 'opens your mood diary', () => {
            console.log("Opening your mood diary ...")
      }).argv;

yargs(hideBin(process.argv))
      .command('neutral <description>', 'adding neutral mood to diary', yargs => {
            return yargs.positional('mood', {
                  type: 'string',
            })
      }, async (argv) => {

      })
      .command('good <description>', 'adding neutral mood to diary', yargs => {
            return yargs.positional('mood', {
                  type: 'string',
            })
      }, async (argv) => {

      })
      .command('bad <description>', 'adding neutral mood to diary', yargs => {
            return yargs.positional('mood', {
                  type: 'string',
            })
      }, async (argv) => {

      })
      .command('erase', 'delete your diary', () => { }, async argv => {

      })
      .demandCommand(1)
      .parse()
