module.exports = {
    attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        firstName: {
            type: 'string',
            //required: true
        },
        lastName: {
            type: 'string',
            //required: true
        },
        avatarUrl: {
            type: 'string',
            defaultsTo: 'images/bg.png'
        },
        coverUrl: {
            type: 'string',
            defaultsTo: 'images/3ccbg.jpg'
        },
        passports : { collection: 'Passport', via: 'user' }
    },

    getAll: function() {
        return User.find()
        .then(function (models) {
            return [models];
        });
    },

    getOne: function(id) {
        return User.findOne(id)
        .then(function (model) {
            return [model];
        });
    }
};