const express = require("express");

const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Tasks.getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tasks = await Tasks.getProjectTasks(req.params.id);
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

router.post("/:id", async (req, res) => {
  try {
    const newTask = {
      project_id: req.params.id,
      description: req.body.description,
      notes: req.body.notes,
      completed: req.body.completed || false
    };
    await Tasks.addTask(newTask).then(task => {
      res.status(201).json(task);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

module.exports = router;