#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const process = require('process');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function start() {
    let componentName = await getComponentName();

    let data = fs.readFileSync('./templates/VueComponent/Compnent.vue', 'utf8');

    let dir = __dirname + '/' + componentName;
    let fileData = data.replace(new RegExp('{component_name}', 'g'), componentName); 

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    fs.writeFile(dir + '/'+ componentName +'.vue', fileData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!', fileData);
  });

};

//start();

function getComponentName() {
    return new Promise((resolve, reject) => {
        rl.question('Podaj nazwę komponentu: ', (answer) => {
            rl.close();
            resolve(answer);
        });    
    });
}