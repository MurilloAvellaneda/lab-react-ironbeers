import homeImg from "../assets/home-icon.png";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header id="header">
        {
            // mudar a tag âncora para o componente Link do react
        }
            <Link to="/"><img src={homeImg} alt="home icon" id="header-img"/></Link>
        </header>
    );
}

export default Header;