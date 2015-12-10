var dgsApp = angular.module("dgsApp", []);

// process header
dgsApp.controller("headerController", function () {

});

// process sidebar nav
dgsApp.controller('sidebarController', ['$scope', '$http', '$templateCache',
    function ($scope, $http, $templateCache) {
        $scope.method = 'GET';
        $scope.url = 'http://localhost:8080/DGSWeb/changePage/listMenu';

        $scope.fetch = function () {
            $scope.code = null;
            $scope.response = null;

            $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
                then(function (response) {
                    $scope.respCode = response.respCode;
                    $scope.jsonObject = response.jsonObject;
                }, function (response) {
                    $scope.respMsg = response.respMsg || "Request failed";
                    $scope.respCode = response.respCode;
                });
        };

        $scope.updateModel = function (method, url) {
            $scope.method = method;
            $scope.url = url;
        };
    }]);

$(document).ready(function () {
    // Handler for .ready() called.
});
