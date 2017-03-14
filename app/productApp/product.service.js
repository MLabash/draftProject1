productApp.service('productService', productService);
function productService($http){
    return { 
        getProduct: function() {
            return $http.get('/product')
    }
  };   
}