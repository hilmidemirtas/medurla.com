const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const YeniAddilacSchema = new Schema({
  baslik: {
    type: String,
    unique: true,
    required: true,
  },
  altbaslik: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
  category: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Category"
  }
});

YeniAddilacSchema.pre("validate", function(next){
  this.slug = slugify(this.baslik, {
    lower: true,
    strict: true,
  });
  next();
});


const YeniAddilac = mongoose.model("YeniAddilac", YeniAddilacSchema);
module.exports = YeniAddilac;
