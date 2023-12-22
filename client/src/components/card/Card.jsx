import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
function Card({ name, image, type, id }) {
  // console.log(typeof id);
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        {" "}
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.info_container}>
        <h3 className={styles.id}>N° {id}</h3>

        <br />
        <div className={styles.name_type}>
          <h2>
            <p className={styles.capitalize_first}>{name}</p>
          </h2>
          <ul className={styles.list_container}>
            {type.map((e, i) => (
              <li key={i}>
                <h3>{e}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link to={`/pokemons/${id}`}>More details</Link>
    </div>
  );
}

export default Card;
