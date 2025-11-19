import React from 'react';
import vdo from '../Assets/tvido.mp4';

export default function Gallery() {
  return (
     <div className='max-w-[1100px] h-fit m-auto p-6 bg-amber-100'> 
     <h1 id='gallery' className='m-4 font-bold '>Turf_41 Highlights.
     </h1>
     <div className='border grid grid-cols-1 md:grid-cols-3 '>
      <video src={vdo} autoPlay muted playsInline loop></video>
      <div className='text-center '> repellat consequatur aperiam laudantium iste nam hic iure ex minus assumenda commodi doloribus ad quis? Illum, aperiam! </div>
     <video src={vdo} autoPlay muted playsInline loop></video>
     <div> repellat consequatur aperiam laudantium iste nam hic iure ex minus assumenda commodi doloribus ad quis? Illum, aperiam! </div>
     <video src={vdo} autoPlay muted playsInline loop></video>
     <div> repellat consequatur aperiam laudantium iste nam hic iure ex minus assumenda commodi doloribus ad quis? Illum, aperiam! </div>

      
      </div>
      
     
       
     </div>
    
  )
}
