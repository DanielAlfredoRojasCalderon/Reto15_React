import React, { useState }  from 'react'



const Activar = ({img,titulo,descripcion,id,genero}) => {

    const [activar,SetActive] = useState(false)

  return (
    
        <div id={id} onMouseMove={() => SetActive(true)} onMouseOutCapture={() => SetActive(false)} className=" w-70 h-75   rounded-lg px-4 py-2   ">
         
         <img className='rounded-md h-full w-full' src={img} alt="fdf" />
         <div  className= {`relative bottom-3/6  text-center bg-slate-900/20  
         ${(activar) ? "visible" : "hidden" }`} >
            <h4 className="text-gray-500 dark:text-white mt-5 text-base font-medium tracking-tight    ">{titulo} </h4>
            <p className='dark:text-white text-[12px]'>{`Género: ${genero}`}</p>
            <p className="text-gray-500 dark:text-white  text-[10px] line-clamp-4  ">
            {`Descripción: ${descripcion}`}
            </p>
       </div>

     </div>

        
  )
}

export default Activar