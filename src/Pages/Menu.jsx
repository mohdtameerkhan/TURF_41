import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";


export default function Menu({ open }) {
  const items = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" }
  ];

  return (
    <div
      className={`
        overflow-hidden
        transition-all duration-500
        ${open ? "max-h-[300px]" : "max-h-0"}
      `}
    >
      <ul className="bg-[#062c93] p-4 rounded-xl shadow-lg w-[180px] flex flex-col gap-3">

        {items.map((item, index) => (
          <li
            key={item.name}
            className={`
              transform transition-all duration-500 
              ${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}
            `}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <a
              href={item.link}
              className="text-xl text-white font-medium cursor-pointer"
            >
              {item.name}
            </a>
          </li>
        ))}
         
         {/* SOCIAL APPS */}
         <ul className="flex gap-4 mt-2 ">
            <a href="https://wa.me/917318454818" target="_blank"><li className=""><FaWhatsapp className="text-[#25D366] text-3xl" /></li></a>
            <a href="https://www.instagram.com/turf.41"><li> <BsInstagram className="text-pink-600 text-3xl" /></li></a>
         </ul>

      </ul>
    </div>
  );
}
