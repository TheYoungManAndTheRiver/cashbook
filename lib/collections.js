if (Meteor.isClient) {
  // Subscribe to server data
  // Meteor.subscribe('users');
  // Meteor.subscribe('budgets');
  // Meteor.subscribe('expenses');
  Meteor.subscribe('userData');
  Meteor.subscribe('yourGroup');
}

Groups = new Mongo.Collection('groups');
Budgets = new Mongo.Collection('budgets');
Expenses = new Mongo.Collection('expenses');
// Users are missing here, because Meteor handles that for us