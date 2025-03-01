import React from 'react'
import { IoSearch } from 'react-icons/io5'

const Headers = () => {
  return (
    <header className='flex w-full px-6 pr-8'>
        <div className='w-2/5 pl-8'>
          <img className=' h-15  ' src="https://wwe.cinecalidad.gg/wp-content/themes/Cinecalidad/assets/img/logo.svg?v=1aaaaaa.0" />
        </div>
        <div className='w-3/5  flex justify-between my-2 place-items-center bg'>
        <div className='left-10  relative  cursor-pointer'>
        <IoSearch /> 
        </div>
         
          <input 
          className='w-4/5  h-8 border-2 rounded-md pl-12' 
          type="text" 
          placeholder='Buscar Película' />
          <a  className="rounded-md bg-teal-500/80  py-2 mr-3 text-sm font-semibold text-white cursor-pointer shadow-xs hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>

        </div>
        


    </header>
  )
}

export default Headers