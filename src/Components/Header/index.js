import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
const Header =()=>{
    return(
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-skyblue">
                <div className="container text-center">
                    <p className="mt-0 mb-0">Due to the <b>Diwali Festival</b> Order may be face some dealys..</p>
                </div>
            </div>
            

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper col-sm-3"></div>
                            <Link to={'/'}> <img className="imgeas" src={Logo} alt="Logo"/> </Link>
                    </div>
                </div>

            </div>


        </div>
        </>
    )

};
export default Header;