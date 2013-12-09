
var app = angular.module('blog', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.isLoggedIn = false;
  $scope.curUser = null;
  $scope.myusers = [{
    username: 'user1',
    password: '12323'
  }, {
    username: 'user2',
    password: '12323'
  }, {
    username: 'sean',
    password: 'a'
  }];
  $scope.submit = function() {
    if ($scope.username && $scope.password) {
      var user = $scope.username;
      var pass = $scope.password;
      /* alert("welcome" + user); */
      /* ng-show="isLoggedIn"; */

     $scope.isLoggedIn = true;
     $scope.curUser = user;
     console.log('MARK');
      /*$scope.myusers.push({
        username: user,
        password: pass 
      });*/
    } else {
      alert("Invalid Login");
    } 
  }
});

/*
function ComposePostFormCntl() {
    // this.state = /^\w\w$/;
    // this.zip = /^\d\d\d\d\d$/;
    this.master = {
        postTitle: 'Post title',
        post: {: 'Write post here',
            tags(separated by commas): 'tag1, tag2',
            Category: 'Category',
            // zip:'12345'
        }
    };———
    this.cancel();
}

composePostFormCntl.prototype = {
    cancel: function () {
        this.form = angular.copy(this.master);
    },

    save: function () {
        this.master = this.form;
        this.cancel();
    },

    isCancelDisabled: function () {
        return angular.equals(this.master, this.form);
    },

    isSaveDisabled: function () {
        return this.userForm.$invalid || angular.equals(this.master, this.form);
    }

};
*/