import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Homepage from "./pages/Home/Homepage";
import Hotel from './pages/hotel/Hotel';
import HotelList from "./pages/list/HotelList";
import Signup from "./Components/signup/Signup";
import Signin from "./Components/signin/Signin";

import { auth } from "./firebase";
import Flights from "./Components/flights/Flights";
import Taxi from "./Components/taxi/Taxi";
import Rentcar from "./Components/carRent/Rentcar";

function App() {

  const[userName, setUserName] = useState("");

  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName)
      }else setUserName("");
      console.log(user);
    });
  })

  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Homepage name={userName}/>} />
      <Route path='/hotels' element={<HotelList />} />
      <Route path='/hotels/:id' element={<Hotel />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/catchflight' element={<Flights />} />
      <Route path='/catchtaxi' element={<Taxi />} />
      <Route path='/rentcar' element={<Rentcar />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
