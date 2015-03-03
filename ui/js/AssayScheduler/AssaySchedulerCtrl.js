/**
 * Created by owner on 2/27/2015.
 */
define(['angular'], function (angular) {
    'use strict';
    return angular.module('AssaySchedulerApp', []).controller('InstrumentListCtrl', function ($scope, $http) {

        var url='http://localhost:9090/Instruments';
        $http.get(url).success(function (data,status,headers,config) {

            $scope.Instruments = data.Instruments;
        }).error(function(data,status,headers,config) {
            console.log(status);
            console.log(data);
            $scope.errors = "Cannot find Instruments Names";
        });
    });
});