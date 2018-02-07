var app = angular.module("myApp",[]);
app.controller('myc', function ($scope,$window,$compile) {
    $scope.myvalidname = "hidden";
    $scope.myvalidemail = "hidden";
    $scope.myvalidaddress1 = "hidden";
    $scope.myvalidzip = "hidden";
    $scope.myvalidcity = "hidden";
    $scope.myvalidstate = "hidden";
    $scope.myvalidcountry = "hidden";
   
    $scope.generateid = 1;
    $scope.myfun = function(){
        console.log("button clicked");
    };
    $scope.anmyboxelements=[];    
    $scope.count = 1;
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
            var div = document.createElement("div");
            div.className = "jumbotron jumbotron-fluid";
            div.id = $scope.generateid;
            $scope.generateid = $scope.generateid +1;
            div.style.width = "100%";
            div.style.height = "100%";
            div.style.background =  "#e9b6bb";
            div.style.color = "white";
            var newname = document.getElementById("name").value;
            var newemail = document.getElementById("email").value;
            var newaddress1 = document.getElementById("address1").value;
            var newaddress2 = document.getElementById("address2").value;
            var newzip = document.getElementById("zip").value;
            var newcity = document.getElementById("city").value;
            var newstate = document.getElementById("state").value;
            var newcountry = document.getElementById("country").value;
            console.log($window.myboxelements);
            $scope.mynewangulabox = {
                "name": newname,
                "email": newemail
            };
            $scope.anmyboxelements.push($scope.mynewangulabox);
            console.log($scope.mynewangulabox);
            console.log($window.myboxelements);
            $scope.angthopfun = function(event){
                $scope.value = event.target.id;
                console.log("button id "+event.target.id);
                console.log("the id is: "+$scope.value);
                console.log($scope.anmyboxelements[0].name);
                document.getElementById("name").value = $scope.anmyboxelements[$scope.value-2].name;
                document.getElementById("email").value;
            };
            div.innerHTML = "Hello:  "+newname+"<button id="+$scope.generateid+" "+"class='editdetails' data='{{button.id}}' data-ng-click='angthopfun($event)'>edit</button><br>"+"Your email: "+newemail+"<br>"
            +"address:"+newaddress1+" "+newaddress2+" "+newzip+" "+newcity+" "+newstate+" "+newcountry;
            var cdiv =$compile(div)($scope);
            angular.element(document.getElementById("mybox")).append(cdiv);
        } 
      
    }
   
});