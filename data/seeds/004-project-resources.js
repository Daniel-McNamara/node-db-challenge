exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("project_resources")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("project_resources").insert([
          { project_id: 1, resource_id: 1, quantity: 1 },
          { project_id: 1, resource_id: 2, quantity: 50 },
          { project_id: 1, resource_id: 3, quantity: 2 },
          { project_id: 2, resource_id: 3, quantity: 1 },
          { project_id: 2, resource_id: 5, quantity: 3 },
          { project_id: 3, resource_id: 1, quantity: 1 },
          { project_id: 3, resource_id: 2, quantity: 12 },
          { project_id: 3, resource_id: 4, quantity: 1 },
          { project_id: 4, resource_id: 6, quantity: 100 }
        ]);
      });
  };