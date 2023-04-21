import express from "express";
import ticketController from "../controller/ticket.controller";
import verifyToken from "../middleware/jwt.middleware";
const router = express.Router();

//TICKETLIST
router.post("/list", verifyToken.verifyToken, ticketController.allTickets);

//TICKETDETAIL
router.post("/detail/:id", verifyToken.verifyToken, ticketController.ticketDetail);

export default router;
