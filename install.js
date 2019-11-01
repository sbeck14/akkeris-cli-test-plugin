module.exports = function(cross_spawn) {
  console.log('Installing test plugin...');
  console.log(cross_spawn);
  cross_spawn.sync('npm', ['install'], {cwd:process.cwd(), env:process.env, stdio:'ignore'});
};
