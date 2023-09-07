import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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




function App() {
  return (
    <>
    

      <Router>
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
      </Router>

      














    </>)
}

export default App;

