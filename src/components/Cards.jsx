import React from "react";
import Card from "./Card";
import { films } from "../data";
const Cards = () => {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            {films.map(({ id, img, title, text, num ,col}) => (
              <Card key={id} img={img} title={title} text={text} num={num} col={col}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
