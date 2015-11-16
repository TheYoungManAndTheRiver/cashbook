Template.budget.helpers({
    expenses: function() {
        var _expenses = Expenses.find().fetch();
        console.log(_expenses);
        return _expenses;
    }
});
Template.budget.events({  
  'submit .expense-new': function(event) {

    event.preventDefault();

    var $titleInput = $(event.target).find('#new-expense-title');
    var $amountInput = $(event.target).find('#new-expense-amount');

    var title = $titleInput.val().trim();
    var amount = Number($amountInput.val());

    // validation
    check(amount, Number);

    // Create budget
    Meteor.call("createExpense", title, amount);

    $titleInput.val("");
    $amountInput.val("");
  }
});