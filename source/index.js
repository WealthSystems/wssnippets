const snippet = require('./generators/snippet_generator')
const static = require('./generators/static_generator')
const readme = require('./generators/readme_generator')

async function run(){
    await snippet.run()
    await static.run()
    await readme.run()
    console.log("Done!")
}

run()