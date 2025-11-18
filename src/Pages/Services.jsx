import React from 'react'
import { GiGrass } from "react-icons/gi";
import { MdSecurityUpdateGood, MdLightMode } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";

export default function Services() {

  const features = [
    { logo: <GiGrass />, title: 'Premium Turf Pitch', description: 'Experience top-quality turf pitches that provide optimal playing conditions for cricket enthusiasts of all levels.' },
    { logo: <MdSecurityUpdateGood />, title: 'Flexible Booking Options', description: 'Easily book your turf online with our user-friendly platform, offering flexible time slots to suit your schedule.' },
    { logo: <GrVmMaintenance />, title: 'Professional Maintenance', description: 'Our turfs are regularly maintained by a dedicated team to ensure a safe and enjoyable playing surface.' },
    { logo: <MdLightMode />, title: 'Lighting Facilities', description: 'Play day or night with our well-lit turfs, designed to provide optimal visibility for all players.' }
  ];

  const feSection = features.map((feature, index) => (
    <div 
      key={index}
      className="bg-white/10 backdrop-blur-md border border-white/20 
                 m-2 p-4 rounded-xl grid gap-3 shadow-lg 
                 hover:shadow-2xl hover:bg-white/20 transition-all duration-300 text-justify"
    >
      <h3 className="text-5xl text-green-400">{feature.logo}</h3>
      <h1 className="font-semibold text-lg text-white">{feature.title}</h1>
      <p className="text-gray-300">{feature.description}</p>
    </div>
  ));

  return (
    <div className="max-w-[1100px] m-auto text-white"> 
      <h1 className="m-4 text-2xl font-bold border rounded-lg text-center max-w-fit p-2 ">Why to Choose Turf_41? </h1>
      <p className="px-4 text-gray-200 text-justify">
        Turf_41 आपका अपना क्रिकेट टर्फ है, जहाँ हर उम्र के खिलाड़ी आराम से खेल सकते हैं। चाहे आप अभ्यास के लिए बुकिंग करें, कोई दोस्ताना मैच हो या कोई टूर्नामेंट—हमारी पूरी तरह से मेंटेन की गई पिच और शानदार लाइटिंग व्यवस्था आपको बेहतरीन खेल अनुभव प्रदान करती है।
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
        {feSection}
      </div>
    </div>
  );
}
