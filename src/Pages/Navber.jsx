import { NavLink } from "react-router-dom";
import './Navber.css'

const Navber = () => {
    const links = <>
    <li><NavLink className='mr-4' to='/'>Home</NavLink></li>
    <li><NavLink className='mr-4' to='/addproduct'> Add Product</NavLink></li>
    <li><NavLink className='mr-4' to='/mycart'>My Cart</NavLink></li>
    <li><NavLink className='mr-4' to='/login'>Login</NavLink></li>
    <li><NavLink className='mr-4' to='/register'>Register</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-[#FFFFFF] shadow md:px-44 py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navber;