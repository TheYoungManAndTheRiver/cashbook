Template.connect.events({  
  'submit .join-group': function(event) {

    event.preventDefault();

    var $wgInput = $(event.target).find('.group-name');
    var groupName = $wgInput.val().trim();

    // Create budget
    console.log("Joining Group " + groupName);

    // try to join and redirect
    Meteor.call("joinGroup", groupName);
  }
});