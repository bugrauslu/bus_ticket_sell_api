import express from "express";
import JourneyController from "../controller/journey.controller"
import authValidation from "../schema/user.schema";
import verifyToken from "../middleware/jwt.middleware"
const router = express.Router();

//ADDJOURNEY
router.post("/addJourney", JourneyController.addJourney);

//LISTJOURNEY
router.post("/List", verifyToken.verifyToken , JourneyController.listJourney);

//BuyTicket
router.post("/buyTicket/:id",verifyToken.verifyToken ,JourneyController.buyTicket)


router.post("/Detail/:id",verifyToken.verifyToken ,JourneyController.journeyDetail)



export default router;
