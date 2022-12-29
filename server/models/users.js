module.exports = mongoose => {
  const Users = mongoose.model(
    "users",
    mongoose.Schema(
      {
        first: String,
        middle: String,
        last: String,
        title: String,
        role: String,
        company: String,
        address: String,
        city: String,
        state: String,
        zip: String,
        phone: String,
        email: String,
        other: String
      },
      { timestamps: true }
    )
  );

  return Users;
};
  