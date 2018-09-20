// ***********************************************
// This code set the alises using the jsconfig file
// in the project root
// ***********************************************
const moduleAlias = require('module-alias');
let alises = require('../jsconfig.json');
alises = alises.compilerOptions.paths;
for (const key in alises) {
    alises[key] = __dirname.slice(0, -7) + alises[key][0].slice(1);
}
moduleAlias.addAliases(alises);
// ***********************************************
// End of setting alises
// ***********************************************

// This export for jest tester to resolve aliases
const { defaults } = require('jest-config');
module.exports = { moduleNameMapper: alises };
