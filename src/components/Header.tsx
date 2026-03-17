import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleBurger = () => {
        setToggle(!toggle);
    };

    return (
        <div id='navdiv'>
            <RxHamburgerMenu id='burger-menu' onClick={handleBurger} />
            <nav className={`header ${toggle ? 'show' : ''}`}>
                <Link to="/" onClick={() => setToggle(false)}>ACCUEIL</Link>
                <Link to="/projects" onClick={() => setToggle(false)}>MES PROJETS</Link>
                <Link to="/contact" onClick={() => setToggle(false)}>CONTACT</Link>
            </nav>
        </div>
    );
};

export default Header;