import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { calculateZeros } from "../../utils/calculateZeros";
function Card({ name, image, type, id }) {
  // console.log(typeof id);
  const [number, setNumber] = useState("");

  // useEffect(() => {
  //   if (id > 0 && id < 10) {
  //     setNumber(() => "000".concat(id));
  //   }
  //   if (id > 1 && id < 100) {
  //     setNumber(() => "00".concat(id));
  //   }
  //   if (id > 100 && id < 1000) {
  //     setNumber(() => "0".concat(id));
  //   }
  //   if (id > 1000 && id < 10000) {
  //     setNumber(() => "".concat(id));
  //   }
  // }, [id]);

  useEffect(() => {
    setNumber(calculateZeros(id));
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        {" "}
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.info_container}>
        <h3 className={styles.id}>N.°{number}</h3>
        <h2>
          <p className={styles.capitalize_first}>{name}</p>
        </h2>
        <div className={styles.name_type}>
          <ul className={styles.list_container}>
            {type?.map((e, i) => (
              <li key={i}>
                <h3>{e}</h3>
              </li>
            ))}
          </ul>
        </div>
        <Link to={`/pokemons/${id}`}>
          <h3 className={styles.more}>More +</h3>
        </Link>
      </div>
    </div>
  );
}

export default Card;
