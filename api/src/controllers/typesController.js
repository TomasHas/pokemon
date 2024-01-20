const axios = require("axios");
const { Type } = require("../db");

const fetchTypesApi = async () => {
  const typeCount = await Type.count();

  if (typeCount === 0) {
    const typeApi = await axios.get("https://pokeapi.co/api/v2/type");

    const data = await Promise.all(
      typeApi.data.results.map(async (p) => {
        const typeInfo = await axios.get(p.url);

        return {
          id: typeInfo.data.id,
          name: typeInfo.data.name,
        };
      })
    );

    await Type.bulkCreate(data);
    return data;
  } else {
    return [];
  }
};

module.exports = {
  fetchTypesApi,
};
