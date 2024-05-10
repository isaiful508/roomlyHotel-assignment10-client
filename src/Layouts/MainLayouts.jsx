import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


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


        </div>
    );
};

export default MainLayouts;