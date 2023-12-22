const { router, Router } = require("express");
const { postTypes } = require("../Handlers/typeHandler");
const typesRouter = Router();

typesRouter.post("/", postTypes);

module.exports = typesRouter;
