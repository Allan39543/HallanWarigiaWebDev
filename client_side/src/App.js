import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import RegistrationPanel from './components/Registration/RegistrationPanel';
import AdminPanel from './components/Registration/RegistrationPanel';
import TopFourEvents from './components/TopFourEvents';
import {Route,Routes} from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Events from './components/Events';
import YourEvents from './components/YourEvents';
import MyBkEvents from './components/MyBkEvents';
import { useLocation } from "react-router-dom";
export const UserContext=React.createContext()


function App() {

  const location = useLocation();

  const [user, setUser] = useState(null)

  const getUser = async () => {
		try {
      
			
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
		   setUser(data.user._json);
    }
    catch(err){

console.log(err)

    }
  }

  useEffect(() => {
		getUser();
    
	}, []);


// useEffect(() => {
  
//   const searchParams = new URLSearchParams(location.search);
//   const userData = searchParams.get("userData");

  
//   if (userData) {
//     const userDataObject = JSON.parse(decodeURIComponent(userData));
//     setUser(userDataObject);
//     console.log("User data:", userDataObject);
    
    
//   }
// }, [location.search]);


console.log("user",user)

  return (
    <>
<UserContext.Provider  value={user}>

<Header />

      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/registration" element={<RegistrationPanel />} />

      <Route path="/events" element={<Events />} />
      <Route path="/yourevents" element={<YourEvents />} />
      <Route path="/savedevents" element={<MyBkEvents />} />
      </Routes>

      {/* <Landing /> */}
      {/* <TopFourEvents /> */}
      <Footer />
      </UserContext.Provider>

    </>
  );
}

export default App;
