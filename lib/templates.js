"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var templates = {
    templates: [
        {
            name: "VueComponent",
            files: [
                {
                    name: "{componentName}.vue",
                    template: fs_1.default.readFileSync(__dirname + "/../src/templates/VueComponent/VueComponent.vue.template", 'utf8')
                },
                {
                    name: "{componentName}.ts",
                    template: fs_1.default.readFileSync(__dirname + "/../src/templates/VueComponent/VueComponent.ts.template", 'utf8')
                },
                {
                    name: "{componentName}.scss",
                    template: fs_1.default.readFileSync(__dirname + "/../src/templates/VueComponent/VueComponent.scss.template", 'utf8')
                },
            ]
        },
        {
            name: "SebixVueComponent",
            files: [
                {
                    name: "Component.vue",
                    template: fs_1.default.readFileSync(__dirname + "/../src/templates/SebixVueComponent/SebixVueComponent.vue.template", 'utf8')
                },
                {
                    name: "Component.ts",
                    template: fs_1.default.readFileSync(__dirname + "/../src/templates/SebixVueComponent/SebixVueComponent.ts.template", 'utf8')
                },
                {
                    name: "Component.scss",
                    template: fs_1.default.readFileSync(__dirname + "/../src/templates/SebixVueComponent/SebixVueComponent.scss.template", 'utf8')
                },
            ]
        }
    ]
};
exports.default = templates;
