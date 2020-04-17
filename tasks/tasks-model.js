const db = require("../data/db-config");

module.exports = {
  getAllTasks,
  getProjectTasks,
  addTask
};

function getAllTasks() {
  return db
    .select(
      "projects.name as project",
      "projects.description as project_description",
      "tasks.id",
      "tasks.description as task_description",
      "tasks.notes",
      "tasks.completed"
    )
    .from("tasks")
    .join("projects", "projects.id", "=", "tasks.project_id");
}

function getProjectTasks(project_id) {
  return db("tasks").where({ project_id: project_id });
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(() => {
      return db("tasks")
        .where({ description: task.description })
        .first();
    });
}