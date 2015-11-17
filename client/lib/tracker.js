// Subscribe to group if user changes
Tracker.autorun(function () {
  var user = Meteor.user();
  if(user) {
    Meteor.subscribe('invitations');
    if(user.groupId) {
      console.log("Subscribing for Group " + user.groupId);
      Meteor.subscribe('yourGroup', user.groupId);
      Meteor.subscribe('budgets', user.groupId);
      Meteor.subscribe('expenses', user.groupId);
    }
  }
});