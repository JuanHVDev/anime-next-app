import { Card, CardHeader, CardBody, CardFooter, Image, Button, Divider } from "@nextui-org/react";
import { Anime } from "../../../interfaces";
import Link from "next/link";
interface CardTopAnimeProps
{
  anime: Anime
}

function CardTopManga({ anime }: CardTopAnimeProps)
{
  return (
    <Card className='px-4 w-96 h-96 max-h-[700px] text-center hover:bg-violet-800 bg-violet-500/70  font-semibold' shadow="lg" fullWidth  >
      <CardHeader>
        <h1 className="text-2xl text-zinc-300 capitalize">
          {anime.title}
        </h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="mx-auto">
          <Image src={anime.images["webp"].image_url || "Not Found"} alt={"Imagen de la portada de " + anime.title} width={120} className="hover:scale-105" />
        </div>
      </CardBody>
      <CardFooter>
        <Link className="text-xl w-72 mx-auto rounded-lg bg-slate-50 p-2" href={'/anime/' + anime.mal_id.toString()}>
          {/* <Button className="text-xl w-72 mx-auto rounded-lg">More Info</Button> */}
          More Info...
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardTopManga