exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("tasks")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("tasks").insert([
          {
            id: 1,
            project_id: 1,
            description: "Think of a company name",
            notes: "Make it catchy",
            completed: false
          },
          {
            id: 2,
            project_id: 1,
            description: "File for an LLC",
            notes: "Take a shortcut and do it online, no need to pay a lawyer",
            completed: false
          },
          {
            id: 3,
            project_id: 2,
            description: "Hire HR Manager",
            notes: "They will take care of the rest of the hiring for me",
            completed: false
          },
          {
            id: 4,
            project_id: 2,
            description: "Hire the rest of the employees",
            notes: "Let the HR Manager take care of this",
            completed: false
          },
          {
            id: 5,
            project_id: 3,
            description: "Think up a product",
            notes: "Should relate to our super cool name",
            completed: false
          },
          {
            id: 6,
            project_id: 3,
            description: "Make the product",
            notes: "Probably get someone else to do it.",
            completed: false
          },
          {
            id: 7,
            project_id: 4,
            description: "Think up a marketing campaign",
            notes: "Get someone else to do it",
            completed: false
          },
          {
            id: 8,
            project_id: 4,
            description: "Launch the campaign",
            notes: "This had better go viral",
            completed: false
          }
        ]);
      });
  };