if (Meteor.isClient) {
    Template.body.created = function() {
        if(!Meteor.userId()) {
            Session.set("board", "login");
        } else {
            Session.set("board", "getStartet");
        }
    }

    Template.start.helpers({
        active: function() {
            return Session.get('board');
        }
    });

    Template.body.events({
        'click .btn-primary': function (event) {
            event.preventDefault();
            console.log(event.target.id);
            Session.set('board', event.target.id);
        }
    });
}