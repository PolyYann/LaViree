import {PortableTextBlock} from "sanity";

export type Heroe = {
    _id: string;
    _createdAt: string;
    title: string;
    image: string;
    choice: string;
    content: PortableTextBlock[];
}
export type HeroesTitle = {
    _id: string;
    _createdAt: string;
    title: string;
    image: string;
    fileid: string;
    content: PortableTextBlock[];
}
export type Event = {
    id: string;
    name: string;
    description: string;
    start_time: string;
    end_time?: string;
    place?: {
        name: string;
        location?: {
            city?: string;
            country?: string;
            latitude?: number;
            longitude?: number;
            state?: string;
            street?: string;
            zip?: string;
        };
        id: string;
    };
    cover?: {
        id: string;
        offset_x: number;
        offset_y: number;
        source: string;
    };
}

export type DataGoogle = {
    id: string;
    name: string;
    thumbnailLink: string;
    webContentLink: string;
}

export type FacebookEventSection = {
    _id: string;
    _createdAt: string;
    title: string;
}

export type CarouselSection = {
    _createdAt: string;
    _id: string;
    folderId: string;
    title: string;
}


