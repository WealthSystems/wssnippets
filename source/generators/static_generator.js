const path = require('path')
const fs = require('fs')
const walk = require('./../util/walk')
const conf = require('./../util/config')


const startPath = path.join(__dirname, '../../files/static');

module.exports.run = async function () {

    var localSnippet = {}

    for (const s in conf.STATIC) {
        if (conf.STATIC.hasOwnProperty(s)) {
            const static = conf.STATIC[s]

            let staticFile = fs.readFileSync(path.join(startPath, static.file), 'utf8', (err, data) => {
                if (err) throw err
            }).toString()


            for (const key of staticFile.split('\n')) {

                if (key) {
                    
                    const name = static.name.concat(' ', key)
                    localSnippet[name] = {
                        prefix: static.prefix.concat('-', key),
                        body: key,
                        description: name,
                        scope: ''
                    }

                }
            }
        }
    }


    //Realoading snippet file
    const snippetPath = path.join(__dirname, '../../snippets/snippets.json')
    const fileContent = fs.readFileSync(snippetPath, 'utf8', function (err) {
        if (err) throw err
    })

    //Updating snippet file
    var snippet = JSON.parse(fileContent)
    const snippetUpdated = Object.assign(snippet, localSnippet)

    //Writing again
    fs.writeFileSync(snippetPath, JSON.stringify(snippetUpdated, null, 4), (err) => {
        if (err) throw err;
    })

    console.log(`${path.basename(__filename)}> The file has been update! ${snippetPath} `)
}