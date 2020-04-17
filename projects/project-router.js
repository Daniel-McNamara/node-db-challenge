const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Projects.getProjectById(req.params.id);
    const tasks = await Projects.getProjectTasks(req.params.id);
    const resources = await Projects.getProjectResources(req.params.id);
    res.status(200).json({
      id: project.id,
      name: project.name,
      description: project.description,
      completed: project.completed,
      tasks: tasks,
      resources: resources
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProject = {
      name: req.body.name,
      description: req.body.description,
      completed: req.body.completed || false
    };
    await Projects.addProject(newProject).then(project => {
      res.status(200).json(project);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

module.exports = router;