import React from "react";
import "./flights.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";

const Flights =() =>{
    return(
        <div>
            <Navbar />
            <Header type="list" />
            <p className="bookflight">Coming Soon !! <br /> Catch Your Flights Immediately !</p>
        </div>
    )
}

export default Flights;