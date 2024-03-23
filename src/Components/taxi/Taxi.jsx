import React from "react";
import "./taxi.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";

const Taxi =() =>{
    return(
        <div>
            <Navbar />
            <Header type="list" />
            <p className="taxibook"> Coming Soon !! <br />Hurry Up..... Book Your Taxi to Airport Immediately.</p>
        </div>
    )
}

export default Taxi;
