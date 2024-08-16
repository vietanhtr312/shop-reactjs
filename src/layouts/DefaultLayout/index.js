import Header from "./Header";
import Footer from "../components/Footer";
import Category from "./Category";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container" style={{ marginBottom: 30 }}>
                <div>
                    <Category />
                    <div className="content"> {children} </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;