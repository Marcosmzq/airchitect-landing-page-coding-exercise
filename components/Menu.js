import MenuList from "./MenuList";
import Image from "next/image";
import { useState } from "react";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <>
      {!activeMenu ? (
        <button onClick={() => setActiveMenu(true)} className="btn bg-white">
          <Image
            src="/icons/menu-bars.svg"
            alt="Menu with bars icon"
            width={20}
            height={20}
          />
          <span className="mx-1 text-darkBlue text-sm font-poppins">menu</span>
        </button>
      ) : (
        <div className="fixed inset-0 z-50 min-h-screen w-full bg-darkBlue">
          <div className="flex justify-end">
            <button
              onClick={() => setActiveMenu(false)}
              className="btn bg-white"
            >
              <Image
                src="/icons/close.svg"
                alt="Close menu icon"
                width={25}
                height={25}
              />
            </button>
          </div>

          <MenuList closeMenu={() => setActiveMenu(false)} />
        </div>
      )}
    </>
  );
};

export default Menu;
