const {
  // getPokemonsInfoMainRoute,
  getAllPokemonsApi,
  getPokemonByNameApi,
  getPokemonById,
} = require("../controllers/pokemonController");

const { Pokemon } = require("../db");

const getPokemons = async (req, res) => {
  const { name } = req.query;

  try {
    const pokeByName = await getPokemonByNameApi(name);

    const apiData = await getAllPokemonsApi();
    const dbData = await Pokemon.findAll({
      // attributes: ["name", "types", "image"],
    });
    const response = [...apiData, ...dbData];

    if (name) {
      const dbDataName = await Pokemon.findOne({
        where: { name: name },
        // attributes: ["name", "types", "image"],
      });

      if (dbDataName) {
        return res.status(200).send(dbDataName);
      } else {
        return res.status(200).send(pokeByName);
      }
    }

    return res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getById = async (req, res) => {
  const { idPokemon } = req.params;
  try {
    const pokemonById = await getPokemonById(idPokemon);
    res.status(200).send(pokemonById);
  } catch (error) {
    console.log("errer");
    res.status(400).send(error.message);
  }
  // try {
  //   const pokebyId = await getPokemonByIdApi(idPokemon);
  //   if (pokebyId) return res.status(200).send(pokebyId);
  //   return res.status(200).send(dbById);
  // } catch (error) {
  //   console.log("errer");
  //   res.status(400).send(error.message);
  // }
};

const createPokemon = async (req, res) => {
  const { name, types, image, life, attack, defense, speed, height, weight } =
    req.body;
  try {
    const pokeCreate = await Pokemon.create({
      name,
      types,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
    });
    res.status(200).send(pokeCreate);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  getPokemons,
  getById,
  createPokemon,
};
