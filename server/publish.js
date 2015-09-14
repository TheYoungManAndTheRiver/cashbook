Meteor.publish('yourGroup', function() {
  var user = Meteor.users.find(this.userId, {fields: {groupId: 1} }).fetch()[0];
  return Groups.find(user.groupId);
});

Meteor.publish('userData', function() {
  return Meteor.users.find(this.userId, {fields: {groupId: 1} });
});

// Meteor.publish('users', function(groupId) {
//   return Meteor.users.find({groupId: groupId});
// });

// Meteor.publish('budgets', function(groupId) {
//   return Budgets.find({groupId: groupId});
// });

// Meteor.publish('expenses', function(budgetId) {
//   check(budgetId, String);

//   return Expenses.find({budgetId: budgetId});
// });
