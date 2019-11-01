module.exports = function(cross_spawn) {
  console.log('\nInstalling test plugin...');
  cross_spawn.sync('npm', ['install'], { cwd: __dirname, env: process.env, stdio: 'ignore' });
  console.log('npm install finished!');
};
