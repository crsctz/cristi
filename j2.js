
function ClickToEditCtrl($scope) {

    $scope.editorEnabled = false;

    $scope.enableEditor = function() {
        $scope.editorEnabled = true;
        $scope.editableTitle = $scope.todo.text;
        $scope.editableTitle1 = $scope.todo.descriere;
        $scope.editableTitle2 = $scope.todo.categorie;
    };

    $scope.disableEditor = function() {
        $scope.editorEnabled = false;
    };

    $scope.save = function() {
        $scope.todo.text = $scope.editableTitle;
        $scope.todo.descriere = $scope.editableTitle1;
        $scope.todo.categorie = $scope.editableTitle2;
        $scope.disableEditor();
    };
};