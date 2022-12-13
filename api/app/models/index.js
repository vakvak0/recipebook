const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const dbConfig = require("../config/db.config.js");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.recipes = require("./recipe.model.js")(mongoose);
db.ingredients = require("./ingredients.model.js")(mongoose);

module.exports = db;
