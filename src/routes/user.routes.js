const express = require("express");
const UserRoutes = express.Router();
const UserController = require("../controllers/user.controller");

UserRoutes.get("/users", UserController.getAllUsers);

module.exports = UserRoutes;
