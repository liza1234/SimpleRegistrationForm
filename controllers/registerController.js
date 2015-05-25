angular.module("myApp").controller("registerController",
    function($scope){

        $scope.register = function() {
            console.log($scope.user);
        };
        $scope.loadCity = function(){
            console.log($scope.state);
            $scope.user.city =$scope.user.state.capital;
        };
        function init(){
            $scope.user = {
                firstName :"",
                lastName :"",
                dob :"",
                email :"",
                password :""
            };
            $scope.states = [{"stateCode":"KS",name:"Kansas",capital:"Topeka"},
                {"stateCode":"CA",name:"California",capital:"Sacramento"},
                {"stateCode":"NY",name:"New York",capital:"Albany"},
                {"stateCode":"ID",name:"Idaho",capital:"Boise"},
                {"stateCode":"NC",name:"North Carolina",capital:"Raleigh"}]
        }
        init();
    });