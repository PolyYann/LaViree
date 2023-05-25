import Carousel from "@/app/component/CarouselComp";

const carouselSchema = {
    title: 'Carousel Section',
    name: 'carouselSection',
    type: 'document',
    inputComponent: Carousel,
    fields: [
        {
            name: 'title',
            title: 'Titre du composant',
            type: 'string'
        },
        {
            name: 'folderId',
            title: 'Folder Id',
            type: 'string'
        }
    ]
}
export default carouselSchema;