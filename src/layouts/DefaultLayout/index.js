import Header from "./Header";
import Footer from "../components/Footer";
import Category from "./Category";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

function DefaultLayout({ children, ...props }) {
    const { setLoggedIn, loggedIn, email } = props

    return (
        <div>
            <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} email={email} />
            <Header />
            <div className="container" style={{}}>
                <div>
                    <Category />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;