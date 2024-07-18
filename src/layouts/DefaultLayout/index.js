import Header from "./Header";
import Footer from "../components/Footer";
import Category from "./Category";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container" style={{ margin: 30 }}>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-2">
                            <Category />
                        </div>
                    </div>
                </div>
                <div className="content"> {children} </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;