import React from "react";

export default function Menu({ open }) {
  const items = ["Home", "Services","Gallery","Contact"];

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
            key={item}
            className={`
              text-xl text-white font-medium 
              transform transition-all duration-500 cursor-pointer
              ${open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}
            `}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
