const vscode = require('vscode');

module.exports = function () {
  // const config = vscode.workspace.getConfiguration('vsnotes');
  // const noteFolder = config.get('defaultNotePath');
  // const ignorePattern = new RegExp(config.get('ignorePatterns')
  //   .map(function (pattern) { return '(' + pattern + ')' })
  //   .join('|'));

  vscode.commands.executeCommand('workbench.action.findInFiles', ...['a', 'a', 'a']).then(res => {
    console.log(res)
  }, err => {
    console.error(res)
  });
}