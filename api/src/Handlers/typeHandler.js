const { Type } = require("../db");
const { fetchTypesApi, getTypesDB } = require("../controllers/typesController");

const getTypes = async (req, res) => {
  try {
    const types = await fetchTypesApi();

    const findDB = await Type.findAll();

    res.status(200).send(findDB);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getTypes };
