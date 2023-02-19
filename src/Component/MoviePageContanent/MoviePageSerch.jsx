import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function MoviePageSerch() {
  return (
    <div className="serch">
      <div className="serch-input">
        <input type="text" placeholder="Film/Dizi/Oyuncu ara" />
      </div>
      <div className="serch-dropdown">
        <Dropdown>
          <Dropdown.Toggle className="dropdown" id="dropdown-basic">
            Sırala
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Yeniye Göre Sırala</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Eskiye Göre Sırala</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Puana Göre Sırala</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Rastgele Sırala</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default MoviePageSerch;
