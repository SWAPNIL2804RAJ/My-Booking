import React from "react";
import "./rentcar.css";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";

const Rentcar =() =>{
    return(
        <div>
            <Navbar />
            <Header type="list" />
            <p className="rentcar"> Coming Soon !! <br />Rent You Favourite Car ! </p>
        </div>
    )
}

export default Rentcar;