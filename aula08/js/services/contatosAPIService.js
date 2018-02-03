angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {

    var _getContatos = function () {
        return $http.get(config.baseUrl + '/api/contatos.php');
    };
    var _saveContato = function (contato) {
        return $http.post(config.baseUrl + 'http://localhost/estudos/angularJS/teste/api/contatos.php', contato);
    };

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    };

});
