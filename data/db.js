const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  getProjects,
  getResources,
  getTasks,
  getProjectById,
  getResourceById,
  getTaskById,
  addProject,
  addResource,
  addTask
};

function getProjects() {
    return db('projects');
}

function getResources() {
    return db('resources');
}

function getTasks() {
    return db('tasks');
}

function getProjectById(ID) {

    return db('projects')
      .where({ id: Number(ID) })
      .first();

}

function getResourceById(ID) {

    return db('resources')
      .where({ id: Number(ID) })
      .first();

}

function getTaskById(ID) {

    return db('tasks')
      .where({ id: Number(ID) })
      .first();

}

function addProject(project) {
    console.log(project);
    return db('projects')
      .insert(project)
      .then(ids => ({ id: ids[0] }));
}

function addResource(resource) {
    console.log(resource);
    return db('resources')
      .insert(resource)
      .then(ids => ({ id: ids[0] }));
}

function addTask(task) {
    console.log(task);
    return db('tasks')
      .insert(task)
      .then(ids => ({ id: ids[0] }));
}

function addProjectResource(data) {
    return db('project_resources')
      .insert(data)
      .then(ids => ({ id: ids[0] }));
}