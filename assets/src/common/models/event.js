angular.module('models.event', ['lodash', 'services', 'sails.io',])

.service('EventModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('event');
        return $sailsSocket.get(url).then(success, error);
    };

    this.getSome = function(limit, skip, sort, filter) {
        var url = utils.prepareUrl('event');
        var query = {params:{limit:limit, skip:skip, sort: sort, filter:filter}};
        return $sailsSocket.get(url, query).then(success, error);
    };

    this.create = function(newModel) {
        var url = utils.prepareUrl('event');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel) {
        var url = utils.prepareUrl('event/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);