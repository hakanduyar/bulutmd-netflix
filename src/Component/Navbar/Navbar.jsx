import React from "react";
import "../../Css/Navbar/Navbar.css";
function Navbar() {
  return (
    <div className="_navbar">
      <div className="navbar-left">
        <h1>BulutMD</h1>
      </div>
      <div className="navbar-right">
        <button className="login">Giriş</button>
        <button className="start-trial">Deneme Başlat</button>
      </div>
    </div>
  );
}

export default Navbar;
