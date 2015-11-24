Template.body.created = function() {
    if(!Meteor.userId()) {
        // Force user to log in
        Session.set("board", "login");
    } else {
        var user = Meteor.user();
        // User logged in
        if (user && user.groupId){
            // User in in a group
            Session.set("board", "getStartet");
        } else {
            // User not in group
            Session.set("board", "getStartet");
        }
    }
}

Template.start.helpers({
    active: function() {
        return Session.get('board');
    }
});

Template.body.helpers({
    hasGroup: function () {
        var _hasGroup = Groups.find().fetch().length > 0
        return _hasGroup;
    }
});

Template.body.events({
    'click .btn-primary': function (event) {
        event.preventDefault();
        console.log(event.target.id);
        Session.set('board', event.target.id);
        $(".off-canvas-wrap").removeClass("move-right");
    }
});