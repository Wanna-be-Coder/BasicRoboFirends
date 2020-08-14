import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  return (
    <div>
      {robots.map((details) => {
        return (
          <Card
            id={details.id}
            name={details.name}
            email={details.email}
            key={details.name}
          />
        );
      })}
    </div>
  );
}

export default CardList;
