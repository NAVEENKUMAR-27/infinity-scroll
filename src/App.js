import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeRoute } from './Components/Routing/Home';
import { AboutRoute } from './Components/Routing/About';
import { ContactRout } from './Components/Routing/Contact';
import { NavBar } from './Components/Routing/NavBar';
import { ErrorPage } from './Components/Routing/ErrorPage';
import { UrlChange } from './Components/Routing/UrlChange';
import { DetailPage } from './Components/Routing/Datashow';


function App() {
  return (
    <>
   {/* <Home/> */}

      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={[<NavBar />,<HomeRoute />]} />
          <Route path="/About" element={[<NavBar />,<AboutRoute />]} />
          <Route path="/Contact" element={[<NavBar />,<ContactRout />]} />
          <Route path="/Url" element={[<NavBar />,<UrlChange/>]} />
          <Route path="/detail/:id" component={[<DetailPage/>]} />
          <Route path="*" element={[<ErrorPage/>]} />


        </Routes>
      </BrowserRouter>

      



    </>)
}

export default App;
