import React from "react";

const NavBar = ({}) => {
    return (
        <div className="flex text-white bg-black py-4 px-3 flex-wrap">
            <div className=" mr-auto">
                Dashboard
            </div>
            <div className="flex gap-5 flex-wrap">
                <div className=" mr-auto flex-wrap">
                    Home
                </div>
                <div className=" mr-auto flex-wrap">
                    About
                </div>  <div className=" mr-auto flex-wrap">
                    Contact Us
                </div>
                <div className=" mr-auto">
                    Login
                </div>
                <div className=" mr-auto border-2 rounded-full px-2">
                    Get Started
                </div>
            </div>
        </div>
    )
};

export default NavBar