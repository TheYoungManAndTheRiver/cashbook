Template.newGroup.events({  
  'submit .group-new': function(event) {
    event.preventDefault();

    var $wgInput = $(event.target).find('#wg-name');
    var $firstMailInput = $(event.target).find('#mail-1');

    if (! $wgInput.val() || ! $firstMailInput.val()) {
      return;
    }

    // Get Recipients
    var mailInputs =  $(event.target).find('#mail-1, #mail-2, #mail-3');
    var recipients = [];

    mailInputs.each(function (index, input) {
        if($(input).val() != "") {
            recipients.push($(input).val());
        }
        $(input).val('');
    });

    // Create group, invite recipients
    Meteor.call("createGroup", $wgInput.val(), recipients);

    var mail = "mailto:" + recipients.join(",") + "?subject=Du%20bist%20eingeladen%20%3A-)";
    mail += "&body=Hey%20Dude!%0ADu%20wurdest%20in%20die%20WG%20%22" + $wgInput.val() + '%22%20eingeladen!%0A';
    mail += 'Lade%20dir%20die%20App%20runter%20und%20tritt%20der%20WG%20bei.';

    Session.set("board", "succesGroup");

    window.location.href = mail;
    
    $wgInput.val('');
  }
});