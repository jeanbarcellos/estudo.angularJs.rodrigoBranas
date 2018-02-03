angular.module("listaTelefonica").directive("uiDate", function ($filter) {

    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
//            console.log(scope);
//            console.log(element);
//            console.log(attrs);
//            console.log(ctrl);

            // Função para formatar a data
            var _formatDate = function (date) {
                date = date.replace(/[^0-9]+/g, "");
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + date.substring(2);
                }
                if (date.length > 5) {
                    date = date.substring(0, 5) + "/" + date.substring(5, 9);
                }
                return date;
            };


            // Captura um evento de digitação
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });
            
            // No momento que tenho os 10 caracteres é que ocorrerá a interação com o escope
            ctrl.$parsers.push(function (value) {
                if (value.length === 10) {
                    var dateArray = value.split("/");
                    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]).getTime();
                }
            });

            // Fomata de milisegundos para data normal
            ctrl.$formatters.push(function (value) {
                return $filter("date")(value, "dd/MM/yyyy");
            });

        }
    };

});