(function () {
'use strict';

angular.module('Assignment2App', [])
       .controller('Assignment2BuyController', Assignment2BuyController)
       .controller('Assignment2BoughtController', Assignment2BoughtController)
       .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

var shoppingList = [
  { name: "cookies", quantity: 10, bought: false },
  { name: "bread", quantity: 20, bought: false },
  { name: "butter", quantity: 30, bought: false },
  { name: "milk", quantity: 40, bought: false },
  { name: "water", quantity: 50, bought: false }
];

Assignment2BuyController.$inject = ["ShoppingListCheckOffService"];
function Assignment2BuyController(ShoppingListCheckOffService){
        this.shoppingList = ShoppingListCheckOffService.getItemsToBuy();

        this.buyItem = function(index){
          ShoppingListCheckOffService.buyItem(index);
        }
};

Assignment2BoughtController.$inject = ["ShoppingListCheckOffService"];
function Assignment2BoughtController(ShoppingListCheckOffService){
        this.shoppingList = ShoppingListCheckOffService.getItemsBought();
};

function ShoppingListCheckOffService(){
        var itemsToBuy = shoppingList;
        var itemsBought = [];

        this.getItemsToBuy = function(){
          return itemsToBuy;
        };

        this.getItemsBought = function(){
          return itemsBought;
        };

        this.buyItem = function(index){
          itemsBought.push(itemsToBuy[index]);
          itemsToBuy.splice(index,1);
        }
};

})();
