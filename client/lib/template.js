Template.registerHelper("currentBudget", function() {
  return Budgets.find().fetch().slice(-1)[0];
});