import React from "react";
import Card from "../card/Card";
import styles from "./cardContainer.module.css";
function CardContainer(pokeData) {
  // console.log(pokeData.data.map((e) => e.name));
  return (
    <div className={styles.container}>
      {pokeData.data.map((e, i) => (
        <Card key={i} name={e.name} image={e.image} type={e.type} id={e.id} />
      ))}
    </div>
  );
}

export default CardContainer;
