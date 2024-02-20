// service.js

var app = angular.module('myApp');

app.service('figureCategoryService', function($http) {
    this.getAllCategories = function() {
        return $http.get('http://localhost:8080/getall'); // Thay đổi địa chỉ và cổng của API của bạn
    };
});
