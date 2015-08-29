var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	User = require('mongoose').model('User');

module.exports = function() {
	// Use facebook strategy
	passport.use(new FacebookStrategy({
			clientID: '1661573220721089',   //APP_ID
			clientSecret: 'd166d7c2ee3ab2c5539da5b31a67ede3',   //APP_SECRET
			callbackURL: '/auth/facebook/callback'
		},
		function(accessToken, refreshToken, profile, done) {
			User.findOne({
				'providerData.id': profile.id
			}, function(err, user) {
				if (err) {
					return done(err);
				}
				if (!user) {
					user = new User({
						firstName: profile.name.givenName,
						lastName: profile.name.familyName,
						displayName: profile.displayName,
						//email: profile.emails[0].value,
						username: profile.username,
						provider: 'facebook',
						providerData: profile._json
					});
					user.save(function(err) {
						if (err) console.log(err);
						return done(err, user);
					});
				} else {
					return done(err, user);
				}
			});
		}
	));
};