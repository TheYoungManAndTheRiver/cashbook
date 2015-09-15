Template.budgetChange.created = function () {
    var user = Meteor.user();
    Meteor.subscribe('budgets', user.groupId);
}
Template.budgetChange.events({  
  'submit .budget-new': function(event) {

    event.preventDefault();

    var $bugdetInput = $(event.target).find('#budget');
    var newBudget = Number($bugdetInput.val());

    // validation
    check(newBudget, Number);

    // Create budget
    Meteor.call("createBudget", newBudget);
  }
});
Template.budgetChange.helpers({
    budgets: function() {
        var _budgets = Budgets.find().fetch().reverse().slice(0,5);
        return _budgets;
    }
});