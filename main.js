var myApp = angular.module('myApp', []);

myApp.controller('myAppController', ["$scope", "$http", function($scope, $http) {

    $scope.text = "";
    // $scope.text = "I am Daenerys Stormborn of the House Targaryen of the blood of Old Valyria. Valyrian is my mother tongue";
    $scope.engToVal = "English to Valyrian";
    $scope.engToValInValyrian = "English naejot valyrīha";
    $scope.valyrian = "Valyrian";


    $scope.translatedToValyrian = function() {
        $http({
                url: 'https://api.funtranslations.com/translate/valyrian.json?text=' + $scope.text,
                method: 'POST'
            }).then(function(res) {
                //Success
                $scope.translated = res.data.contents.translated;
                console.log($scope.testdata);
            }, function(res) {
                //Failure

            });
    };
    
    // $http({
    //     url: 'https://jsonplaceholder.typicode.com/users',
    //     method: 'GET'
    // }).then(function(res) {
    //     //Success
    //     $scope.testname = res.data[1].name;
    //     console.log($scope.testname);
    // }, function(res) {
    //     //Failure

    // });
}]);