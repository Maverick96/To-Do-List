const myApp = angular.module("myApp",[])
myApp.controller("myController", function ($scope, $filter, $http) { 


    $scope.taskArray =  [];

    //creating a configuration object for http request
    let config = {
        method : 'GET',
        url : 'http://localhost:8081'
    };

    //making async http request
    $http(config)
    .then(function successCallback(res) {
       let obj;
       //storing the data response in the taskArray
       res.data.forEach((row) => {
           // var str = row.todo
            obj = { toDo : row.todo , done : row.done}      
            $scope.taskArray.push(obj);
       })

//to add task
    $scope.addTask = function(){
        let taskObject = { toDo : $scope.task , done : false}
       
        if($scope.task.length > 0)   
            $scope.taskArray.push(taskObject) 
        console.log(typeof taskObject)
       
        let config = {
            method : 'POST',
            url : 'http://localhost:8081',
            headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : taskObject
        }
        $http(config)
        .then(function success(res){
            console.log("Added to databse")
        }, function error(err){
            console.log(err)
        })

         $scope.task = ""
     }
   //removes tasks which are checked
   $scope.removeCompeletedTask = function(){

       let removeElement = []; 
       
        let config = {
            headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

       $scope.taskArray.forEach(function(task){
           if(task.done){
               $http.post('http://localhost:8081/RemoveTasks',task,config)
             .then(function success(res){
                     console.log("Updated")
             },function error(res){
                 console.log(res)
              })
           }

       })

       $scope.taskArray = $scope.taskArray.filter(function(task){
           if(!task.done)
            return task
       })


        
   }

   //displays the number of tasks left
   $scope.getTask = function(){
       let num = $scope.taskArray.length
       if(num > 0)
         return "Number Of Tasks Left Are " + num
       return "You Have No Tasks Left To Do"
   }

  
      },function errorCallback(res){
        console.log(res);
    })
 })