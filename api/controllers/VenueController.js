/**
 * VenueController
 *
 */

module.exports = {

	getOne: function(req, res) {
		Venue.find({id:req.param('id')})
		.then(function(model) {
			Venue.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	getSome: function(req, res) {
		var limit = req.query.limit;
		var skip = req.query.skip;
		var sort = req.query.sort;
		var filter = req.query.filter
		
		Venue.getSome(limit, skip, sort, filter)
		.then(function(models) {
			Venue.watch(req);
			Venue.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getAll: function(req, res) {
		Venue.find()
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
		Venue.count()
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
			urlTitle: req.param('title').replace(/ /g,"-").toLowerCase(),
			address: req.param('address'),
			description: req.param('description'),
			facebook: req.param('facebook'),
			twitter: req.param('twitter'),
			google: req.param('google'),
			booking: req.param('booking'),
		};
		console.log(model)
		Venue.create(model)
		.exec(function(err, venue) {
			if (err) {return console.log(err);}
			else {Venue.publishCreate(venue);}
		});
	},

	update: function(req, res) {
		var model = {
			id: req.param('id'),
		}
		if (req.param('isApproved')){
			model.isApproved = true
		}
		Venue.update({id: req.param('id')}, model)
		.then(function(result){
			return res.json(result);
		})
		.catch(function(err){
			return res.negotiate(err);
		})
	},

};
