Template.budget.helpers({
    expenses: function() {
        var _expenses = Expenses.find().fetch();
        return _expenses;
    },
    templateGestures: {
    'swipeleft .expense': function (event, templateInstance) {
      $(event.target).closest(".expense").addClass("show-trash");
    },
    'swiperight .expense': function (event, templateInstance) {
      $(event.target).closest(".expense").removeClass("show-trash");
    }
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
  },
  'click .expense-delete': function (event) {
    var expenseId = $(event.target).closest(".expense").data("id");
    Meteor.call("deleteExpense", expenseId);
  }
});