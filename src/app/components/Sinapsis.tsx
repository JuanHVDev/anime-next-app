'use client'
import { Accordion, AccordionItem } from '@nextui-org/react'

interface SinapsisProps
{
  sinopsis: string,
  background: string,
}

export default function Sinapsis({ sinopsis, background }: SinapsisProps)
{
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-semibold text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-300 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2 text-black",
  };

  return (
    <Accordion variant='splitted' className='my-2' itemClasses={itemClasses}>
      <AccordionItem key={'sinopsis'} title='Sinopsis' aria-label='sinopsis' >
        {sinopsis}
      </AccordionItem>
      <AccordionItem key={'background'} title='Background' aria-label='background'>
        {background}
      </AccordionItem>
    </Accordion>
  )
}
