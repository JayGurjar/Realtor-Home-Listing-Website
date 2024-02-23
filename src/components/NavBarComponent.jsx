import React from "react";
import Button from "./interactionComponents/Button";

const NavBar = ({ navigate }) => {
  return (
    <div className="flex text-white bg-black py-4 px-3 flex-wrap">
      <div className=" mr-auto">Dashboard</div>
      <div className="flex gap-5 flex-wrap">
        <div className=" mr-auto flex-wrap">Home</div>
        <div className=" mr-auto flex-wrap">About</div>
        <div className=" mr-auto flex-wrap">Contact Us</div>
        <div className=" mr-auto" onClick={() => navigate("login")}>
          Login
        </div>
        <Button onClick={() => navigate("listings")} title={"Get Started"} />
      </div>
    </div>
  );
};

export default NavBar;
