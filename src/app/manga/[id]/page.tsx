import { getManga } from '../../actions'
import { Data } from '../../../../interfaces';
import { Accordion, AccordionItem, Card, CardBody, Chip } from '@nextui-org/react';
import Sinapsis from '@/app/components/Sinapsis';

interface TitlePageProps
{
  params: {
    id: string
  }
}

export default async function TitlePage({ params: { id } }: TitlePageProps)
{
  const manga: Data = await getManga(parseInt(id))
  return (
    <Card
      isBlurred
      className="border-none bg-background dark:bg-default-100/50 text-xl"
      shadow="sm"
    >
      <CardBody>
        <div className=''>
          <div>
            <h1 className='m-2 font-bold'>{manga.title} - {manga.title_japanese}</h1>
            <p className='m-2 font-semibold'>
              Capítulos: <span className='text-md font-normal'>{manga.chapters}</span>
            </p>
            <Sinapsis sinopsis={manga.synopsis} />
            <div>
              {manga.genres.map(genre => (
                <Chip variant='shadow' className={`m-2 hover:bg-warning-300 font-bold`} color='warning' key={genre.type}>
                  {genre.name}
                </Chip>
              ))}
            </div>
          </div>


        </div>
      </CardBody>
    </Card>
  )
}
