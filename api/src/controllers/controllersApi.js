const axios = require("axios");

//* ////////////// POKEMON API ///////////////////

const getAllPokemonsApi = async () => {
  // const pokemonApi = await axios.get(
  //   "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
  // );
  const pokemonApi = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
  );

  const data = pokemonApi.data.results.map(async (p) => {
    const pokeInfo = await axios.get(p.url);
    // console.log(pokeInfo.data);
    return pokeInfo.data;
  });

  return Promise.all(data).then((response) => {
    return response.map((p) => {
      return {
        id: p.id,
        name: p.name,
        life: p.stats[0].base_stat,
        attack: p.stats[1].base_stat,
        defense: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
        height: p.height,
        weight: p.weight,
        type: p.types.map((pokeType) => pokeType.type.name),
        image: p.sprites.other.dream_world.front_default,
      };
    });
  });
};

const getPokemonByNameApi = async (name) => {
  const pokemons = await getAllPokemonsApi();

  const result = pokemons.filter((poke) => {
    return poke.name === name;
  });
  if (result.length)
    return {
      name: result[0].name,
      types: result[0].type,
      image: result[0].image,
    };

  return { error: "No Pokemons found by name" };
};

const getPokemonByIdApi = async (id) => {
  const pokemons = await getAllPokemonsApi();

  const result = pokemons.find((poke) => {
    return poke.id === parseInt(id);
  });
  if (result)
    return {
      result,
      // name: result.name,
      // types: result.type,
      // image: result.image,
    };
  return { error: "Pokemon not found by ID" };
};

// [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
//* ///////////// POKEMON TYPES API  /////////////

const getTypesApi = async () => {
  const typeApi = await axios.get("https://pokeapi.co/api/v2/type");

  const data = typeApi.data.results.map(async (p) => {
    const typeInfo = await axios.get(p.url);

    return typeInfo.data;
  });

  return Promise.all(data).then((response) => {
    return response.map((t) => {
      return {
        id: t.id,
        name: t.name,
      };
    });
  });
};

module.exports = {
  getAllPokemonsApi,
  // getPokemonsInfoMainRoute,
  getPokemonByNameApi,
  getPokemonByIdApi,
  getTypesApi,
};

// const getPokemonsInfoMainRoute = async () => {
//   const pokemonApi = await axios.get(
//     "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
//   );

//   const data = pokemonApi.data.results.map(async (p) => {
//     const pokeInfo = await axios.get(p.url);

//     return pokeInfo.data;
//   });

//   return Promise.all(data).then((response) => {
//     return response.map((p) => {
//       return {
//         id: p.id,
//         name: p.name,
//         type: p.types.map((pokeType) => pokeType.type.name),
//         image: p.sprites.other.dream_world.front_default,
//       };
//     });
//   });
// };
