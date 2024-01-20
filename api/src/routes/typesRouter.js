const { router, Router } = require("express");
const { postTypes, getTypes } = require("../Handlers/typeHandler");
const typesRouter = Router();

// typesRouter.post("/", postTypes);
typesRouter.get("/", getTypes);

module.exports = typesRouter;
