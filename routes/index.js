const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares");
const {
  SignUpController,
  LoginController,
  OTPVerification,
} = require("../controller/authController.js");
const { PostController, AllPostController, UpdateController, DeleteController } = require("../controller/crudController.js")

router.post("/api/signUp", SignUpController);
router.post("/api/Login", LoginController);
router.post("/api/Verification", OTPVerification);
router.post("/api/createpost",PostController )
router.get("/api/allpost",AllPostController  )
router.put("/api/updatepost/:id",UpdateController)
router.delete("/api/delpost/:id",DeleteController)


module.exports = router;