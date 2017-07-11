/**
 * EventController
 *
 */

module.exports = {

	getOne: function(req, res) {
		Event.getOne(req.param('id'))
		.spread(function(model) {
			Merch.subscribe(req, model);
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
		var filter = req.query.filter;
		Event.getSome(limit, skip, sort, filter)
		.then(function(models) {
			Merch.watch(req);
			Merch.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getCount: function(req, res) {
		Event.count()
		.exec(function(err, merchCount) {
			if (err) {return console.log(err);}
			else{res.json({ merchCount: merchCount })}
		});
	},

	getByUrl: function(req, res) {
		Event.find()
		.where({urlTitle: req.param('path')})
		.spread(function(model) {
			Event.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	create: function (req, res) {
		var model = {
			title: req.param('title'),
			description: req.param('description'),
			urlTitle: req.param('title').replace(/ /g,"-").toLowerCase(),
			user: req.param('user'),
			venue: req.param('user')
		};
		Event.create(model)
		.exec(function(err, newEvent) {
			if (err) {return console.log(err);}
			else {
				Event.publishCreate(newEvent);
				res.json(newEvent);
				var artistArray = req.param('artistArray');
				for (x in artistArray){
					var artistEventModel = {
						eventModel: newEvent.id,
						artist: artistArray[x]
					};
					ArtistEvent.create(artistEventModel).then(function(artistEventModel){
						ArtistEvent.publishCreate(artistEventModel);
						res.json(artistEventModel);
					});
				}

			}
		});
	},

	update: function (req, res) {},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Event.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Event.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Event.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};


