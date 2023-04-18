import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TicketsSchema = new Schema(
	{
		firstName: {
		  type: String,
		  required: true,
		  minlength: 3,
		},
		lastName: {
		  type: String,
		  required: true,
		  minlength: 3,
		},
		age: {
		  type: Number,
		  required: true,
		  min: 18,
		},
		gender: {
		  type: Boolean,
		  required: true,
		},
		email: {
		  type: String,
		  required: true,
		  unique: true,
		},
		password: {
		  type: String,
		  required: true,
		},
	  },
	  { timestamps: true }
);


const Tickets = mongoose.model("Tickets", TicketsSchema);


const create = async(userData) => {
	const user = new Tickets(userData);
	const savedData = await user.save();
	let savedJson = savedData.toJSON();
	delete savedJson.password;
	return savedJson;
};


const findOne = async(query) => {
	const findedUser = await Tickets.findOne(query);
	return findedUser;
};



export default {
	findOne,
	create
};
