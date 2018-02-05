var app = angular.module("myApp",[]);
app.controller('myc', function ($scope) {
    $scope.submit = function(){
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