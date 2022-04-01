import React, { Fragment } from "react";
import './App.css';

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Gheader from "./components/goals/g_header";
import Firstpage from "./components/firstpage";


function App() {

  return (
    <Fragment>
      <BrowserRouter>


        <Routes>

          <Route path="/" element={<Firstpage />} />
          <Route path="/dashboard" element={<Gheader />} />

        </Routes>

      </BrowserRouter>


    </Fragment>

  );

}


export default App;


