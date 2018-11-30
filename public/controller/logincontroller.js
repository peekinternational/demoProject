/*
* author  => Muhammad sajid
* designBy => Muhammad sajid
*/
app.controller("loginController", function($scope,$http,$location,$rootScope) {
	 /*login function*/
   $http.get('getLoginData')
   .then(function(res){
       if(res.data.id){
        $location.path("/dashboard");
       }
    });
    $scope.login = function () {
        $http({
              method: 'POST',
              url: 'http://winged-guild-133523.appspot.com/api/v1/users/session',
              data:{email:$scope.email,password:$scope.password}
            }).then(function successCallback(response) {
            	$rootScope.user = response.data;
              $http.post('/saveLoginData',{user:response.data}).then((res) => {
                $location.path("/dashboard");
              })
            	 
            }, function errorCallback(response) {
                $scope.notAuthorize = true;
            });
    }
    
});