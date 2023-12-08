import { Anime } from "../../../interfaces"
import { getTopAnimes } from "../actions"
import CardTopAnime from "../components/CardTopAnime"

export default async function Home()
{
  const animesTop: Anime[] = await getTopAnimes()
  return (
    <div className='container text-slate-100'>
      <section>
        <h1 className="text-5xl m-4">
          Top 25 Animes
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 content-center text-center m-4 justify-center items-center">
          {animesTop.map((anime) => (
            <CardTopAnime anime={anime} key={anime.mal_id} />
          ))}
        </div>
      </section>
    </div>
  )
}