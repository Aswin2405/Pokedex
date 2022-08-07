import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-poke-red shadow-[0_4px_50px_#EF5350] h-14 p-2 flex align-middle justify-center'>
      <Link href="/">
        <a>
          <img src="/logo1.webp" alt="" height={36} width={124} />
        </a>
      </Link>
    </div>
  )
}

export default Navbar