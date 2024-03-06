import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const carsSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    power: String,
    consumption: String,
    emission: String,
    performance: String,
    price: String,
    datesortie: String,
  },
  {
    timestamps: true,
  }
);

const Cars = mongoose.models.Cars || mongoose.model("Cars", carsSchema);



export default Cars;
