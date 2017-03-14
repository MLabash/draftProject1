productApp.controller('productController', productController);

function productController($http, productService) {
    var vm = this;
    
    productService.getProduct().then(function(result) {
        console.log(result.data);
        vm.product = result.data;
    });
}