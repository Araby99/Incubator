import './nav.css';
import { BrowserRouter, Link } from 'react-router-dom';

const Nav = () => {
    let menu = false;
    function nav() {
        if (menu == false) {
            document.getElementById("nav").style.height = "450px";
            menu = true;
        } else if (menu == true) {
            document.getElementById("nav").style.height = "156px";
            menu = false;
        }
    }
    return (
        <nav id="nav">
            <div className="logo">
                <img src="assets/logo.png" alt="Logo" />
                <div className="bars" onClick={nav}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Intern">Intern</Link>
                    </li>
                    <li><a href="/#about">about us</a></li>
                    <li><a href="/#contact">contact us</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;