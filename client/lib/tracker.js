// Subscribe to group if user changes
Tracker.autorun(function () {
  var user = Meteor.user();
  if (user && user.groupId) {
    console.log("Subscribing for Group " + user.groupId);
    Meteor.subscribe('yourGroup', user.groupId);
    Meteor.subscribe('budgets', user.groupId);
    Meteor.subscribe('expenses', user.groupId);
  }
});