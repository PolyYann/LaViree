const heroe = {
    name: "heroe",
    title: "Heroes",
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
            name: "choice",
            title: "Choix du style",
            type: "string",
            options: {
               list: [
                   {title: "PICTURE BACKGROUND BLACK TEXT", value: "Black_BG"},
                   {title: "PICTURE BACKGROUND WHITE TEXT", value: "White_BG"},
                   {title: "RIGHT TEXT PICTURE LEFT", value: "Left_Pic"},
                   {title: "LEFT TEXT PICTURE RIGHT", value: "Right_Pic"},
                   {title: "PICTURE OVER TEXT", value: "Over_Pic"},
                   {title: "PICTURE UNDER TEXT", value: "Under_Pic"},
                   {title: "CENTER TEXT NO PIC", value: "Center_NoPic"},
                   {title: "LEFT TEXT NO PIC", value: "Left_NoPic"},
                   {title: "RIGHT TEXT NO PIC", value: "Right_NoPic"}
                   ]
            }
        },
        {
            name: 'carouselSections',
            title: 'Carousel d\'Image De GoogleDrive',
            type: 'reference',
            to: [{type: 'carouselSection'}]
        },
    ]
}

export default heroe;