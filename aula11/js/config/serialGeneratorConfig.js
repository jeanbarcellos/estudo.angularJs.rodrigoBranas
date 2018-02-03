angular.module("listaTelefonica").config(function (serialGeneratorProvider) {
    
    serialGeneratorProvider.setLength(5);

//    console.log(serialGeneratorProvider.getLength());
});