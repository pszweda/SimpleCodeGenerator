import fs from 'fs';

const templates = {
    templates: [
        {
            name: "VueComponent",
            files: [
                {
                    name: "{componentName}.vue",
                    template: fs.readFileSync(__dirname + "/../src/templates/VueComponent/VueComponent.vue.template", 'utf8') 
                },
                {
                    name: "{componentName}.ts",
                    template: fs.readFileSync(__dirname + "/../src/templates/VueComponent/VueComponent.ts.template", 'utf8') 
                },
                {
                    name: "{componentName}.scss",
                    template: fs.readFileSync(__dirname + "/../src/templates/VueComponent/VueComponent.scss.template", 'utf8') 
                },
            ] 
        },
        {
            name: "SebixVueComponent",
            files: [
                {
                    name: "Component.vue",
                    template: fs.readFileSync(__dirname + "/../src/templates/SebixVueComponent/SebixVueComponent.vue.template", 'utf8') 
                },
                {
                    name: "Component.ts",
                    template: fs.readFileSync(__dirname + "/../src/templates/SebixVueComponent/SebixVueComponent.ts.template", 'utf8') 
                },
                {
                    name: "Component.scss",
                    template: fs.readFileSync(__dirname + "/../src/templates/SebixVueComponent/SebixVueComponent.scss.template", 'utf8') 
                },
            ] 
        }
    ]
};

export default templates;