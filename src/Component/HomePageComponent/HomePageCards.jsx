import React from "react";
import Card from "react-bootstrap/Card";
import { Data } from "../../Data/Data";
import { Link } from "react-router-dom";

function HomePageCards() {
  console.log(Data);
  const Movies = ["Film", "Dizi"];
  return (
    <div className="home-page-card-grid">
      {Movies.map((items, index) => {
        return (
          <Card key={index} style={{ width: "10rem", border: "none" }}>
            <Card.Img
              variant="top"
              src={Data.entries[index].images.PosterArt.url}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                <Link
                  to={`/${items}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "lighter",
                  }}
                >
                  {items}
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default HomePageCards;
