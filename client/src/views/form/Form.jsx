import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./form.module.css";
const Form = () => {
  const types = useSelector((state) => state.types.types);
  const [formValues, setFormValues] = useState({
    name: "",
    attack: 0,
    life: 0,
    defense: 0,
    speed: 0,
    weight: 0,
    height: 0,
    types: [],
    image: "",
  });
  //its an empty object that gets filled if there are validation errors.
  const [formErrors, setFormErrors] = useState({});
  const [showSubmit, setShowSubmit] = useState(true);
  const initialLoad = useRef(true);

  // console.log(types);
  // console.log("formErrors", formErrors);
  console.log("showSubmit", showSubmit);

  useEffect(() => {
    console.log("formvalues", formValues);

    console.log("formerrors", formErrors);
    console.log("showSubmit", showSubmit);
    console.log("error length", Object.keys(formErrors).length === 0);
    console.log("error length", Object.keys(formErrors).length);
    console.log("initialLoad.current", initialLoad.current);
    if (initialLoad.current === false) {
      console.log("one");
      if (Object.keys(formErrors).length === 0) {
        console.log("two");
        setShowSubmit(false); //ables button if formerrors is empty
        // initialLoad.current = false;
      }
    }
  }, [formErrors]);

  useEffect(() => {
    initialLoad.current = false;
  }, [formValues]);

  //changes the state and refreshes preview
  const handleChange = (e) => {
    console.log("e.target.name:", e.target.name);
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

    setFormErrors(
      validateForm({
        ...formValues,
        [e.target.name]: e.target.value,
      })
    );
  };

  const validateForm = (values) => {
    let errors = {};
    // console.log("errors life", values.life > 150);
    // console.log("errors attack", values.attack > 150);
    // not empty
    if (!values.name) {
      errors.name = "Name cannot be empty";
    } else if (values.name.length > 20) {
      errors.name = "Name has to be less than 20 char";
    } else if (!/^[a-zA-Z]+$/.test(values.name)) {
      errors.name = "Name can only have letters";
    } // not longer than 50 chars

    if (!values.life) {
      errors.life = "life cannot be empty";
    } else if (values.life < 0 || values.life > 150) {
      errors.life = "Life between 0 - 150";
    }
    if (!values.attack) {
      errors.attack = "Attack cannot be empty";
    } else if (values.attack < 0 || values.attack > 150) {
      errors.attack = "Attack has to be higher than 0 and less than 150";
    }
    if (!values.defense) {
      errors.defense = "defense cannot be empty";
    } else if (values.defense < 0 && values.defense > 150) {
      errors.defense = "Defense has to be higher than 0 and less than 150";
    }
    if (!values.weight) {
      errors.weight = "weight cannot be empty";
    } else if (values.weight < 0 && values.weight > 150) {
      errors.weight = "Weight has to be higher than 0 and less than 150";
    }
    if (!values.height) {
      errors.height = "height cannot be empty";
    } else if (values.height < 0 && values.height > 150) {
      errors.height = "Height has to be higher than 0 and less than 150";
    }
    if (!values.image) {
      errors.image = "image cannot be empty";
    } else if (
      !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(values.image)
    ) {
      errors.image = "Must any of these formats jpg|jpeg|png|webp|avif|gif|svg";
    }
    if (!values.types) {
      console.log(values.types.length);
      errors.types = "types cannot be empty";
    } else if (values.types.length > 3) {
      errors.types = "3 types max";
    }

    // just letters
    return errors;
  };

  const handleReset = () => {
    setFormValues({
      name: "",
      attack: 0,
      life: 0,
      defense: 0,
      speed: 0,
      weight: 0,
      height: 0,
      types: [],
      image: "",
    });
    setShowSubmit(true);
    initialLoad.current = true;
  };
  // submits data directly to database
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/pokemons", formValues);
      console.log("formValues submitted", formValues);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
      setShowSubmit(true);
      setFormValues({
        name: "",
        attack: 0,
        life: 0,
        defense: 0,
        speed: 0,
        weight: 0,
        height: 0,
        types: [],
        image: "",
      });
    }
    // setformValues({
    //   name: "",
    //   attack: 0,
    //   life: 0,
    //   // defense: 0,
    //   // speed: 0,
    //   // weight: 0,
    //   // height: 0,
    //   // types: [],
    //   // image: "",
    // });
  };

  const handleTypesChange = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      types: [...formValues.types, e.target.value.toLowerCase()],
    });
  };
  // console.log(formValues);

  return (
    <div className={styles.container}>
      <form>
        <h1>Create Pokemon</h1>
        <section>
          <div className={styles.input_container}>
            <div className={styles.input_sections}>
              <article>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={formValues.name}
                />{" "}
                <p>{formErrors.name}</p>
              </article>{" "}
              <article>
                <label htmlFor="life">Life</label>
                <input
                  type="number"
                  id="life"
                  onChange={handleChange}
                  name="life"
                  value={formValues.life}
                />{" "}
                <p>{formErrors.life}</p>
              </article>{" "}
              <article>
                <label htmlFor="attack">Attack</label>
                <input
                  type="number"
                  id="attack"
                  onChange={handleChange}
                  name="attack"
                  value={formValues.attack}
                />
                <p>{formErrors.attack}</p>
              </article>
              <article>
                <label htmlFor="speed">Speed</label>
                <input
                  type="number"
                  id="speed"
                  onChange={handleChange}
                  name="speed"
                  value={formValues.speed}
                />{" "}
                <p>{formErrors.speed}</p>
              </article>{" "}
              <article>
                <label htmlFor="defense">Defense</label>
                <input
                  type="number"
                  id="defense"
                  onChange={handleChange}
                  name="defense"
                  value={formValues.defense}
                />{" "}
                <p>{formErrors.defense}</p>
              </article>{" "}
            </div>
            <div className={styles.input_sections}>
              <article>
                <label htmlFor="weight">Weight</label>
                <input
                  type="number"
                  id="weight"
                  onChange={handleChange}
                  name="weight"
                  value={formValues.weight}
                />{" "}
                <p>{formErrors.weight}</p>
              </article>{" "}
              <article>
                <label htmlFor="height">Height</label>
                <input
                  type="number"
                  id="height"
                  onChange={handleChange}
                  name="height"
                  value={formValues.height}
                />{" "}
                <p>{formErrors.height}</p>
              </article>{" "}
              <article>
                <label htmlFor="types">Types</label>
                <select
                  name="types"
                  id="types"
                  onChange={handleTypesChange}
                  className={styles.types_option}
                >
                  <option value="placeholder">Choose types</option>
                  {types?.map((t, i) => (
                    <option key={i} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </select>{" "}
                <p>{formErrors.types}</p>
              </article>{" "}
              <article>
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  id="image"
                  value={formValues.image}
                  onChange={handleChange}
                  name="image"
                />{" "}
                <p>{formErrors.image}</p>
              </article>{" "}
              <article>
                {" "}
                <label htmlFor="">image</label>
                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={showSubmit}
                    className={styles.submit_btn}
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    onClick={handleReset}
                    className={styles.reset_btn}
                  >
                    Clear
                  </button>{" "}
                </div>
              </article>{" "}
            </div>{" "}
          </div>{" "}
        </section>
      </form>
    </div>
  );
};
//image to create pokemon
// https://i.pinimg.com/736x/6c/60/3b/6c603b0cc007388ca4f00b2570c99c89.jpg
export default Form;
