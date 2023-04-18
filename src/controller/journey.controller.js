import JourneyModel from "../model/Journey.Model";
import Response from "../utils/responseMsg";
import bcrypt from "bcrypt";
import crypto from "crypto";

import JWT from "../middleware/jwt.middleware";
import userModel from "../model/user.model";
import { ObjectId, ReturnDocument } from "mongodb";
import ticektsModel from "../model/ticekts.Model";

const addJourney = async (req, res) => {
   try {
    const data= req.body;
    const savedJourney =  await JourneyModel.create(data)
    return Response.created(res,"success",savedJourney)
   } catch (error) {
    console.log("addJourney: ",error)
    return Response.error404(res,"an unexpected error")
   }

};


const listJourney = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        let startOfDay = new Date(req.body.departureTime);
        startOfDay.setHours(0, 0, 0, 0) 

        let endOfDay = new Date(req.body.departureTime);
        endOfDay.setHours(23, 59, 59, 999) 
      
        const query = { departure:data.departure , destination:data.destination,departureTime: { $gte: startOfDay.toISOString() , $lte: endOfDay.toISOString() }};
        let param = { seats: 0 }
        const findedJourney = await JourneyModel.find(query,param)
        if (!findedJourney) {
            return Response.error400(res,"journey is not found!")
        }else{
            return Response.success(res,"Data Found",findedJourney)
        }
       } catch (error) {
        console.log("listJourney: ",error)
        return Response.error404(res,"an unexpected error");
       }
};


const buyTicket =async(req,res)=>{
     try {
        let {seatIds , genders} = req.body;
        const journeyId = req.params.id;
        const userId = req.user.id

        const findedUser = await userModel.findOne({_id:userId})
        let defaultGender = findedUser.gender === false ? 0 : 1;
        if(!genders){
            genders = [];
            genders[0] = defaultGender
        }
        
        const findedJourney = await JourneyModel.findOne({_id:journeyId});
        if (!findedJourney) {
            return Response.error400(res,"journey not found")
        }

        if (seatIds.length >= 6 || seatIds.length <= 0) {
            return Response.error400(res,"you can choose up to 5 seats")
        }
        for (let i = 0; i < seatIds.length; i++) {
            const data = {
                id:journeyId,
                seatId:seatIds[i],
                gender:genders[i],
                buyersId:userId
            }
            const JourneyCheck = await JourneyModel.find({ _id: data.id, "seats._id": new ObjectId(data.seatId) })
            //alınacak koltuğu bul
            const seatObj = JourneyCheck[0].seats.find(seat => seat._id.equals(new ObjectId(data.seatId)));
            
            //alınacak koltuk alınabilir mi
            if (seatObj.isAvailable === true) {
                //alınacak koltuğun  yanındaki koltuk bilgileri
                const findedAnotherSeat = await JourneyModel.findGroup(seatObj._id,seatObj.group);
                console.log(findedAnotherSeat);
                if (findedAnotherSeat[0].buyersId === userId) {
                    const userTickets = {
                        userId:userId,
                        destination:findedJourney.destination,
                        departure:findedJourney.departure,
                        price:findedJourney.price,
		                departureTime:findedJourney.departureTime,
                        seatNumber:seatObj.seatNumber
                    }
                    await ticektsModel.create(userTickets)
                    await JourneyModel.findAndUpdate(data)
                }else{
                    
                    if (genders[i] === 1) 
                        genders[i] = true
                    else
                        genders[i] = false
                    //yan koltuk cinsiyet kontrolü satın alınmak istenen cinsiyet
                    if (findedAnotherSeat[0].gender === genders[i] || seatObj.gender===null ) {
                        const userTickets = {
                            userId:userId,
                            destination:findedJourney.destination,
                            departure:findedJourney.departure,
                            price:findedJourney.price,
                            departureTime:findedJourney.departureTime,
                            seatNumber:seatObj.seatNumber
                        }
                        await ticektsModel.create(userTickets)
                        await JourneyModel.findAndUpdate(data)
                    }else{
                        return Response.error400(res,"gender mismatch")
                    }
                }
            } else{
                //koltuk başka birisi tarafından alınmıştır
                return Response.error400(res,"This seat was bought by someone else")
            }       
        }     
        return Response.success(res,"success")
    } catch (error) {
        console.log("buyTicket",error);
        return Response.error404(res,"an unexpected error")
    }
}

const journeyDetail =async(req,res)=>{
    try {
        const journeyId = req.params.id;
        const findedJourney = await JourneyModel.findOne({_id:journeyId})
        if (!findedJourney) {
            return Response.error400(res,"journey not found",findedJourney);
        }
        return Response.success(res,"success",findedJourney)
    } catch (error) {
        console.log("journeyDetail",error);
        return Response.error404(res,"an unexpected error")
    }
}

export default {
	addJourney,
	listJourney,
    buyTicket,
    journeyDetail
};
