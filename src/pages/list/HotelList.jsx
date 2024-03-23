import React from "react";
import "./hotelList.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";

const HotelList =() =>{
    return(
        <div>
            <Navbar />
            <Header type="list" />
            <p className="bookholtellist">Coming Soon! <br /> Hotels will be available Soon !</p>
        </div>
    )
}

export default HotelList;