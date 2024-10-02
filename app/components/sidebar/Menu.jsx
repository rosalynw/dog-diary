'use client'

import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@mui/icons-material";
import { useState } from "react";

export default function Menu({ title, submenuItems}) {
  const [isSubmeuOpen, setSubmenuIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuIsOpen(!isSubmeuOpen);
  }
  return (
    <div className="flex flex-col w-full">
      <button 
        className="flex font-semibold px-4 py-2 items-center w-full h-16 border-b border-slate-500 dark:text-slate-300"
        type="button"
        onClick={toggleSubmenu}
        >
          {title}
          {isSubmeuOpen ? (
            <KeyboardArrowUpRounded className="ml-auto" />
          ): (< KeyboardArrowDownRounded className="ml-auto"/>
          )}
          </button>

        {isSubmeuOpen && (
          <ul className="submenu pl-6 w-full bg-gray-400">
            {submenuItems.map((item) => (
              <li key={item.name} className="py-1 text-black font-semibold text-sm hover:text-white cursor-pointer">
                {/* Wrap this in a Link later for routing user "to={item.route}" */}
                {item.name}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}