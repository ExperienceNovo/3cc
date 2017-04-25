angular.module('models.entry', ['lodash', 'services', 'sails.io',])

.service('EntryModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {
    this.getAll = function() {
        var url = utils.prepareUrl('entry');
        return $sailsSocket.get(url).then(success, error);
    };

    this.createVolunteer = function(newModel) {
        var url = utils.prepareUrl('entry');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.createVeteran = function(newModel) {
        var url = utils.prepareUrl('entry');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel) {
        var url = utils.prepareUrl('entry/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);