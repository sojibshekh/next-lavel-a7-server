import { Router } from "express";

import { checkAuth } from "../../middlewares/checkAuth";

import { UserControllers } from "./user.controller";


const router = Router();

router.post("/registration", UserControllers.createUser);
router.get("/me", checkAuth("admin"), UserControllers.getMe);


export const userRoutes = router;