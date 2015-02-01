Template.signup.events({
	'click button' : function (event, template){
		event.preventDefault(); 
		Accounts.createUser({
			username: template.find("#signup-username").value, 
			email: template.find("#signup-email").value,
			password: template.find("#signup-password").value
		});
	}
});

Template.login.events({
	'click button' : function(event, template){
		event.preventDefault(); 
		Meteor.loginWithPassword(
			template.find('#login-username').value,
			template.find('#login-password').value
			);
	}
});

Template.logout.events({
	'click button': function(event, template){
		event.preventDefault();
		Meteor.logout(); 
	}
});