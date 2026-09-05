module.exports = {
default: {
require: [
'features/stepDefinitions/*.ts',
'hooks/*.ts'
],
 
requireModule: [
'ts-node/register'
],
 
 
format: [
    'html:reports/cucumber-report.html',
'progress',
'json:reports/cucumber-report.json'
],
 
//parallel: 3
}
};