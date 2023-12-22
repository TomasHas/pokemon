const { Router } = require("express");
const {
  getPokemons,
  getById,
  createPokemon,
} = require("../Handlers/pokemonHandler");

const pokemonsRouter = Router();


pokemonsRouter.get("/", getPokemons);

pokemonsRouter.get("/:idPokemon", getById);

pokemonsRouter.post("/", createPokemon);

module.exports = pokemonsRouter;
