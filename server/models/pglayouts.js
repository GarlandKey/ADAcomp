module.exports = mongoose => {
    const PGLayout = mongoose.model(
      "pgLayout",
      mongoose.Schema(
        {
          users: String,
          isVerticalLetterhead: Boolean,
          isHeaderImage: Boolean,
          headerImageLocation: String,
          logoLocation: String,
          logoCoordsX: Number,
          logoCoordsY: Number,
          companyCoordsX: Number,
          companyCoordsY: Number,
          addressCoordsX: Number,
          addressCoordsY: Number,
          phoneCoordsX: Number,
          phoneCoordsY: Number,
          emailCoordsX: Number,
          emailCoordsY: Number,
          otherCoordsX: Number,
          otherCoordsY: Number,
          signatureGreeting: String
        },
        { timestamps: true }
      )
    );
  
    return PGLayout;
  };
  