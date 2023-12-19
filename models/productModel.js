import mongoose from "mongoose";

const beautyProductSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    ingredients: [String], 
    description: {
      type: String,
    },
    img: {
      type: String,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // this is for future use to use this first please create a  model for user
        },
        text: String,
        rating: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  });
  
  const BeautyProduct = mongoose.model('BeautyProduct', beautyProductSchema);

  export  default BeautyProduct