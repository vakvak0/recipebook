module.exports = (mongoose) => {
  const recipe = mongoose.model(
    "recipe",
    mongoose.Schema({
      name: { type: String, required: true },
      ingredients: [
        {
          ingredientID: mongoose.Schema.Types.ObjectId,
          name: String,
          amount: String,
          unit: String,
        },
      ],
      instructions: String,
    })
  );
  return recipe;
};
