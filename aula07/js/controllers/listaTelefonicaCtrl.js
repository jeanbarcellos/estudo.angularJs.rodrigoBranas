angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = function () {
        $http.get('http://localhost/estudos/angularJS/teste/api/contatos.php').success(function (data, status) {
            $scope.contatos = data;
        });
    };
    var carregarOperadoras = function () {
        $http.get('http://localhost/estudos/angularJS/teste/api/operadoras.php').success(function (data, status) {
            $scope.operadoras = data;
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        $http.post("http://localhost:3412/contatos", contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };

//    $scope.adicionarContato = function (contato) {
//        // Envia pro back-
//        $scope.contatos.push(angular.copy(contato));
//        delete $scope.contato;
//        $scope.contatoForm.$setPristine();
//    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado)
                return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();
});