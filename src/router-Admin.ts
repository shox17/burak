import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin.get("/signup", restaurantController.getSignup).post(
  "/signup",
  makeUploader("members").single("memberImage"), // Middleware to handle file upload => req.file
  restaurantController.processSignup
);

routerAdmin.get("/logout", restaurantController.logout);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */
routerAdmin.get(
  "/product/all",
  restaurantController.verifyRestaurant, // Middleware to verify restaurant  => req.member
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant, // Middleware to verify restaurant  => req.member
  makeUploader("products").array("productImages", 5), // Middleware to handle file uploads => req.files
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  restaurantController.verifyRestaurant, // Middleware to verify restaurant  => req.member
  productController.updateChosenProduct
);

/**  User */
routerAdmin.get(
  "/user/all",
  restaurantController.verifyRestaurant, // Middleware to verify restaurant  => req.member
  restaurantController.getUsers 
);
routerAdmin.post(
  "/user/edit",
  restaurantController.verifyRestaurant, // Middleware to verify restaurant  => req.member
  restaurantController.updateChosenUser 
);

export default routerAdmin;
