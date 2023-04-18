import express from "express";
import auth from "./auth.routes";
import journey from "./journeys.routes"
const router = express.Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use("/auth", auth);
router.use("/journey" ,journey)

export default router;
