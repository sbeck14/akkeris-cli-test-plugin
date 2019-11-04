const proc = require('child_process');

proc.spawnSync('npm', ['install'], { cwd: __dirname, env: process.env, stdio: 'ignore' });

module.exports = function(cross_spawn) {
  cross_spawn.sync('npm', ['install'], { cwd: __dirname, env: process.env, stdio: 'ignore' });
};
