const contactModel = require("../models/ContactModel")


// Post Api
const CreateContact = async (req, res) => {
    const newData = contactModel({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    const savedData = await newData.save();

    if (savedData) {
        res.send(savedData);
    }
};

// Read Api

const readContact = async (req, res) => {
    const getData = await contactModel.find();

    if (getData) {
        res.send(getData);
    }
};

// Read Single Api

const readOneContact = async (req, res) => {
    const getOneData = await contactModel.find(
        { _id: req.params.id }
    );

    if (getOneData) {
        res.send(getOneData);
    }
}

// Update Data 
const UpdateContact = async (req, res) => {
    const updateData = await contactModel.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    );

    if (updateData) {
        res.send("Updated..")
    }
}

// Delete Data
const deleteContact = async (req, res) => {
    const deleteData = await contactModel.deleteOne(
        { _id: req.params.id }
    );

    if (deleteData) {
        res.send("Deleted..")
    }
}

module.exports = { CreateContact, readContact, readOneContact, UpdateContact, deleteContact };