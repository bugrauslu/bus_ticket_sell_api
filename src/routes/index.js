import express from "express";
import auth from "./auth.routes";
import journey from "./journeys.routes";
import tickets from "./tickets.routes";
const router = express.Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use("/auth", auth);
router.use("/journey", journey);
router.use("/tickets", tickets);
export default router;
