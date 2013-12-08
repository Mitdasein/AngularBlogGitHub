// adapted from https://gist.github.com/fwielstra/1025038 
var express = require('express');
var mongoose = require('mongoose');
// var app = module.exports = express.createServer();


var app = angular.module('blog', []);
var isLoggedIn = false;

app.controller('MainCtrl', function($scope) {

  $scope.name = 'World';

  $scope.myusers = [{
    username: 'user1',
    password: '12323'
  }, {
    username: 'user2',
    password: '12323'
  }];
  $scope.submit = function() {
    if ($scope.username && $scope.password) {
      var user = $scope.username;
      var pass = $scope.password;
      alert("welcome" + user);
      isLoggedIn = true;

      $scope.myusers.push({
        username: user,
        password: pass
      });
    } else {
      alert("Invalid Login");
    }
  }
});


});