/* Router Options */
Router.configure({
	layoutTemplate : 'AppLayout',
	progressSpinner : false,
});

Router.route('/', {
	name : 'home',
	action 	: function() {
		this.render('welcome');
	},
});