const ProjectModel = require("../models/ProjectModel");


// Post Api
const CreateProject = async (req, res) => {
    const newData = ProjectModel({
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
    const getData = await ProjectModel.find();

    if (getData) {
        res.send(getData);
    }
};

// Read Single Api

const readOneProject = async (req, res) => {
    const getOneData = await ProjectModel.find(
        { _id: req.params.id }
    );

    if (getOneData) {
        res.send(getOneData);
    }
}

// Update Data 
const UpdateProject = async (req, res) => {
    const updateData = await ProjectModel.updateOne(
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
    const deleteData = await ProjectModel.deleteOne(
        { _id: req.params.id }
    );

    if (deleteData) {
        res.send("Deleted..")
    }
}

// Search data
const SearchProject = async (req,res) => {
    const SearchData = await ProjectModel.find({
        $or: [
            {title: {$regex :req.params.key}}
        ]
    })
    if(SearchData){
        res.send(SearchData)
    }
}

module.exports = {CreateProject,readProject,readOneProject,UpdateProject,deleteProject,SearchProject}