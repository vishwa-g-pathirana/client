import React, { Fragment } from "react";
import NavBar from "./navbar/navbar";
import Header from "./header/header";
import Adds from "./Fextures/adds";
import Vission from "./vission/vission";
import Mission from "./mission/mission";
import Footer from "./footer/footer";
import StratergicTerms from "./strat terms/strat";
import Strat from "./strat terms/stratergy";

const Firstpage = () =>{
    return <Fragment>
        <NavBar />
      
      <Adds />
      <Vission />
      <Mission />
      <Strat />
      <StratergicTerms />
     

    </Fragment>
}
export default Firstpage