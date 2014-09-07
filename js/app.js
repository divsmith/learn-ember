App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Person = Ember.Object.extend({
    firstName: null,
    lastName: null,
    
    fullName: function() {
        var firstName = this.get('firstName');
        var lastName = this.get('lastName');
        
        return firstName + ' ' + lastName;
    }.property('firstName', 'lastName'),    
    
    fullNameChanged: function() {
        console.log('Full name changed to ' + this.get('firstName') + ' ' + this.get('lastName'));
    }.observes('fullName')
});

var person = App.Person.create({
    firstName: 'Parker',
    lastName: 'Smith'
});

person.get('fullName');

App.Router.map(function() {
	
});