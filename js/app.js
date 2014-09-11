App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();

user = Ember.Object.create({
    fullName: 'Kara Gates'
});

userView = Ember.View.create({
   user: user,
    userName: Ember.computed.oneWay('user.fullName')
});

user.set('fullName', 'Krang Gates');

userView.set('userName', 'truckasaurus');

App.Router.map(function() {
	
});