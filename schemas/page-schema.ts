const page = {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        },
        {
            name: 'heroesTitle',
            title: 'Section Titre',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{
                    type: 'heroesTitle'
                }]
            }]
        },
        {
            name: 'heroes',
            title: 'Sections',
            type: 'array',
            of: [{
                type: 'reference',
                to:[{
                    type: 'heroe'
                }]
            }]
        }
    ]
}
export default page;