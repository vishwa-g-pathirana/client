import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Gheader from "../goals/g_header";
import { BrowserRouter as Switch, Route, BrowserRouter, Router, Routes } from "react-router-dom";
import Roots from "../../routes"


const NavBar = () => {
    return <Fragment>
         
        <div class="sticky-top">
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">

                <a class="navbar-brand" href="#">Example.org</a>


                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/themes">Vission</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                      
                    </ul>
                </div>
            </nav>
        </div>
    </Fragment>

};
export default NavBar;
