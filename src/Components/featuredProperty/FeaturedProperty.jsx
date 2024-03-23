import "./featuredProperty.css"
import React from "react";

const FeaturedProperty =() =>{
    return(
        <div className="fp">
            <div className="fpItem">
            <img src="https://lh3.googleusercontent.com/p/AF1QipPWS0CA9MotIBPNAf0Gt5AY5dllQw6d96AxCyvs=s1360-w1360-h1020" alt="" className="fpImg"/>
            <span className="fpName">Hotel Oberoi</span>
            <span className="fpCity">Bengluru</span>
            <span className="fpPrice">Starting from Rs.15,000</span>
            <div className="fpRating">
                <button>10</button>
                <span>Outstanding</span>
            </div>
            </div>
            <div className="fpItem">
            <img src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Lake_Palace_Udaipur/images/gallery/AAG_Exterior1w-3x2_1_1.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg" alt="" className="fpImg"/>
            <span className="fpName">Hotel Taj</span>
            <span className="fpCity">Udaipur</span>
            <span className="fpPrice">Starting from Rs.12,000</span>
            <div className="fpRating">
                <button>9.4</button>
                <span>Excellent</span>
            </div>
            </div>
            <div className="fpItem">
            <img src="https://lh3.googleusercontent.com/p/AF1QipNvUQbv_qOa94ps8rFnjL9S0bm6dLuQMYBmd8OQ=s1360-w1360-h1020" alt="" className="fpImg"/>
            <span className="fpName">The Leela Ambience</span>
            <span className="fpCity">Gurugram</span>
            <span className="fpPrice">Starting from Rs.18,000</span>
            <div className="fpRating">
                <button>9.5</button>
                <span>Excellent</span>
            </div>
            </div>
            <div className="fpItem">
            <img src="https://lh3.googleusercontent.com/p/AF1QipNlzIpRUU6TP8wzpry-8psL-L9CehsP1rTu88tw=s1360-w1360-h1020" alt="" className="fpImg"/>
            <span className="fpName">ITC Royal Bengal</span>
            <span className="fpCity">Kolkata</span>
            <span className="fpPrice">Starting from Rs.10,500</span>
            <div className="fpRating">
                <button>10</button>
                <span>Outstanding</span>
            </div>
            </div>
        </div>
    )
}

export default FeaturedProperty