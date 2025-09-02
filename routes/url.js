import express from "express";
import { generateURL, getAnalytics, redirectToURL } from "../controllers/url.js";

const router = express.Router();

router.post("/", generateURL);

router.get("/:shortId", redirectToURL);

router.get("/analytics/:shortId", getAnalytics);

export default router;