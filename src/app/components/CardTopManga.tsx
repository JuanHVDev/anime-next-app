import { Card, CardHeader, CardBody, CardFooter, Image, Button, Divider } from "@nextui-org/react";
import { Anime } from "../../../interfaces";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";
interface CardTopAnimeProps
{
  anime: Anime
}

function CardTopManga({ anime }: CardTopAnimeProps)
{
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },

  }
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <Card className='px-4 h-96 max-h-[500px] text-center hover:bg-violet-800 bg-violet-500/70  font-semibold' shadow="lg" fullWidth  >
        <CardHeader>
          <h1 className="text-2xl text-zinc-300 capitalize">
            {anime.title}
          </h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="mx-auto">
            <Image src={anime.images["webp"].image_url} width={120} className="hover:scale-105" />
          </div>
        </CardBody>
        <CardFooter>
          <Link className="text-xl w-72 mx-auto rounded-lg bg-slate-50 p-2" href={'/manga/' + anime.mal_id.toString()}>
            {/* <Button className="text-xl w-72 mx-auto rounded-lg">More Info</Button> */}
            More Info...
          </Link>
        </CardFooter>
      </Card>
    </MotionDiv>

  )
}

export default CardTopManga