Template.registerHelper("currentBudget", function() {
  return Budgets.find().fetch().slice(-1)[0];
});
Template.registerHelper("formatDate", function(timestamp) {
  var date = new Date(timestamp);
  return date.toLocaleDateString("de-DE").slice(0,-4);
});
Template.registerHelper("remainingBudget", function() {
  var budget = Budgets.find().fetch().slice(-1)[0].amount;
  var expenses = Expenses.find().fetch();
  var expensesTotal = expenses
    .map(function (expense) {
      return expense.amount;
    })
    .reduce(function(previousExpense, currentExpense){
      return previousExpense + currentExpense;
    });
  console.log(budget);
  console.log(expensesTotal);

  return budget - expensesTotal;
});