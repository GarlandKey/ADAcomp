module.exports = mongoose => {
    const Users = mongoose.model(
      "users",
      mongoose.Schema(
        {
          firstName: String,
          lastName: String,
          email: String,
          password: String,
          company: String || `none`
        },
        { timestamps: true }
      )
    );
  
    return Users;
  };
  