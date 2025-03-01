import React, { useState }  from 'react'



const Activar = () => {
    const [activar,SetActive] = useState(false)
    
  return (
    <>
        <div onMouseMove={() => SetActive(true)} onMouseOutCapture={() => SetActive(false)} className=" w-70 h-70   rounded-lg px-4 py-2   ">
         
         <img className=' h-full w-full' src="https://image.tmdb.org/t/p/w300/roKMM6S9DRGFNujmvqlk8l5YbN3.jpg" alt="fdf" />
         <div  className= {`relative bottom-34 text-center bg-amber-700  
         ${(activar) ? "visible" : "hidden" }`} >
         <h3 className="text-gray-500 dark:text-white mt-5 text-base font-medium tracking-tight    ">Writes upside-down </h3>
           <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
             The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
         </p>
       </div>

     </div>

    </>
  )
}

export default Activar