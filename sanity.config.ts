import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./schemas";


const config = defineConfig({
    projectId:"ed3za6uf",

    dataset:"production",

    title:"La Virée des Ateliers",
    
    apiVersion:"2023-03-09",

    basePath:"/admin",

    plugins: [ deskTool() ],

    schema: { types: schemas}
})

export default config;