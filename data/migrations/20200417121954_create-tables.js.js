exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments("id");
        tbl
          .string("name", 255)
          .notNullable()
          .unique();
        tbl.string("description", 1000);
        tbl.boolean("completed").defaultTo("false");
      })
      .createTable("tasks", tbl => {
        tbl.increments("id");
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .string("description", 550)
          .notNullable()
          .unique();
        tbl.string("notes", 1000);
        tbl.boolean("completed").defaultTo(false);
      })
      .createTable("resources", tbl => {
        tbl.increments("id");
        tbl
          .string("name", 255)
          .notNullable()
          .unique();
        tbl.string("description", 550).notNullable();
      })
      .createTable("project_resources", tbl => {
        tbl.primary(["project_id", "resource_id"]);
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl.integer("quantity").notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("projects")
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("project_resources");
  };