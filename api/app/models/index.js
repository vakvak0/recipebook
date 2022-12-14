const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.URL;
db.recipes = require("./recipe.model.js")(mongoose);
db.ingredients = require("./ingredients.model.js")(mongoose);

module.exports = db;
