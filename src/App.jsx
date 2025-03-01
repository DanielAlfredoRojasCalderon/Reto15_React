import React from 'react'
import Principal from './Principal/Principal'
import Headers from './Principal/Headers'

const App = () => {
  return (
    <div className='w-6/10 bg-white h-full justify-self-center pt-2 mt-4'>
      <Headers />
      <Principal />

    </div>
      
   
  )
}

export default App