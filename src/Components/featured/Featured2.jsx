import "./featured.css";

const Featured2 =() =>{
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src="https://plus.unsplash.com/premium_photo-1697729439457-85d4b9d3a2cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="featuredImg" alt=""/>                                
                <div className="featuredTitles2">
                    <h1>Rishikesh</h1>
                    <h1>Lord of the Senses</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="featuredImg" alt=""/>                                
                <div className="featuredTitles2">
                    <h1>Delhi</h1>
                    <h1>"Foodies Heaven"</h1>
                </div>
            </div>
        </div>
    )
}

export default Featured2;