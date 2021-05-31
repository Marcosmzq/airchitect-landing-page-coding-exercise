import Image from "next/image";
import Menu from "./Menu";

const Header = ({ sectionName }) => {
  return (
    <>
      <ul className="flex justify-between items-center">
        <li>
          <Menu />
        </li>
        <li>
          <Image src="/logo.svg" width={150} height={100} />
        </li>
        <li className="hidden sm:inline">
          <a href="#contact" className="btn bg-white">
            <Image src="/icons/contact-rings.svg" width={20} height={20} />
            <span className="text-darkBlue mx-1">contact</span>
          </a>
        </li>
      </ul>

      {sectionName ? (
        <a
          href="#"
          className="btn bg-white sm:w-32 text-darkBlue font-poppins font-black"
        >
          {sectionName}
        </a>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
