import Header from "./Header";
import Footer from "../components/Footer";
import Category from "./Category";

function DefaultLayout({ children, ...props }) {
    return (
        <div {...props}>
            <Header />
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