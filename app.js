var app = angular.module("myApp",[]);
app.controller('myc', function ($scope) {
    $scope.myvalidname = "hidden";
    $scope.myvalidemail = "hidden";
    $scope.myvalidaddress1 = "hidden";
    $scope.myvalidzip = "hidden";
    $scope.myvalidcity = "hidden";
    $scope.myvalidstate = "hidden";
    $scope.myvalidcountry = "hidden";
    $scope.submit = function(){
        
        if(!$scope.myForm.name.$touched || $scope.myForm.name.$invalid){
            $scope.myvalidname = "visible";
        }else{
            $scope.myvalidname = "hidden";
        }
        if(!$scope.myForm.email.$touched || $scope.myForm.email.$invalid){
            $scope.myvalidemail = "visible";
        }else{
            $scope.myvalidemail = "hidden";
        }
        if(!$scope.myForm.address1.$touched || $scope.myForm.address1.$invalid){
            $scope.myvalidaddress1 = "visible";
        }else{
            $scope.myvalidaddress1 = "hidden";
        }
        if(!$scope.myForm.zip.$touched || $scope.myForm.zip.$invalid){
            $scope.myvalidzip = "visible";
        }else{
            $scope.myvalidzip = "hidden";
        }
        if(!$scope.myForm.city.$touched || $scope.myForm.city.$invalid){
            $scope.myvalidcity = "visible";
        }else{
            $scope.myvalidcity = "hidden";
        }
        if(!$scope.myForm.state.$touched || $scope.myForm.state.$invalid){
            $scope.myvalidstate = "visible";
        }else{
            $scope.myvalidstate = "hidden";
        }
        if(!$scope.myForm.country.$touched || $scope.myForm.country.$invalid){
            $scope.myvalidcountry = "visible";
        }else{
            $scope.myvalidcountry = "hidden";
        }




        if($scope.myForm.$valid) {
            console.log("form is valid");
          
        console.log("form is left")
        var div = document.createElement("div");
        div.className = "jumbotron jumbotron-fluid";
        div.style.width = "100%";
        div.style.height = "100px";
        div.style.background =  "#e9b6bb";
        div.style.color = "white";
        var newname = document.getElementById("name").value;
        var newemail = document.getElementById("email").value;
        div.innerHTML = "Hello:  "+newname+"<br>"+"Your email: "+newemail+"<br>";
        document.getElementById("mybox").appendChild(div);
        } 

        $scope.myvalid = "hidden";
      
    }
});
/*
function MyCtrl($scope){
    $scope.submit = function(){
        console.log("form is left")
        var div = document.createElement("div");
        div.className = "jumbotron jumbotron-fluid";
        div.style.width = "100%";
        div.style.height = "100px";
        div.style.background =  "#e9b6bb";
        div.style.color = "white";
        var newname = document.getElementById("name").value;
        var newemail = document.getElementById("email").value;
        div.innerHTML = "Hello:  "+newname+"<br>"+"Your email: "+newemail+"<br>";
        
        document.getElementById("mybox").appendChild(div);
     
    } 
  };



/**
function myFunction() {
    var div = document.createElement("div");
    div.className = "jumbotron jumbotron-fluid";
    div.style.width = "100%";
    div.style.height = "100px";
    div.style.background =  "#e9b6bb";
    div.style.color = "white";
    var newname = document.getElementById("name").value;
    var newemail = document.getElementById("email").value;
    div.innerHTML = "Hello:  "+newname+"<br>"+"Your email: "+newemail+"<br>";
    
    document.getElementById("mybox").appendChild(div);
}
*/