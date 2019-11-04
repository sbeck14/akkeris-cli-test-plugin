module.exports = function(cross_spawn) {
  if (!cross_spawn) {
    const proc = require('child_process');
    proc.spawnSync('npm', ['install'], { cwd: __dirname, env: process.env, stdio: 'ignore' });
  } else {
    cross_spawn.sync('npm', ['install'], { cwd: __dirname, env: process.env, stdio: 'ignore' });
  }
};
