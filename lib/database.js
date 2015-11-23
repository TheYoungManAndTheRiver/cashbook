Meteor.methods({
  createGroup: function (name, invitations) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    // create group
    var groupId = Groups.insert({
      name: name,
      createdAt: new Date()
    });

    // connect user to group
    Meteor.users.update(Meteor.userId(), {$set: {groupId: groupId} } );

    // save invitations
    invitations.forEach(function (email) {
      Invitations.insert({
        email: email,
        groupId: groupId,
        group: name
      });
    });
  },

  invite: function (email, group) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Invitations.insert({
      email: email,
      group: group.name,
      groupId: group._id
    });
  },

  joinGroup: function (groupName) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    console.log(groupName);
    if(Meteor.isServer) {
      var group = Groups.findOne({name: groupName});
    }

    var userEmail = Meteor.user().emails[0].address;
    var invitation = Invitations.findOne({group: groupName, email: userEmail});

    if(invitation) {
      // connect user to group
      if(Meteor.isServer) {
        Meteor.users.update(Meteor.userId(), {$set: {groupId: group._id} } );
      }
      if(Meteor.isClient) {
        Session.set("board", "connectSucces"); 
      }
    } else {
      if(Meteor.isClient) {
        Session.set("board", "connectFail");
      }
    }
  },

  createBudget: function (amount) {
    // Make sure the user is logged in before inserting a budget
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    // create budget
    var budgetId = Budgets.insert({
      amount: amount,
      groupId: Meteor.user().groupId
    });
  },

  createExpense: function (title, amount) {
    // Make sure the user is logged in before inserting an Expense
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var groupId = Meteor.user().groupId;

    // create budget
    var expenseId = Expenses.insert({
      amount: amount,
      groupId: groupId,
      date: Date.now(),
      title: title
    });
    console.log("Expense created! (" + title + ": " + amount + " €)");
  },

  deleteExpense: function (expenseId) {
    console.log("deleting Expense " + expenseId);
    Expenses.remove(expenseId);
    console.log("Expense deleted!");
  }
});