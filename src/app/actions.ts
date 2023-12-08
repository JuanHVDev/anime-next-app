"use server";

import { AnimeData, Manga } from "../../interfaces";

export async function getTopMangas(page: number = 1) {
    const res = await fetch(
        `https://api.jikan.moe/v4/top/manga?filter=bypopularity&page=${page}`
    );
    const data: AnimeData = await res.json();
    return data;
}
export async function getTopAnimes(page: number = 1) {
    const res = await fetch(
        `https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=${page}`
    );
    const data: AnimeData = await res.json();
    return data.data;
}

export async function getManga(id: number) {
    const res = await fetch("https://api.jikan.moe/v4/manga/" + id);
    const manga: Manga = await res.json();
    return manga.data;
}

export async function getAnime(id: number) {
    const res = await fetch("https://api.jikan.moe/v4/anime/" + id);
    const manga: Manga = await res.json();
    return manga.data;
}
