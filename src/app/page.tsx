import { Metadata } from "next"
import { AnimeData } from "../../interfaces"

export const metadata: Metadata = {
  title: 'AnimeList App'
}

async function getTopAnimes()
{
  const res = await fetch('https://api.jikan.moe/v4/top/anime')
  const data: AnimeData = await res.json()
  return data.data
}

export default async function Home()
{
  const animesTop = await getTopAnimes()
  return (
    <div className='container'>
      <h1>Nasa App</h1>
    </div>
  )
}
