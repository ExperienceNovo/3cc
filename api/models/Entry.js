/**
* Entry.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        artist: {
            type: 'string',
        },
        venue: {
            type: 'string',
        },
        eventModel: {
            type: 'string',
            required: true
        },
        settlementJson:{
             type: 'json',
        },
    },

    getAll: function() {
        return Entry.find()
        .sort({createdAt: 'asc'})
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return Entry.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
    
};
