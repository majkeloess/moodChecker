# moodChecker

I created a Command Line Interface (CLI) to track daily thoughts and feelings, aiming to deepen my understanding of Node.js and set up a Node project. I tested internal modules like fs and http, utilizing a file-based database (`database.json`) to store data. With yargs, I implemented various commands. The moodChecker functionality is intuitive – you add moods via the terminal and track them using the diary command. The diary provides a simple interface through a Node server, running an HTML file on `http://localhost:2137`.

## Installation

To use the CLI, you need to have Node.js and npm installed locally on your machine. If that is fulfilled, clone the repository to your machine:

```bash
git clone https://github.com/majkeloess/moodChecker
```

Then you have to go to project directory and install modules which would run the CLI. To install all dependencies u need to type in your terminal, we use `-g` flag because we want the CLI working globally on your computer.

```bash
npm install -g
```

Once you done that the next step is to open with some IDE, text editor `index.js`. On first line you have directive to where your node environment is running from. You need to change this directive, to get this path you have to type in terminal

```bash
which node
```

Command is going to send you path to node, copy it and change path in the file. Once you did that moodChecker should work properly on your machine.

## Usage

moodChecker contains some commands:

Commands for adding new mood raports, after command u have to put description, thoughts what's going on in your mind in `""`:  
`mood good` - adds good mood to your diary  
`mood neutral` - adds neutral mood to your diary  
`mood bad` - adds bad mood to your diary

e.g:

```bash
mood good "What a lovely day"
```

Command for opening interface:

```bash
mood diary
```

Other commands:

```bash
mood --help
mood --version
```

## Photos

![Screenshot from 2024-01-14 15-59-37](https://github.com/majkeloess/moodChecker/assets/118011581/57880023-ed7d-4ee3-99bb-7ff8587ee2ec)
![Screenshot from 2024-01-14 16-08-04](https://github.com/majkeloess/moodChecker/assets/118011581/411482ce-3763-4426-8d9c-4c6afb3e3e1e)
![Screenshot from 2024-01-14 14-20-40](https://github.com/majkeloess/moodChecker/assets/118011581/687d3a4d-8450-4c7b-9d1e-4e4a9868bc9a)

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)
