import { Outlet } from "react-router-dom";
import Navber from "../Pages/Navber";
// import { useState } from "react";


const Root = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleTheme = () => {
    //     setIsDarkMode(!isDarkMode);
    //   };

    return (

        <div>
            
            <div className="max-w-screen-2xl mx-auto bg-[#F5F6F7]">
                <div className="">
                    <Navber></Navber>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;