import React from "react";
import { Data } from "../../Data/Data";
import Card from "react-bootstrap/Card";

function MoviePageCard({ search }) {
  console.log(Data);
  const entries = Data.entries;
  const Movies = entries.filter((items) => {
    return items.programType === "movie";
  });
  return (
    <div className="movies-grid">
      {Movies.filter((item) => {
        return search.toLowerCase() === ""
          ? item
          : item.title.toLowerCase().includes(search);
      }).map((items, index) => {
        return (
          <Card key={index}>
            <Card.Img variant="center" src={items.images.PosterArt.url} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                {items.title}
              </Card.Title>
              <Card.Text>{items.description.substring(0, 26)}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default MoviePageCard;
