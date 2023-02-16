import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import SubTitle from "../Component/Subtitle/SubTitle";
import "../Css/Container/Container.css";
import "../Css/SubTitle/Subtitle.css";

function Container() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <SubTitle />
      </div>
    </div>
  );
}

export default Container;
