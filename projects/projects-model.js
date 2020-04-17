const db = require("../data/db-config");

module.exports = {
  getProjects,
  addProject
};

function getProjects() {
  return db("projects");
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(() => {
      return db("projects")
        .where({ name: project.name })
        .first();
    });
}