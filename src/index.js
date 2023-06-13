import React from "react";
import '../src/assets/main.css';
import '../src/assets/tailwind.css';
import  ReactDOM  from "react-dom/client";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/AboutMe";
import { Proyects } from "./components/Proyects";
import { Empresas } from "./components/Companies";
import { Expertise } from "./components/expertise";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <Navbar></Navbar>
        <AboutMe></AboutMe>
        <Proyects></Proyects>
        <Empresas></Empresas>
        <Expertise></Expertise>
    </>
)