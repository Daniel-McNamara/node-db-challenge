exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Create Business",
          description: "Create a business from scratch",
          completed: false
        },
        {
          id: 2,
          name: "Hire Employees",
          description: "Hire employees to do the work for me",
          completed: false
        },
        {
          id: 3,
          name: "Produce Product",
          description: "Get our product to the market",
          completed: false
        },
        {
          id: 4,
          name: "Market Product",
          description: "Launch a marketing campaign for our product",
          completed: false
        }
      ]);
    });
};