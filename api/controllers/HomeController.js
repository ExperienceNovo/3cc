module.exports = {
    index: function(req, res) {
        res.view({
            title: 'Home',
            currentUser: req.user
        });
    },

    ssl: function(req, res) {
        res.send('9L7t4I1ujmSxWf1WzhSQZFeSHaZreeEihZoMLK7gqQs.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI')
    }
    
};