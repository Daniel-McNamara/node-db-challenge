const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getProjectById,
  getProjectTasks,
  getProjectResources,
  addProject
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}
function getProjectTasks(id) {
  return db("tasks").where("project_id", "=", id);
}

function getProjectResources(id) {
  return db
    .select(
      "resources.name as resource_name",
      "resources.description as resource_description"
    )
    .from("project_resources")
    .join("resources", "resources.id", "=", "project_resources.resource_id")
    .where("project_id", "=", id);
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