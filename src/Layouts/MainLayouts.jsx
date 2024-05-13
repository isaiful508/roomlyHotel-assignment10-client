import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";


const MainLayouts = () => {
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Outlet */}
            <Outlet></Outlet>
            {/* Footer */}
            <Footer></Footer>


        </div>
    );
};

export default MainLayouts;