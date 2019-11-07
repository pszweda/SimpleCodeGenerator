import fs from 'fs';

const templates = {
    templates: [
        {
            name: "VueComponent",
            files: [
                {
                    name: "{componentName}.vue",
                    location: "./{componentName}",
                    template: fs.readFileSync(__dirname + "/../src/templates/VueComponent/VueComponent.vue.template", 'utf8') 
                },
                {
                    name: "{componentName}.ts",
                    location: "./{componentName}",
                    template: fs.readFileSync(__dirname + "/../src/templates/VueComponent/VueComponent.ts.template", 'utf8') 
                },
                {
                    name: "{componentName}.scss",
                    location: "./{componentName}",
                    template: fs.readFileSync(__dirname + "/../src/templates/VueComponent/VueComponent.scss.template", 'utf8') 
                },
            ] 
        },
        {
            name: "SebixVueComponent",
            files: [
                {
                    name: "Component.vue",
                    location: "./{componentName}",
                    template: fs.readFileSync(__dirname + "/../src/templates/SebixVueComponent/SebixVueComponent.vue.template", 'utf8') 
                },
                {
                    name: "Component.ts",
                    location: "./{componentName}",
                    template: fs.readFileSync(__dirname + "/../src/templates/SebixVueComponent/SebixVueComponent.ts.template", 'utf8') 
                },
                {
                    name: "Component.scss",
                    location: "./{componentName}",
                    template: fs.readFileSync(__dirname + "/../src/templates/SebixVueComponent/SebixVueComponent.scss.template", 'utf8') 
                },
            ] 
        }
    ]
};

export default templates;