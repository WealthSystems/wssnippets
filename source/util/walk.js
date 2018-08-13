const path = require('path');
const fs = require('fs');

/**
 * List all files in a directory in Node.js recursively in a synchronous fashion
 * 
 * @param {path | string} dirPath 
 * @param {Array} filelist 
 */
var walkSync = function (dirPath, filelist, generator) {
    var files = fs.readdirSync(dirPath);

    files.forEach(function (file) {
        var fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            // call recursion for directories
            return walkSync(fullPath, filelist, generator);
        } else {
            //check extension
            if (generator) {
                if (generator.allowedExtensions.indexOf(path.extname(fullPath).toLowerCase()) >= 0) {
                    filelist.push(fullPath)
                }
            }else{
                filelist.push(fullPath)
            }
        }
    });
    return filelist;
};

module.exports.walkSync = walkSync;