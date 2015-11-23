Template.registerHelper("currentBudget", function() {
  return Budgets.find().fetch().slice(-1)[0];
});
Template.registerHelper("formatDate", function(timestamp) {
  var date = new Date(timestamp);
  var day = date.getDate();
  var month = date.getMonth() + 1;

  return day + "." + month + ".";
});
Template.registerHelper("formatCurrency", function(amount) {
  if(!amount) {
    amount = 0;
  }
  var output = amount.toFixed(2).replace(".", ",");
  return output;
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
    }, 0);
  return budget - expensesTotal;
});
Template.registerHelper("yourGroup", function () {
  var group = Groups.findOne();
  return group;
});