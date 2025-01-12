import { Router } from "express";
import { userController } from "../DIContainer";

const router = Router();

router.post("/user/login", userController.authenticateUser);
router.post("/user/register", userController.createUser);
router.post("/user/logout", userController.logoutUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export { router as userRouter };
