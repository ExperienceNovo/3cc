angular.module('models.venue', ['lodash', 'services', 'sails.io',])

.service('VenueModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('venue');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(limit, skip, sort, filter) {
        var url = utils.prepareUrl('venue');
        var query = {params:{limit:limit, skip:skip, sort: sort, filter:filter}};
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('venue');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel) {
        var url = utils.prepareUrl('venue/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);