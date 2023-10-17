import { Outlet } from "react-router-dom";
import Navber from "../Pages/Navber";


const Root = () => {
    return (
        <div className="max-w-screen-2xl mx-auto bg-[#F5F6F7]">
            <div className="">
            <Navber></Navber>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;