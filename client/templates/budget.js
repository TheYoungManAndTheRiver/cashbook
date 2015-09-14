var budgetData = [
    {
        title: 'erstes Budget',
        url: 'http://sachagreif.com/introducing-telescope'
    },
    {
        title: 'budget 2',
        url: 'http://meteor.com'
    },
    {
        title: 'Budget 3',
        url: 'http://themeteorbook.com'
    }
];
Template.budget.helpers({
    budget: budgetData
});