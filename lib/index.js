#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var templates_1 = __importDefault(require("./templates"));
var fs_1 = __importDefault(require("fs"));
var inquirer = require('inquirer');
inquirer
    .prompt([
    {
        type: 'list',
        name: 'template',
        message: 'Select template to generate?',
        choices: templates_1.default.templates.map(function (item) {
            return item.name;
        })
    },
    {
        type: 'input',
        name: 'componentName',
        message: "Provide component name",
    },
])
    .then(function (answers) {
    var selectedTemplate = templates_1.default.templates.find(function (template) { return template.name === answers.template; });
    selectedTemplate.files.forEach(function (template) {
        var dir = './' + answers.componentName;
        var fileData = template.template.replace(new RegExp('{componentName}', 'g'), answers.componentName);
        if (!fs_1.default.existsSync(dir)) {
            fs_1.default.mkdirSync(dir);
        }
        var fileName = template.name.replace(new RegExp('{componentName}', 'g'), answers.componentName);
        fs_1.default.writeFile(dir + '/' + fileName, fileData, function (err) {
            console.log('The file ' + fileName + ' has been saved!');
        });
    });
});
