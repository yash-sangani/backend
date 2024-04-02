import express from "express";
import { create, deleteUser, gelAll, getOne, updateId } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getData", gelAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", updateId);
route.delete("/delete/:id", deleteUser)



export default route;