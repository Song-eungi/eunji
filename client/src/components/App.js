import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import BmiCal from "./views/Pagecontents/Bmi/BmiCal.js";
import Nutrients from "./views/Pagecontents/Nutrients/Nutrients.js";
import Goodfood from "./views/Pagecontents/Goodfood/Goodfood.js";
import AdminDashboard from "./views/Pagecontents/category/AdminDashboard.js";
import HotelsName from "./views/Pagecontents/Hotels/HotelsName.js";
import Main from "./views/Pagecontents/Board/main.js";
import list from "./views/Pagecontents/Board/list.js";
import view from "./views/Pagecontents/Board/view.js";

//import AdminDashboard from './views/Pagecontents/category/originAdminDashboard.js';


import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <BrowserRouter>
        <NavBar />
        <div>
          <Switch>

            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/bmical" component={Auth(BmiCal, null)}/>
            <Route exact path="/nutrients" component={Auth(Nutrients, null)}/>
            <Route exact path="/goodfood" component={Auth(Goodfood, null)}/>
            <Route exact path="/AdminDashboard" component={(AdminDashboard)}/>
            <Route exact path="/nut" component={(HotelsName)}/>
            <Route exact path="/write" component={(Main)}/>
            <Route exact path="/write/modify/:data" component={(Main)}/>
            <Route exact path="/list" component={(list)}/>
            <Route exact path="/view/:data" component={(view)}/>
   
            
  

          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
