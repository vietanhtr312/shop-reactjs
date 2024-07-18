import Header from "./Header";
import Footer from "../components/Footer";

function CompactHeader({ children }) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
            <Footer />
        </div>
     );
}

export default CompactHeader;