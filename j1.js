function cumparaturi($scope) {

    $scope.todos = [];

    $scope.controller = function () {
        $scope.checked = !$scope.checked;
    };

    $scope.produs = {
        text: '',
        descriere: '',
        categorie: ''
    };


    $scope.addTodo = function() {

            $scope.todos.push($scope.produs);
            $scope.produs={
                text: '',
                descriere: '',
                categorie:''
            };
         };



    $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
    });


};


};
