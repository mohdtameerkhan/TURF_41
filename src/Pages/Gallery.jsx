import React from 'react';
import vdo from '../assets/tvido.mp4';
import vdo2 from '../assets/IMG_4441.MP4';

export default function Gallery() {
  return (
     <div className='max-w-[1100px] h-fit m-auto bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg'> 
     <h1 id='gallery' className='m-4 font-bold '>Turf_41 Highlights.
     </h1>
     <div className='border grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
       
      <video src={vdo} autoPlay muted playsInline loop></video>
      <div className='text-center text-white'> repellat consequatur aperiam laudantium iste nam hic iure ex minus assumenda commodi doloribus ad quis? Illum, aperiam! </div>
     <video className='rounded-br-4xl' src={vdo2} autoPlay muted playsInline loop></video>
     <div className='text-center text-white'> repellat consequatur aperiam laudantium iste nam hic iure ex minus assumenda commodi doloribus ad quis? Illum, aperiam! </div>
     <video src={vdo} autoPlay muted playsInline loop></video>
     <div className='text-center text-white'> repellat consequatur aperiam laudantium iste nam hic iure ex minus assumenda commodi doloribus ad quis? Illum, aperiam! </div>

      
      </div>
      
     
       
     </div>
    
  )
}
