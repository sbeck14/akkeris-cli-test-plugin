module.exports = function(cross_spawn) {
  cross_spawn.sync('npm', ['install'], { cwd: __dirname, env: process.env, stdio: 'ignore' });
};
