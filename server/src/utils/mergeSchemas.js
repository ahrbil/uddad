const { mergeTypes, mergeResolvers } = require('merge-graphql-schemas');
const { makeExecutableSchema } = require('graphql-tools');
const glob = require('glob');
const fs = require('fs');
const path = require('path');


const getMergedSchemas = () => {
  const pathToModules = path.join(__dirname, '../modules');
  // performing a global search inside modules folder
  // using glob for bash matching patterns 
  // getting all schemas content from schema files
  const allSchemasContent = glob
    // looking for any file with .graphql extension no matter how deeply nested it is
    .sync(`${pathToModules}/**/*.graphql`)
    // reading content using "fs" module 
    .map(schemaContent => fs.readFileSync(schemaContent, { encoding: 'utf8' }));

    // the same goes with resolvers
  const resolvers = glob
    //getting all resolvers.js files
    .sync(`${pathToModules}/**/resolvers.js`)
    // and requiring them
    .map(resolver => require(`${resolver}`));
  
    // making an executable schema by combining schemas and resolvers
  return makeExecutableSchema({
    // merging all schemas and resolvers into one file
    typeDefs: mergeTypes(allSchemasContent),
    resolvers: mergeResolvers(resolvers)
  });
};
// now we can split resolver function and application schema into little chunks
// for easily development experience   
// and get them back  by passing this function into schema in graphql server
// so this function allow us to make our modules easy to maintain, debug and test
module.exports = getMergedSchemas;
