module.exports = mongoose => {
  const Forms = mongoose.model(
    "forms",
    mongoose.Schema(
      {
        priority: Number,
        category: String,
        num: Number,
        title: String,
        description: String,
        imgLocation: String,
        isComp: Boolean,
        isMeasurement: Boolean,
        measurement: String,
        hasPic: Boolean,
        picLocation: String,
        suggestionLocation: String,
        comment: String
      },
      { timestamps: true }
    )
  );
  return Forms;
};