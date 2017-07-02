/**
* Venue.js
*
*/

module.exports = {

	attributes: {
        title: {
            type: 'string',
        },
        avatarUrl: {
            type: 'string',
            defaultsTo: 'images/triangle3cc.png'
        },
        coverUrl: {
            type: 'string',
            defaultsTo: 'images/3ccbg.jpg'
        },
        urlTitle: {
            type: 'string',
        },
        address: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        facebook: {
            type: 'string',
        },
        twitter: {
            type: 'string',
        },
        google: {
            type: 'string',
        },
        booking: {
            type: 'string',
        }
    },

    getOne: function(id) {
        return Venue.findOne(id)
        .then(function (model) {
            return [model];
        });
    },

    getSome: function(limiting, skipping, sort, filter) {
        return Venue.find()
        .where(JSON.parse(filter))
        .sort(sort)
        .limit(limiting)
        .skip(skipping)
        .then(function (models) {
            return models;
        });
    },
    
};
