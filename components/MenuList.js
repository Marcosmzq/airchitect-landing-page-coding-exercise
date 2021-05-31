const MenuList = ({ closeMenu }) => {
  return (
    <ul className="h-screen flex-center flex-col">
      <li className="menuLi">
        <a onClick={closeMenu} href="#home" className="menuAnchor">
          Home
        </a>
      </li>
      <li className="menuLi">
        <a onClick={closeMenu} href="#about-us" className="menuAnchor">
          About us
        </a>
      </li>
      <li className="menuLi">
        <a onClick={closeMenu} href="#projects" className="menuAnchor">
          Projects
        </a>
      </li>
      <li className="menuLi">
        <a onClick={closeMenu} href="#our-team" className="menuAnchor">
          Our team
        </a>
      </li>
      <li className="menuLi">
        <a onClick={closeMenu} href="#contact" className="menuAnchor">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
