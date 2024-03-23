import Header from "../../Components/header/Header";
import Featured from "../../Components/featured/Featured";
import Navbar from "../../Components/navbar/Navbar";
import Properties from "../../Components/properties/Properties";
import FeaturedProperty from "../../Components/featuredProperty/FeaturedProperty";
import MailList from "../../Components/mailList/MailList";
import Featured2 from "../../Components/featured/Featured2";
import Footer from "../../Components/footer/Footer";
import "./home.css";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <h1 className="top">Explore India</h1>
        <h2 className="topSubtitle">Top 3 Trending Destinations</h2>
        <Featured2 />
        <Featured />
        <h1 className="homeTitle">Stay At Our Top Unique Properties</h1>
        <h2 className="homeSubTitle">From castles and villas to boats and cabins, we've got it all</h2>
        <Properties/>
        <h1 className="stayHotels">Stay at Our Top Hotels</h1>
        <h2 className="hotelSubtitle">Hotels our visitors loved the most</h2>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;