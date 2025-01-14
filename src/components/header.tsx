import React from 'react'

export const Header = () => {
  return (
    <section className='bg-red-500'>
        <nav className='p-3'>
            <ul className='flex w-full justify-around'>
                <li><a href="/">Inicio</a></li>
                <li><a href="/register">Registro</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/detail">Destalle</a></li>
            </ul>
        </nav>
    </section>
  )
}
