/**
* Merch.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        description: {
            type: 'string',
        },
        imageUrl: {
            type: 'string',
            defaultsTo: 'images/bg.png'
        },
        price: {
            type: 'string',
        },
        stock: {
            type: 'string',
        },
        title: {
            type: 'string',
        },
        urlTitle: {
            type: 'string',
        },
        user: {
            model: 'user',
        },
    },

    getOne: function(id) {
        return Merch.findOne(id)
        .populate('user')
        .then(function (model) {
            return [model];
        });
    },

    getSome: function(limiting, skipping, sort, filter) {
        console.log(filter)
        return Merch.find()
        .where(JSON.parse(filter))
        .sort(sort)
        .limit(limiting)
        .skip(skipping)
        .populate('user')
        .then(function (models) {
            return models;
        });
    },
};
