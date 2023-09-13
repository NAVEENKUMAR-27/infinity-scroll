import './App.css';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { HomeRoute } from './Components/Routing/Home/Home';
import { AboutRoute } from './Components/Routing/Home/About';
import { ContactRout } from './Components/Routing/Home/Contact';
import { NavBar } from './Components/Routing/NavBar/NavBar';
import { ErrorPage } from './Components/Routing/Home/ErrorPage';
import { UrlChange } from './Components/Routing/UrlParameter/UrlChange';
import { DetailPage } from './Components/Routing/UrlParameter/Datashow';
import { Error_path, Home_path, About_path, Contact_path, Url_path, Detail_path, Query_path, Login_path, Infinity_path } from './Components/Routing/Path/RoutingPath';
import { ProtectRoute } from './Components/Routing/ProtectUrl/ProtectRout';
import { Login } from './Components/Routing/Home/Login';
import QueryUrl from './Components/Routing/Home/QueryUrl';
import { InfinityTask } from './Components/Home';
import FetchData from './APIFetch/FetchData';
import { HomeAuth } from './FireBase/Home';
import { RegisterAuth } from './FireBase/Register';
import { LoginAuth } from './FireBase/Login';
import { useState } from 'react';




function App() {

  const [userName,setUserName]=useState("Guest")
  return (
    <>


      {/* <Router>
        <Routes>
          <Route path={Login_path} element={<Login />} />
          <Route path={Login_path} element={<ProtectRoute />}>
            <Route path={Home_path} element={[<NavBar />, <HomeRoute />]} />
            <Route path={About_path} element={[<NavBar />, <AboutRoute />]} />
            <Route path={Contact_path} element={[<NavBar />, <ContactRout />]} />
            <Route path={Url_path} element={[<NavBar />, <UrlChange />]} />
            <Route path={Infinity_path} component={[<NavBar />,<InfinityTask/>]} />
            <Route path={Detail_path} component={[<DetailPage />]} />
            <Route path={Query_path} element={[<NavBar />, <QueryUrl />]} />
          </Route>
          <Route path={Error_path} element={[<ErrorPage />]} />
        </Routes>
      </Router> */}

      {/* <FetchData/> */}
      

      
      <Router>
        <Link to="/"><h3>Home</h3></Link>&nbsp;<Link to="/Login"><h3>Login</h3> </Link>&nbsp; <Link to="/Reg"><h3>Register</h3></Link> 
        <Routes>
          <Route path="/" element={<HomeAuth user={userName} setUserName={setUserName} />} />
          <Route path="/Login" element={[<LoginAuth   user={userName} setUserName={setUserName}/>]} />
          <Route path="/Reg" element={[<RegisterAuth />]} />
          <Route path="*" element={<Navigate to="/"/>} />


        </Routes>
      </Router>



 











    </>)
}

export default App;

