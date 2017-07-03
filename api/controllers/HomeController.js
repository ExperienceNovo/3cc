module.exports = {
    index: function(req, res) {
        res.view({
            title: 'Home',
            currentUser: req.user
        });
    },

    ssl: function(req, res) {
        res.send('qUwYNX1tY-lzRn20QyUxuwwmo0QPyw7wQxdnaD6e1XA.yMz-EAV5agQah1zn-w6Aqp0JVzxv1jmSFH6dh5Ea9uI')
    }
    
};