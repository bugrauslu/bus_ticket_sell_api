import express from "express";
import JourneyController from "../controller/journey.controller"
import authValidation from "../schema/user.schema";
import verifyToken from "../middleware/jwt.middleware"
const router = express.Router();

//ADDJOURNEY
router.post("/addJourney", JourneyController.addJourney);

//LISTJOURNEY
router.post("/list", verifyToken.verifyToken , JourneyController.listJourney);

//BUYTICKET
router.post("/buyTicket/:id",verifyToken.verifyToken ,JourneyController.buyTicket)

//TICKETDETAIL
router.post("/detail/:id",verifyToken.verifyToken ,JourneyController.journeyDetail)



export default router;
