import React from "react";
import NavBar from "./NavBarComponent";
import Body from "./Body";
import HomeFooter from "./HomeFooter";


const Home = () => {
    return (
        <div className="text-black text-lg">
            <div className="flex flex-col">
                <NavBar/>
                <Body/>
                <HomeFooter />
            </div>
        </div>
    )
}

export default Home