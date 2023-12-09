import { Metadata } from "next"
import { Anime, AnimeData } from "../../interfaces"
import CardTopManga from "./components/CardTopManga"

export const metadata: Metadata = {
  title: 'Top Mangas - AnimeList App'
}

async function getTopMangas()
{
  const res = await fetch('https://api.jikan.moe/v4/top/manga?filter=bypopularity')
  const data: AnimeData = await res.json()
  return data.data
}

export default async function Home()
{
  const animesTop: Anime[] = await getTopMangas()
  return (
    <div className='container text-slate-100'>
      <section>
        <h1 className="text-5xl m-4">
          Top 25 Mangas
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 content-center text-center m-4 justify-center items-center">
          {animesTop.map((anime) => (
            <CardTopManga anime={anime} key={anime.mal_id} />
          ))}
        </div>
      </section>
    </div>
  )
}
