/*
* author  => Muhammad sajid
* designBy => Muhammad sajid
*/
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/login.html"
    })
    .when("/dashboard", {
        templateUrl : "./views/dashboard.html"
    })
    .when("/projects", {
        templateUrl : "./views/projects.html"
    })
    .when("/products", {
        templateUrl : "./views/products.html"
    });
});