const { Type } = require("../db");
const { getTypesApi } = require("../controllers/controllersApi");

const postTypes = async (req, res) => {
  try {
    const types = await getTypesApi();

    const dbData = await Type.bulkCreate(types);
    res.status(200).send(dbData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { postTypes };
