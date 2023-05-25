
import clientConfig from "@/sanity/config/client-config";
import {createClient, groq} from "next-sanity";
import {Page} from "@/sanity/types/Page";
import {CarouselSection} from "@/sanity/types/componentTypes";


export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
    )
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
          _id,
      _createdAt,
      title,
      "slug": slug.current,
      heroesTitle[]->{
        // Fetch all fields defined in schema for heroesTitle type
        _id,
        _createdAt,
        title,
        "imageUrl": Image.asset->url,
        fileid
      },
      heroes[]->{
        // Fetch all fields defined in schema for heroe type
        _id,
        _createdAt,
        title,
        "imageUrl": Image.asset->url,
        content,
         choice,
        carouselSections->{
          title,
          folderId
      }
    }`,
        {slug}
    )
}

export async function getCarouselSection(slug:string): Promise<CarouselSection> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
          carouselSections[]->{
            folderId
          }
        }`,
        {slug}
    )
}
