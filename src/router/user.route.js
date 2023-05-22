const express = require("express");

const { getUsers, createUser, getUserByID, updateUser, deleteUserById, loginUser } = require("../controller/user.controller");

const router = express.Router();


router.get("/", getUsers);


router.post("/", createUser);

router.get("/login", loginUser);

router.get("/:uid", getUserByID);

router.put("/:uid", updateUser);

router.delete("/:uid", deleteUserById);

module.exports = router;
