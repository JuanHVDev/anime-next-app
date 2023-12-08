'use client'
import Link from 'next/link'
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import { useState } from 'react'

export default function NavBar()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    "Home",
    "Animes"
  ]
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-blue-900 text-white' >
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='sm:hidden' />
      {/* Alejandro Martinez */}
      <NavbarContent className='hidden sm:flex gap-4' justify='center' >
        <NavbarItem>
          <Link className='' href='/'>Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='' href='/anime'>Animes</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=''>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} >
            <Link className='w-full' href={`/${item}`}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
