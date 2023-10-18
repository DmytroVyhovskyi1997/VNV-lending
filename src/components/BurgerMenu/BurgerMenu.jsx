import { useState } from "react";
import { BurgerWrapper, Menu, MenuItem, Burger,Link,ButtonClose  } from "./BurgerMenu.styled";



const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = ()=>{
    setIsOpen(!isOpen);
  }

  return (
    <BurgerWrapper>
      <Burger color="white" size={42} onClick={toggleMenu} />
      <Menu isOpen={isOpen}>
        <ButtonClose color="white" size={42} onClick={closeMenu}/>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/order">Order</Link>
        </MenuItem>
      </Menu>
    </BurgerWrapper>
  );
};

export default BurgerMenu;
