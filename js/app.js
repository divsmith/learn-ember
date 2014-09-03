App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Post = DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	favorite: DS.attr('boolean')
});

App.Person = Ember.Object.extend({
	helloWorld: function() {
		alert('Hi, my name is ' + this.get('name'));
	}
});

App.Post.FIXTURES = [
	{
		id: 1,
		title: 'My first post',
		body: 'This is where the body of the post goes',
		favorite: true
	},
	{
		id: 2,
		title: 'My second post',
		body: 'This is where the body of the second post would be if it had actually been written',
		favorite: false
	},
	{
		id: 3,
		title: 'Last post',
		body: 'This is the last fixture post',
		favorite: true
	}
];

App.Router.map(function() {
	this.resource('posts', function() {
		this.route('index', { path: '/' });
		this.route('favorites');
		this.resource('post', { path: '/:post_id' });
	});
});

App.ApplicationRoute = Ember.Route.extend({
	setupController: function(controller) {
		controller.set('title', 'Hello World!');
	}
});

App.ApplicationController = Ember.Controller.extend({
	appName: 'My first example'
});

App.PostsIndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('post');
	}
});

App.PostsFavoritesRoute = Ember.Route.extend({
	model: function() {
		this.store.find('post');
		return this.store.filter('post', function(post) {
			return post.get('favorite');
		});
	}
});

App.PostRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('post', params.post_id);
	},

	serialize: function(post) {
		return { post_id: post.get('id') };
	}
});


