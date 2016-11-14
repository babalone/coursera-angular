(function () {
'use strict';

angular.module('CustomServiceApp', [])
       .controller('ShoppingListAddController', ShoppingListAddController)
       .controller('ShoppingListShowController', ShoppingListShowController)
       .service('ShoppingListService', ShoppingListService); // guaranteed to be a singleton; lazily instantiated

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService){
  this.itemName = "";
  this.itemQuantity = "";

  this.addItem = function(){
    ShoppingListService.addItem(this.itemName, this.itemQuantity);
  }
};

ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService){
  this.items = ShoppingListService.getItems();

  this.removeItem = function(itemIndex){
    ShoppingListService.removeItem(itemIndex);
  }
};

function ShoppingListService(){
  var items = [];

  this.addItem = function(itemName, quantity){
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  this.getItems = function(){
    return items;
  };

  this.removeItem = function(itemIndex){
    items.splice(itemIndex,1);
  }
}

})();
