import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom/";
import { getPokemonById } from "../../features/pokemonSlice";
import styles from "./detail.module.css";
import { calculateZeros } from "../../utils/calculateZeros";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/";

const Detail = () => {
  const [number, setNumber] = useState("");
  const pokeID = useParams();
  const dispatch = useDispatch();
  const id = parseInt(pokeID.id);
  console.log(id);
  const detail = useSelector((state) => state.pokemon.pokemonDetail);
  const pokemons = useSelector((state) => state.pokemon.pokemons);

  const [previous, setPrevious] = useState({ name: "", id: 0 });
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const [next, setNext] = useState({ name: "", id: 0 });

  const history = useHistory();

  const buttonOpacityPrev = prevDisabled === false;
  const buttonOpacityNext = nextDisabled === false;

  console.log("pokemons1", pokemons);
  console.log("current", detail);
  console.log("previous", previous);
  console.log("next", next);

  const handlePrevious = () => {
    const previousPokemon = pokemons?.find((p) => {
      return p.id === id - 1;
    });
    console.log("previousPokemon", previousPokemon);
    if (previousPokemon) {
      setPrevDisabled(false);

      setPrevious({
        name: previousPokemon.name,
        id: calculateZeros(previousPokemon.id),
      });
    } else {
      // Handles case where no previous Pokemon is found (e.g., at the beginning of the list)
      if (id - 1 === 0) {
        setPrevious({ name: "No Previous Pokemon", id: 0 });
        setPrevDisabled(true);
      }
    }
  };
  const handleNext = () => {
    const nextPokemon = pokemons?.find((p) => {
      return p.id === id + 1;
    });

    if (nextPokemon) {
      setNextDisabled(false);

      setNext({ name: nextPokemon.name, id: calculateZeros(nextPokemon.id) });
    } else {
      console.log(pokemons.length);
      if (id + 1 >= pokemons.length) {
        setNext({ name: "No next Pokemon", id: 0 });
        setNextDisabled(true);
      }
    }
  };

  const handlePreviousClick = (e) => {
    e.preventDefault();
    return history.push(`/pokemons/${id - 1}`);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    return history.push(`/pokemons/${id + 1}`);
  };

  useEffect(() => {
    // console.log("detailid", id);
    setNumber(calculateZeros(id));
    dispatch(getPokemonById(id));
    handlePrevious();
    handleNext();
  }, [dispatch, id]);

  return (
    <section className={styles.container}>
      <div className={styles.prev_next_container}>
        <div className={styles.prev_container}>
          <div className={styles.prev_info}>
            <p className={styles.title}>{previous?.name}</p>{" "}
            <p>N.° {previous?.id}</p>
          </div>

          <button
            onClick={handlePreviousClick}
            className={styles.prev_btn}
            disabled={prevDisabled}
          >
            <div
              className={
                buttonOpacityPrev
                  ? styles.arrow_prev_container
                  : styles.arrow_prev_container_disabled
              }
            >
              <div className={styles.arrow_left}></div>{" "}
              <h3 className={styles.more}>PREVIOUS</h3>
            </div>
          </button>
        </div>

        <div className={styles.next_container}>
          <button
            onClick={handleNextClick}
            className={styles.next_btn}
            disabled={nextDisabled}
          >
            <div
              className={
                buttonOpacityNext
                  ? styles.arrow_next_container
                  : styles.arrow_next_container_disabled
              }
            >
              <h3 className={styles.more}>NEXT</h3>
              <div className={styles.arrow_right}></div>
            </div>
          </button>

          <div className={styles.next_info}>
            <p className={styles.title}>{next?.name}</p> <p>N.° {next?.id}</p>
          </div>
        </div>
      </div>

      <section className={styles.info_content}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>{detail.name}</h1>

          <div className={styles.id}>
            <h3>N.° </h3>
            <h3>{number}</h3>
          </div>
        </div>{" "}
        <div className={styles.image_stats_container}>
          <div className={styles.image_container}>
            {" "}
            <img className={styles.img} src={detail.image} alt={detail.name} />
          </div>
          <div className={styles.stats_container}>
            <div className={styles.right_side}>
              {" "}
              <article className={styles.stats_items}>
                <h4>Life</h4>
                <p>{detail.life}</p>
              </article>
              <article className={styles.type}>
                <h4>Types</h4>{" "}
                <ul>
                  {detail.types?.map((t, i) => (
                    <li key={i}> {t}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className={styles.left_side}>
              {" "}
              <article className={styles.stats_items}>
                <h4>Speed</h4>
                <p>{detail.speed}</p>
              </article>
              <article className={styles.stats_items}>
                <h4>Height </h4>
                <p>{detail.height} m</p>
              </article>
              <article className={styles.stats_items}>
                <h4>Weight</h4> <p>{detail.weight} lbs</p>
              </article>
              <article className={styles.stats_items}>
                <h4>Attack</h4>
                <p>{detail.attack}</p>
              </article>
              <article className={styles.stats_items}>
                <h4>Defense</h4> <p>{detail.defense}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Detail;
