import react from 'react';
import { Typewriter } from "react-simple-typewriter";

export default function Homepage() {
  return (
    <div className=" max-w-[1100px] h-[70vh] flex flex-col justify-center m-auto text-amber-50 items-start p-4">
      {/* Typing Text */}
      <h1 className="text-2xl md:text-1xl">
        <Typewriter
          words={["Book your turf anytime anywhere."]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={2000}
        />
      </h1>
     

      {/* Button */}
      <button className=" mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
        Book Now
      </button>
    </div>
  );
}
