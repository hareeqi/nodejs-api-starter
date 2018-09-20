// ***********************************************
// This code set the alises using the jsconfig file
// in the project root
// ***********************************************
let alises = require('./jsconfig.json');
alises = alises.compilerOptions.paths;
for (const key in alises) {
    alises[key] = __dirname + alises[key][0].slice(1);
}
const moduleAlias = require('module-alias');
moduleAlias.addAliases(alises);
// ***********************************************
// End of setting alises
// ***********************************************

// This export for jest tester to resolve aliases
module.exports = { verbose: true };
