import React from "react";
import Input from "./interactionComponents/Input";
import HomeFooterImage from "../assets/HomeFooterImage.png";

const HomeFooter = ({}) => {
    return (
        <div className=" flex px-40 p-9 mt-20 bg-black text-white flex-wrap absolute bottom-0 w-full items-center">
            <div className=" flex-col">
                <div className="text-2xl font-bold w-72" style={{lineBreak:"strict"}}>
                    Find the home you deserve
                </div>
                <div className="text-md py-6 w-72" style={{lineBreak:"strict"}}>
                Begin browsing now
                </div>
                <div className="text-black">
                    <Input />
                </div>
            </div>
            <div className="w-60 ml-auto">
                <img
                    src={HomeFooterImage} 
                />
            </div>
        </div>
    )
};

export default HomeFooter;
