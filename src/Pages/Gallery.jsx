import React from 'react';
import ground from '../assets/ground.png';



export default function Gallery() {
  return (
     <div className='max-w-[1100px] h-fit m-auto p-6 bg-amber-100'> 
     <h1 className='m-4 font-bold '>Turf_41 Highlights.
     </h1>
     <div className='border p-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-[800px] m-auto'>
      <img src={ground} alt="ground" className='rounded-lg'/>
      <img src={ground} alt="ground" className='rounded-lg'/>
      <img src={ground} alt="ground" className='rounded-lg'/>
      <img src={ground} alt="ground" className='rounded-lg'/>
      
      </div>
      
     
       
     </div>
    </div>
  )
}
