
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments();
          tbl.string('project_name', 128)
            .notNullable();
          tbl.string('project_desc', 128)
            .notNullable();
            tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
      }).createTable('resources', tbl => {
          tbl.increments();
          tbl.string('resource_name', 128)
            .notNullable();
          tbl.string('resource_desc', 128)
            .notNullable();
            tbl.unique('resource_name');
      }).createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
        tbl.string('task_name', 128)
          .notNullable();
        tbl.string('task_notes', 128)
          .notNullable();
          tbl.boolean('completed')
          .notNullable()
          .defaultTo(false);
    }).createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
        tbl.integer('resources_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources');

        tbl.primary(['project_id', 'resources_id']);
    });
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
  };
  