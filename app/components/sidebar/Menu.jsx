'use client'

import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

export default function Menu({ title, submenuItems}) {
  const [isSubmenuOpen, setSubmenuIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuIsOpen(!isSubmenuOpen);
  }

  const hasSubmenu = submenuItems && submenuItems.length > 0;

  return (
    <div className="flex flex-col w-full">
      {/* Consider adding separate functionality for menu title click vs dropdown menu arrow click */}
      <button 
        className="flex font-semibold px-4 py-2 items-center w-full h-16 border-b border-slate-500 dark:text-slate-300"
        type="button"
        onClick={hasSubmenu ? toggleSubmenu : null}
        >
          {hasSubmenu ? (
            title
          ) : (
            <Link href={`/${title.toLowerCase()}`} className="w-full text-left">
              {title}
            </Link>
          )}

          {hasSubmenu && (isSubmenuOpen ? (
            <KeyboardArrowUpRounded className="ml-auto" />
          ): (
            < KeyboardArrowDownRounded className="ml-auto"/>
            )
          )}
      </button>

        {isSubmenuOpen && hasSubmenu && (
          <ul className="submenu pl-6 w-full bg-gray-400">
            {submenuItems.map((item) => (
               <Link href={`/dashboard/${title.toLowerCase()}/${item.name}`}>
              <li key={item.name} className="py-1 text-black font-semibold text-sm hover:text-white cursor-pointer">
                {/* Wrap this in a Link later for routing use "to={item.route}" */}
               {item.name}
              </li>
              </Link>
            ))}
          </ul>
        )}
    </div>
  );
}