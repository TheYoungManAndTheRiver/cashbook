Meteor.publish('yourGroup', function(groupId) {
  return Groups.find(groupId);
});

Meteor.publish('userData', function() {
  return Meteor.users.find(this.userId, {fields: {groupId: 1} });
});

Meteor.publish('invitations', function() {
  return Invitations.find();
});

Meteor.publish('budgets', function(groupId) {
  return Budgets.find({groupId: groupId});
});

// Meteor.publish('expenses', function(budgetId) {
//   check(budgetId, String);

//   return Expenses.find({budgetId: budgetId});
// });

// Meteor.publish('users', function(groupId) {
//   return Meteor.users.find({groupId: groupId});
// });
