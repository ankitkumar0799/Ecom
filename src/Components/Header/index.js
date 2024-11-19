import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import CountryDropdown from "../CountryDropdown/index.js";



const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-skyblue">
                    <div className="container">
                        <p className="mt-0 mb-0 text-center">Due to the <b>Diwali Festival</b> Order may be face some dealys..</p>
                    </div>
                </div>

                <div className="header">
                    <div className="container d-flex  align-items-center">
                        <div className="logoWrapper">
                            <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                        </div>


                        <div className="part2">
                            <CountryDropdown />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
