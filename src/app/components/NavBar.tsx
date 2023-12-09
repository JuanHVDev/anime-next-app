'use client'
import Link from 'next/link'
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function NavBar()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathName = usePathname()

  const menuItems = [{
    name: 'Mangas',
    href: '/'
  },
  {
    name: "Animes",
    href: '/anime'
  },

  ]
  console.log(pathName)
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-blue-900 text-white' >
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='sm:hidden' />
      {/* Alejandro Martinez */}
      <NavbarContent className='hidden sm:flex gap-4' justify='center' >
        <div className='flex gap-14'>
          <NavbarItem>
            <Link href={'/'}>
              AnimeList
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={`${pathName === '/' ? 'underline underline-offset-4 transition-all ease-linear delay-150' : ''}`} href='/'>Mangas</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={`${pathName === '/anime' ? 'underline' : ''}`} href='/anime'>Animes</Link>
          </NavbarItem>
        </div>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=''>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} >
            <Link className='w-full' href={`/${item.href}`}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
