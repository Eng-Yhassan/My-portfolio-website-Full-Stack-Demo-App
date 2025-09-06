const BlogModel = require("../models/BlogModel");


// Post Api
const CreateProject = async (req, res) => {
    const newData = BlogModel({
        image: req.file.filename,
        title: req.body.title,
        description: req.body.description,
        maindescription: req.body.maindescription
    });

    const savedData = await newData.save();

    if (savedData) {
        res.send(savedData);
    }
};

// Read Api

const readProject = async (req, res) => {
    const getData = await BlogModel.find();

    if (getData) {
        res.send(getData);
    }
};

// Read Single Api

const readOneProject = async (req, res) => {
    const getOneData = await BlogModel.find(
        { _id: req.params.id }
    );

    if (getOneData) {
        res.send(getOneData);
    }
}

// Update Data 
const UpdateProject = async (req, res) => {
    const updateData = await BlogModel.updateOne(
        { _id: req.params.id },
        {
            $set: {
                image: req.file ? req.file.filename : undefined,
                title: req.body.title,
                description: req.body.description,
                maindescription: req.body.maindescription
            }
        }
    );

    if (updateData) {
        res.send("Updated..")
    }
}

// Delete Data
const deleteProject = async (req, res) => {
    const deleteData = await BlogModel.deleteOne(
        { _id: req.params.id }
    );

    if (deleteData) {
        res.send("Deleted..")
    }
}

// search Data 
const searchProject = async (req,res) => {
    const searchData = await BlogModel.find({
        $or : [
            {title: {$regex: req.params.key }}
        ]
    })
    if(searchData){
        res.send(searchData)
    }
}

module.exports = {CreateProject,readProject,readOneProject,UpdateProject,deleteProject,searchProject}