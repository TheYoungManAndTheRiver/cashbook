if (Meteor.isClient) {
  // Subscribe to server data
  // Meteor.subscribe('users');
  // Meteor.subscribe('expenses');
  Meteor.subscribe('userData');
  // Meteor.subscribe('yourGroup').ready(function () {
  //   var user = Meteor.user();
  //   Meteor.subscribe('budgets', user.groupId);
  // });
}

Groups = new Mongo.Collection('groups');
Invitations = new Mongo.Collection('invitations');
Budgets = new Mongo.Collection('budgets');
Expenses = new Mongo.Collection('expenses');
// Users are missing here, because Meteor handles that for us