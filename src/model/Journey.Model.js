import { query } from "express";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const seatSchema = new mongoose.Schema({
  group: Number,
  seatNumber: Number,
  isAvailable: Boolean,
  gender: Boolean,
  buyersId: String,
});

const JourneySchema = new Schema(
  {
    departure: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    departureTime: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seats: {
      type: [seatSchema],
      default: () => {
        const seats = [];
        let group = 1;
        for (let seatNumber = 1; seatNumber <= 50; seatNumber++) {
          seats.push({ group, seatNumber, isAvailable: true, gender: null, buyersId: null });
          if (seatNumber % 2 === 0) {
            group++;
          }
        }
        return seats;
      },
    },
  },
  { timestamps: true }
);

const Journeys = mongoose.model("Journeys", JourneySchema);

const create = async (Data) => {
  const journey = new Journeys(Data);
  const savedData = await journey.save();
  let savedJson = savedData.toJSON();
  return savedJson;
};

const find = async (query, param) => {
  const findedBusRoute = await Journeys.find(query, param);
  return findedBusRoute;
};

const findOne = async (query) => {
  const findedBusRoute = await Journeys.findOne(query);
  return findedBusRoute;
};

const findAndUpdate = async (data) => {
  const updatedBusRoute = await Journeys.findOneAndUpdate(
    { _id: data.id, "seats._id": new ObjectId(data.seatId) },
    {
      $set: {
        "seats.$.gender": data.gender,
        "seats.$.isAvailable": false,
        "seats.$.buyersId": data.buyersId,
      },
    },
    { new: true }
  );
  return updatedBusRoute;
};

const findGroup = async (id, group) => {
  const findedGroup = await Journeys.aggregate([
    { $match: { "seats.group": group } },
    { $unwind: "$seats" },
    { $match: { "seats._id": { $ne: new ObjectId(id) } } },
    { $group: { _id: "$_id", seats: { $push: "$seats" } } },
    { $project: { seats: 1 } },
    { $unwind: "$seats" },
    { $match: { "seats.group": group } },
    { $group: { _id: "$_id", seats: { $push: "$seats" } } },
  ]);
  return findedGroup[0].seats;
};

export default {
  create,
  find,
  findOne,
  findAndUpdate,
  findGroup,
};
