import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const feedBackSchema = new Schema(
  {
    nom: String,
    titre: String,
    description: String,
    note: Number,
    idOfProduct: String,
  },
  {
    timestamps: true,
  }
);

const FeedBack = mongoose.models.FeedBack || mongoose.model("FeedBack", feedBackSchema);



export default FeedBack;
