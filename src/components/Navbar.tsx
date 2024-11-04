import React from 'react'
import { FloatingNav } from './ui/FloatingNav'
import { NAV_ITEMS } from '@/constants'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={NAV_ITEMS} />
    </div>
  )
}

export default Navbar