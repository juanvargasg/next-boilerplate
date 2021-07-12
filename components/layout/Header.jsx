import {useContext} from 'react';
import Link from 'next/link';
import GlobalContext from '../../context/GlobalContext';
import IconFA from '../IconFA';
import Button from '../Button';

const Header = () => {
  const {menuIsOpen, setMenuIsOpen} = useContext(GlobalContext);
  return (
    <header>
      <div className={`header-brand${menuIsOpen ? ' is-toggled' : ''}`}>
        <Button className="pl-0 d-md-none" onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <IconFA name="bars" />
        </Button>
        <Link href="/">
          <a className="brand">
            <IconFA name="connectdevelop" type="fab" className="mr-1" />
            <strong className="brand-label">Bolerplate</strong>
          </a>
        </Link>
        <Button className="pr-0 d-md-none">
          <img src="/img/avatar.png" alt="Avatar" className="avatar" />
        </Button>
      </div>
      <div className="header-container">
        <Button className="pl-0" onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <IconFA name="bars" />
        </Button>
        <div className="header-icons">
          <Button className="pr-0">
            <IconFA name="bell" type="far" />
          </Button>
          <Button className="pr-0">
            <IconFA name="comment-alt" type="far" />
          </Button>
          <Button className="pr-0">
            <img src="/img/avatar.png" alt="Avatar" className="avatar" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
