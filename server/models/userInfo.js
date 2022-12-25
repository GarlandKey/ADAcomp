module.exports = mongoose => {
    const userInfo = mongoose.model(
      "userInfo",
      mongoose.Schema(
        {
          firstName: String,
          lastName: String,
          email: String,
          userName: String,
          password: String,
          company: String || `none`
        },
        { timestamps: true }
      )
    );
  
    return userInfo;
  };
  