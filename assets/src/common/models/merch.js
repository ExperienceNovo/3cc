angular.module('models.merch', ['lodash', 'services', 'sails.io',])

.service('MerchModel',['lodash', 'utils', '$sailsSocket', function(lodash, utils, $sailsSocket) {

    this.getSome = function(limit, skip, sort, filter) {
        var url = utils.prepareUrl('merch');
        var query = {params:{limit:limit, skip:skip, sort: sort, filter:filter}};
        console.log(query)
        return $sailsSocket.get(url, query).then(success, error);
    };
    
    this.create = function(newModel) {
        var url = utils.prepareUrl('merch');
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    this.update = function(newModel) {
        var url = utils.prepareUrl('merch/' + newModel.id);
        return $sailsSocket.post(url, newModel).then(success, error);
    };

    var success = function(response) {
        return response.data;
    };

    var error = function(error) {
        console.log(error);
    };
}]);