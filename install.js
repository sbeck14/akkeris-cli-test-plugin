module.exports = function(cross_spawn) {
  cross_spawn.sync('npm', ['install'], {cwd:process.cwd(), env:process.env, stdio:'ignore'});
};