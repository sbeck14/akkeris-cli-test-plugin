const inquirer = require('inquirer');

function getName() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What's your name?",
    }
  ]).then(answers => {
    console.log(`Your name is: ${answers.name}`);
  });
}

function init(appkit) {
  appkit.args.command('testPlugin', '[TEST PLUGIN] Ask for your name!', {}, getName.bind(null, appkit));
}

module.exports = {
  init,
  update: () => {},
  group: 'pluginTest',
  help: 'plugin for testing Akkeris plugins',
  primary: true,
};