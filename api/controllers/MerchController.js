/**
 * MerchController
 *
 */

module.exports = {

	getOne: function(req, res) {
		Merch.getOne(req.param('id'))
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
		Merch.getSome(limit, skip, sort)
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
		Merch.count()
		.exec(function(err, merchCount) {
			if (err) {return console.log(err);}
			else{res.json({ merchCount: merchCount })}
		});
	},

	getByUrl: function(req, res) {
		Merch.find()
		.where({urlTitle: req.param('path')})
		.spread(function(model) {
			Merch.subscribe(req, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	create: function (req, res) {
		var description = req.param('description');
		var stock = req.param('stock');
		var title = req.param('title');
		var urlTitle = req.param('title').replace(' ','-').toLowerCase();
		var user = req.param('user');
		var model = {
			description: description,
			stock: stock,
			title: title,
			urlTitle: urlTitle,
			user: user
		};
		Merch.create(model)
		.exec(function(err, merch) {
			if (err) {return console.log(err);}
			else {
				Merch.publishCreate(merch);
				res.json(merch);
			}
		});
	},

	update: function (req, res) {},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {return res.badRequest('No id provided.');}
		// Otherwise, find and destroy the model in question
		Merch.findOne(id).exec(function(err, model) {
			if (err) {return res.serverError(err);}
			if (!model) {return res.notFound();}
			Merch.destroy(id, function(err) {
				if (err) {return res.serverError(err);}
				Merch.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}
	
};


