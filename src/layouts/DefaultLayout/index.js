import Header from "./Header";
import Footer from "../components/Footer";
import Category from "./Category";

function DefaultLayout({ children, ...props }) {
    const { setLoggedIn, loggedIn, email } = props

    return (
        <div>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} email={email}/>
            <div className="container" style={{}}>
                <div>
                    <Category />
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;