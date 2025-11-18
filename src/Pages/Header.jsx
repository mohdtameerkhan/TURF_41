import React, { useState } from "react";
import { BsMenuUp } from "react-icons/bs";
import { BsMenuDown } from "react-icons/bs";

import logo from "../assets/turf_.png";
import Menu from "./Menu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div id="home" className="w-full h-fit flex items-center justify-between p-3">
        {/* left */}
        <div className="w-[90px]">
          <img src={logo} alt="turflogo" />
        </div>

        {/* right */}
        <div
          className="text-3xl text-amber-50 p-4 hover:cursor-pointer"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? <BsMenuDown/> : <BsMenuUp />
}
        </div>
      </div>

      {/* animated dropdown */}
      <div className="absolute right-1 top-20">
        <Menu open={openMenu} />
      </div>
    </>
  );
}
