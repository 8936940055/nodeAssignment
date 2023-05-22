
const Users = require("../models/user.model");

const getUsers = async (req, res) => {
    try {
        console.log("req :: ", req.body)
        const users = await Users.find({}, {});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createUser = async (req, res) => {
    try {
        const user = await Users.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getUserByID = async (req, res) => {
    try {
        const user = await Users.find({ _id: req.params.uid });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await Users.updateOne({ _id: req.params.uid }, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteUserById = async (req, res) => {
    try {
        const user = await Users.deleteOne({ _id: req.params.uid });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};
module.exports = { getUsers, createUser, getUserByID, updateUser, deleteUserById };