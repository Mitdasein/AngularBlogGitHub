angular.module('newPost', [ui.bootstrap]);
function DropdownCtrl($scope) {
	$scope.categories= [
	 "Food",
     "Code",
     "Cats",
     "Coffee",
     "Books",
     "Music",
     "Film",
     "Other"
    ];
}
