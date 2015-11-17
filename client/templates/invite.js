Template.invite.events({  
  'submit .new-invitation': function(event) {

    event.preventDefault();

    var $emailInput = $(event.target).find('.invite-email');
    var email = $emailInput.val().trim();

    var group = Groups.findOne();

    Meteor.call("invite", email, group);

    var mail = "mailto:" + email + "?subject=Du%20bist%20eingeladen%20%3A-)";
    mail += "&body=Hey%20Dude!%0ADu%20wurdest%20in%20die%20WG%20%22" + group.name + '%22%20eingeladen!%0A';
    mail += 'Lade%20dir%20die%20App%20runter%20und%20tritt%20der%20WG%20bei.';

    Session.set("board", "inviteSucces");

    window.open(mail).close();
    
    $emailInput.val('');
  }
});