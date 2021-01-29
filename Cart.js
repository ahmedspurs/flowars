angular.module('myApp', ['ngAnimate']);

angular.module('myApp')
    .controller('myController', function ($scope) {

        $scope.products = [

            [   {id:1,name: "Daffodi", img: 'images/1.jpg', price: 19.99, Material: "Natural", Occasion: "Friendship", qty:1},
                {id:2,name: "Cherry Blossom", img: 'images/2.jpg', price: 15.99, Material: "Artificial", Occasion: "Wedding", qty:1},
                {id:3,name: "Lily", img: 'images/3.jpg', price: 12.99, Material: "Artificial", Occasion: "Birthday", qty:1},
                {id:4,name: "Daisy", img: 'images/4.jpg', price: 9.99, Material: "Natural", Occasion: "Love", qty:1},
                {id:5,name: "Tulip", img: 'images/5.jpg', price: 11.99, Material: "Natural", Occasion: "Birthday", qty:1},
                {id:6,name: "Poppy", img: 'images/6.jpg', price: 23.99, Material: "Artificial", Occasion: "Friendship", qty:1},
                {id:7,name: "Rose", img: 'images/7.jpg', price: 5.99, Material: "Natural", Occasion: "Wedding", qty:1},
                {id:8,name: "BlueBell", img: 'images/8.jpg', price: 16.99, Material: "Artificial", Occasion: "Love", qty:1}
            ],//product[0]

            [
                {id:9,name: "Sunflower", img: 'images/9.jpg', price: 8.99, Material: "Natural", Occasion: "Friendship", qty:1},
                {id:10,name: "Dahlia", img: 'images/10.jpg', price: 24.99, Material: "Artificial", Occasion: "Wedding", qty:1},
                {id:11,name: "Lavender", img: 'images/11.jpg', price: 12.99, Material: "Artificial", Occasion: "Birthday", qty:1},
                {id:12,name: "Orchid", img: 'images/12.jpg', price: 23.99, Material: "Natural", Occasion: "Love", qty:1},
                {id:13,name: "Tiger Lily", img: 'images/13.jpg', price: 17.99, Material: "Natural", Occasion: "Birthday", qty:1},
                {id:14,name: "Bird of Paradise", img: 'images/14.jpg', price: 18.99, Material: "Artificial", Occasion: "Friendship", qty:1},
                {id:15,name: "Peony", img: 'images/15.jpg', price: 15.99, Material: "Natural", Occasion: "Wedding", qty:1},
                {id:16,name: "Ixora", img: 'images/16.jpg', price: 3.99, Material: "Artificial", Occasion: "Love", qty:1}
            ],//product[1]

            [
                {id:17,name: "Crocus", img: 'images/17.jpg', price: 19.99, Material: "Natural", Occasion: "Friendship", qty : 1},
                {id:18,name: "Lotus", img: 'images/18.jpg', price: 15.99, Material: "Artificial", Occasion: "Wedding", qty : 1},
                {id:19,name: "Aster", img: 'images/19.jpg', price: 12.99, Material: "Artificial", Occasion: "Birthday", qty : 1},
                {id:20,name: "Snowdrop", img: 'images/20.jpg', price: 10.99, Material: "Natural", Occasion: "Love", qty : 1},
                {id:21,name: "Violet", img: 'images/21.jpg', price: 21.99, Material: "Natural", Occasion: "Birthday", qty : 1},
                {id:22,name: "Forget Me Not", img: 'images/22.jpg', price: 18.99, Material: "Artificial", Occasion: "Friendship", qty : 1},
                {id:23,name: "Dandelion", img: 'images/23.jpg', price: 7.99, Material: "Natural", Occasion: "Wedding", qty : 1},
                {id:24,name: "Iris", img: 'images/24.jpg', price: 24.99, Material: "Artificial", Occasion: "Love", qty : 1}
            ]//product[2]
        ]

      $scope.cart = [];

      var findItemById = function(items, id) {
        return _.find(items, function(item) {
          return item.id === id;
        });
      };

      $scope.getCost = function(item) {
        return item.qty * item.price;
      };

      $scope.addItem = function(itemToAdd) {
        var found = findItemById($scope.cart, itemToAdd.id);
        if (found) {
          found.qty += itemToAdd.qty;
        }
        else {
          $scope.cart.push(angular.copy(itemToAdd));}
      };

      $scope.getTotal = function() {
        var total =  _.reduce($scope.cart, function(sum, item) {
          return sum + $scope.getCost(item);
        }, 0);
        console.log('total: ' + total);
        return total;
      };

      $scope.clearCart = function() {
        $scope.cart.length = 0;
      };

      $scope.removeItem = function(item) {
        var index = $scope.cart.indexOf(item);
        $scope.cart.splice(index, 1);
      };

    });
