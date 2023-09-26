import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import {Main} from  "./component/main";
import {Login} from  "./component/login";
import { Signup } from "./component/signup";
import { Navbar } from "./comp/navbar";

 function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
