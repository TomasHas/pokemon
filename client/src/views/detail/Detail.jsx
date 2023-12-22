import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom/";
import { getPokemonById } from "../../features/pokemons/pokemonSlice";
import styles from "./detail.module.css";
const Detail = () => {
  const pokeID = useParams();
  const dispatch = useDispatch();
  let id = pokeID.id;
  // console.log(id);
  const detail = useSelector((state) => state.pokemon.pokemonDetail);
  console.log("detail", typeof detail.type);

  useEffect(() => {
    // console.log("detailid", id);
    dispatch(getPokemonById(id));
  }, [dispatch, id]);
  return (
    <section className={styles.container}>
      <article>
        <img src={detail.image} alt={detail.name} />
      </article>
      <section className={styles.info_content}>
        <h1>{detail.name}</h1>
        <article className={styles.info_items}>
          <h3>ID : </h3> <h3>{detail.id}</h3>
        </article>
        <article></article>
        <article className={styles.info_items}>
          <h3>HEIGHT : </h3>
          <h3>{detail.height}</h3>
        </article>
        <article className={styles.info_items}>
          <h3>SPEED : </h3>
          <h3>{detail.speed}</h3>
        </article>
        <article className={styles.info_items}>
          <h3>WEIGHT : </h3> <h3>{detail.weight}</h3>
        </article>
        <article className={styles.info_items}>
          {" "}
          <h3>LIFE : </h3>
          <h3>{detail.life}</h3>
        </article>{" "}
        <article className={styles.info_items}>
          {" "}
          <h3>ATTACK : </h3>
          <h3>{detail.attack}</h3>
        </article>{" "}
        <article className={styles.info_items}>
          {" "}
          <h3>DEFENSE :</h3> <h3>{detail.defense}</h3>
        </article>{" "}
        <article className={styles.info_items}>
          {" "}
          <h3>TYPE :</h3> <h3>{detail.type}</h3>
        </article>
      </section>
    </section>
  );
};

export default Detail;
