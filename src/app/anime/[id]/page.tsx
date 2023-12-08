import { getAnime } from '../../actions'
import { Data } from '../../../../interfaces';
import { Accordion, AccordionItem, Card, CardBody, Chip } from '@nextui-org/react';
import Sinapsis from '@/app/components/Sinapsis';
import Image from 'next/image';

interface TitlePageProps
{
  params: {
    id: string
  }
}

export default async function TitlePage({ params: { id } }: TitlePageProps)
{
  const manga: Data = await getAnime(parseInt(id))
  return (
    <Card
      isBlurred
      className="border-none bg-zinc-900 text-white dark:bg-default-100/50 text-xl h-unit-9xl"
      shadow="sm"
    >
      <CardBody>
        <div className='grid grid-cols-2 gap-10 justify-center align-middle'>
          <div>
            <h1 className='m-2 font-bold'>{manga.title} - {manga.title_japanese}</h1>
            <p className='m-2 font-semibold'>
              Calificación: <span className='text-md font-normal'>{manga.score}</span>
            </p>
            <Chip variant='shadow' color={`${manga.status === 'Finished' ? "danger" : "success"}`} >
              {manga.status}
            </Chip>
            <Sinapsis sinopsis={manga.synopsis} background={manga.background} />
            <div>
              {manga.genres.map(genre => (
                <Chip variant='shadow' className={`m-2 hover:bg-warning-300 font-bold`} color='warning' key={genre.type}>
                  {genre.name}
                </Chip>
              ))}
            </div>

          </div>
          <div>
            <Image className='rounded-xl shadow-xl' src={manga.images["webp"].image_url} alt={`Imgagen de ${manga.title}`} width={300} height={300} />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
