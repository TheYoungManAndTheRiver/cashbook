Template.budget.helpers({
    expenses: function() {
        var _expenses = Expenses.find().fetch();
        return _expenses;
    },
    templateGestures: {
    'swipeleft .bspBudget': function (event, templateInstance) {
        // here goes our swipe code ;-)
        console.log("Hammertime!");
      /* `event` is the Hammer.js event object */
      /* `templateInstance` is the `Blaze.TemplateInstance` */
      /* `this` is the data context of the element in your template, so in this case `someField` from `someArray` in the template */
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
  }
});