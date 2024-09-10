import Header from "./Header";
import Footer from "../components/Footer";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

function CompactHeader({ children, ...props }) {
    const { setLoggedIn, loggedIn, email } = props
    return ( 
        <div>
            <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} email={email} />
            <div className="container">
                <div className="content"> 
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
     );
}

export default CompactHeader;