import {
    HeroesTitle,
    Heroe,

} from "./componentTypes";

export type Page = {
    slug: string;
    heroesTitle: HeroesTitle[];
    heroes?: Heroe[];
    title: string;
}