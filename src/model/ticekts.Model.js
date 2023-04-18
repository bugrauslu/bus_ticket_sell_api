import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TicketsSchema = new Schema(
	{
		userId:{
			type:String,
			required:true
		},
		destination:{
			type:String,
			required:true
		},
		departure:{
			type:String,
			required:true
		},
		price:{
			type:Number,
			required:true
		},
		departureTime:{
			type:String,
			required:true
		},
		seatNumber:{
			type:Number,
			required:true
		}
	},
	  { timestamps: true }
);


const Tickets = mongoose.model("Tickets", TicketsSchema);


const create = async(userData) => {
	const user = new Tickets(userData);
	const savedData = await user.save();
	return savedData;
};


const findOne = async(query) => {
	const findedUser = await Tickets.findOne(query);
	return findedUser;
};

const find = async(query) => {
	const findedUser = await Tickets.find(query);
	return findedUser;
};



export default {
	findOne,
	create,
	find
};
