const fs = require('fs');
const path = require('path');


const startPath = path.join(__dirname, '../../files/README_TEMPLATE.md');

module.exports.run = async function () {
    
    let fileContent = fs.readFileSync(startPath, 'utf8', (err, content) => {
        if (err) throw err;
    }).toString();


    let snippetFile = fs.readFileSync(path.join(__dirname, '../../snippets/snippets.json'), 'utf8', (err, data) => {
        if (err) throw err;
    });

    let snippetContent = JSON.parse(snippetFile);
    
    let value = ''
    //Generating string for table replace
    for (const i in snippetContent) {
        if (i) value += i + ' | `' + snippetContent[i].prefix + '`\n';
    }

    fileContent = fileContent.replace('@@DOCUMENTATION@@', value);

    /**
    * Saving snippet.json file
    */
    fs.writeFileSync(path.join(__dirname, '../../README.md'), fileContent, (err) => {
        if (err) throw err;
    });
    
    console.log(`${path.basename(__filename)}> The file has been saved! \'README.md\'`);
}

