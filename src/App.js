import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import {Main} from  "./component/main";
import {Login} from  "./component/login";
import { Signup } from "./component/signup";
import {MyComponent} from "./component/meals";
import { Navbar } from "./comp/navbar";
import { About } from "./component/About";

 function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/meals" element={<MyComponent/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
