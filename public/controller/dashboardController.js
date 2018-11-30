/*
* author  => Muhammad sajid
* designBy => Muhammad sajid
*/

app.controller("dashController", function($scope, $http, $window, $location, $rootScope) {
        $http.get('getLoginData')
        .then(function(res){
            console.log(res.data);
            $scope.user = res.data;
            $http.get('http://winged-guild-133523.appspot.com/api/v1/projects/random?max=8')
            .then(function(res){
                // console.log(res.data);
                $scope.projects = res.data;
            })
            $http.get('http://winged-guild-133523.appspot.com/api/v1/items?categories=cat1&categories=cat2&promo=false')
            .then(function(res){
                // console.log(res.data);
                $scope.products = res.data.data;
            })
        })
    /*if($rootScope.user.id){
        
    }*/
    
});