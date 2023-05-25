const heroe = {
    name: "heroetitle",
    title: "Section titre",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "Image",
            title: "Image",
            type: "image"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {type: "block"},
            ]
        },
        {
            name: "fileid",
            title: "File ID",
        }
    ]
}

export default heroe;