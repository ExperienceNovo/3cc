/**
 * ArtistController
 *
 */

module.exports = {

	getOne: function(req, res) {
		Artist.find({id:req.param('id')})
		.then(function(model) {
			Venue.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	getAll: function(req, res) {
		Artist.find()
		.then(function(models) {
			Venue.watch(req);
			Venue.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	getCount: function(req, res) {
		Artist.count()
		.exec(function(err, venueCount) {
			if (!err){
				Venue.watch(req);
				res.json({ count: venueCount });
			}
		});
	},

	create: function (req, res) {
		var model = {
			title: req.param('title'),
			description: req.param('description'),
			socialAccounts: req.param('socialAccounts'),
		};
		Artist.create(model)
		.exec(function(err, venue) {
			if (err) {return console.log(err);}
			else {
				Venue.publishCreate(venue);
				var userArray = req.param('userArray').split(',')
				for (x in userArray){
					var artistUserModel = {
						artist: venue.id,
						user: userArray[x],
					}
					ArtistUser.create(artistUserModel).then(function(model){
						ArtistUser.publishCreate(model);
					});
				}
			}
		});
	},

	update: function(req, res) {
		var model = {
			id: req.param('id'),
		}
		if (req.param('isApproved')){
			model.isApproved = true
		}
		Artist.update({id: req.param('id')}, model)
		.then(function(result){
			return res.json(result);
		})
		.catch(function(err){
			return res.negotiate(err);
		})
	},

};
