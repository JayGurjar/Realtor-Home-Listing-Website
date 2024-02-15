import React from "react";
import NavBar from "./NavBarComponent";
import Body from "./Body";
import HomeFooter from "./HomeFooter";


const Home = ({navigate = () => {}}) => {
    return (
        <div className="text-black text-lg">
            <div className="flex flex-col">
                <NavBar navigate={navigate} />
                <Body navigate={navigate} />
                <HomeFooter navigate={navigate} />
            </div>
        </div>
    )
}

export default Home