import { Router } from "express";
import { getHome } from "../controllers/controller.js";

export const route = Router();

route.get("/", getHome);
