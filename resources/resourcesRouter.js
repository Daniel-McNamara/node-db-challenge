const express = require("express");

const Resources = require("./resources-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const resources = await Resources.getAllResources();
    res.status(200).json(resources);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const tasks = await Tasks.getProjectTasks(req.params.id);
//     res.status(200).json(tasks);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "there was an error", error: err });
//   }
// });

router.post("/", async (req, res) => {
  try {
    const newResource = {
      name: req.body.name,
      description: req.body.description
    };
    await Resources.addResource(newResource).then(resource => {
      res.status(201).json(resource);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "there was an error", error: err });
  }
});

module.exports = router;