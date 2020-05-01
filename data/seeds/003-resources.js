exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("resources")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("resources").insert([
          {
            id: 1,
            name: "Office",
            description: "probably gonna need a building or something"
          },
          {
            id: 2,
            name: "Computer",
            description: "for playing games"
          },
          {
            id: 3,
            name: "Coffee Machine",
            description: "make it a good one"
          },
          {
            id: 4,
            name: "Stapler",
            description: "you never know"
          },
          {
            id: 5,
            name: "Fire Extinguisher",
            description: "trust me"
          },
          {
            id: 6,
            name: "Drugs",
            description: "Are we fancy business people yet?"
          },
          {
            id: 7,
            name: "Van",
            description: "for the kidnappings"
          },
          {
            id: 8,
            name: "Clock",
            description: "tell us when to go home"
          },
          {
            id: 9,
            name: "Chair",
            description: "for sitting"
          }
        ]);
      });
  };