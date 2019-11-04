const proc = require('child_process');

// Old way of installing
proc.spawnSync('npm', ['install'], { cwd: __dirname, env: process.env, stdio: 'ignore' });

// New way of installing
module.exports = function(cross_spawn) {
  cross_spawn.sync('npm', ['install'], { cwd: __dirname, env: process.env, stdio: 'ignore' });
};
