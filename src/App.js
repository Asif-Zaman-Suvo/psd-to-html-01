import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import OurDepartment from "./Components/OurDepartment/OurDepartment";
import Departments from "./Components/Departments/Departments";
import Information from "./Components/Information/Information";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";

function App() {
  return (

    <Router>
      <Switch>

        <Route>
          <Header></Header>
          <OurDepartment></OurDepartment>
          <Departments></Departments>
          <Information></Information>
          <Courses></Courses>
          <Footer></Footer>

        </Route>

      </Switch>

    </Router>
    
  );
}

export default App;
