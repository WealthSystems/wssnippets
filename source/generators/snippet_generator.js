const path = require('path');
const fs = require('fs');
const walk = require('./../util/walk');
const conf = require('./../util/config')

const startPath = path.join(__dirname, '../../files/');
var resultList = [];


/**
 * Open file and build return a model object
 * @returns \{'fileName': {string}, 'directory': {string}, 'content': {string}}
 * @param {path | string} file 
 */
const handleFiles = function (file) {
    let contentDirectory = path.dirname(file).split('/').pop()
    let fileContent = fs.readFileSync(file, 'utf8').toString()
    
    let result = {
        fullPath: file,
        fileName: path.basename(file),
        directory: contentDirectory,
        content: fileContent.split('\n'),
    }
    // console.log(result);
    return result
}

/**
 * Run ALL generators described in config.js
 */
exports.run = async function () {

    var templateFiles = []
    var result = {}

    for (const g in conf.GENERATORS) {
        if (conf.GENERATORS.hasOwnProperty(g)) {
            const generator = conf.GENERATORS[g]

            // Get template files
            templateFiles = await walk.walkSync(path.join(startPath, generator.prefix), [], generator).map(handleFiles)

            /**
            * Generating snippet content
            */
            for (const o of templateFiles) {
                let parentDir = path.dirname('' + o.fullPath).split(path.sep).pop()
                let name = o.fileName.toString().split('.').shift();
                let key = generator.name.concat(' ', parentDir, ' ', name);

                if (key) {
                    result[key] = {
                        prefix: generator.prefix.concat('-', parentDir, '-', name),
                        body: o.content,
                        description: key,
                        scope: ''
                    }
                }
            }
        }
    }

    /**
     * Saving snippet.json file
     */
    let wpath = path.join(__dirname, '../../snippets/snippets.json');
    fs.writeFileSync(wpath, JSON.stringify(result, null, 4), (err) => {
        if (err) throw err
    });
    console.log(`${path.basename(__filename)}> The file has been saved! ${wpath} `)
}
