const db = require("../data/db-config");

module.exports = {
  getAllResources,
  //   getProjectResources,
  addResource
};

function getAllResources() {
  return db("resources");
}

// function getProjectTasks(project_id) {
//   return db("tasks").where({ project_id: project_id });
// }

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(() => {
      return db("resources")
        .where({ name: resource.name })
        .first();
    });
}