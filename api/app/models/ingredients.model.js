module.exports = (mongoose) => {
  const ownedIngredients = mongoose.model(
    "ownedIngredients",
    mongoose.Schema({
      name: { type: String, required: true },
      amount: String,
      unit: String,
    })
  );
  return ownedIngredients;
};
