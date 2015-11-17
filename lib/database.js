Meteor.methods({
  createGroup: function (name, invitations) {
    // Make sure the user is logged in before inserting a task
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

  joinGroup: function (groupName) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    console.log(groupName);
    var group = Groups.findOne({name: groupName});
    var userEmail = Meteor.user().emails[0].address;
    var invitation = Invitations.findOne({group: groupName, email: userEmail});

    if(invitation) {
      // connect user to group
      console.log(group);
      Meteor.users.update(Meteor.userId(), {$set: {groupId: group._id} } );
    } else {
      throw new Meteor.Error("not-invited"); 
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
  }
});