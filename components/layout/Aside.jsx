import {useContext} from "react";
import GlobalContext from "../../context/GlobalContext";
import MenuItem from "./MenuItem";

const Aside = () => {
  const {menuIsOpen} = useContext(GlobalContext);

  return (
    <aside className={menuIsOpen ? 'is-toggled' : ''}>
      <nav className="menu">
        <ul>
          <MenuItem text="Inicio" iconName="home" />
          <MenuItem text="Sobre nosotros" iconName="atom" />
          <MenuItem text="Contacto" iconName="address-book" iconType="far" />
          <MenuItem text="Contacto" iconName="id-card" iconType="far" />
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
