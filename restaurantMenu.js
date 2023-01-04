var restaurantMenu = {
    nameResto: "DreamRestaurant",
    items: [
        {
            name: "pizza",
            price: 5
        },
        {
            name: "spagetti",
            price: 6
        },
        {
            name: "juice",
            price: 3
        },
        {
            name: "dessert",
            price: 2
        },
        {
            name: "water",
            price: 1
        }
    ],
    showMenu: function () {
        alert(JSON.stringify(restaurantMenu.items))
        /*for (var i = 0; i < this.items.length; i++) {
            alert(JSON.stringify(restaurantMenu.items))
            break;
        } */
    },
    order: function (myOrder) {
        var myOrder = prompt("What would you like to order?")
        if (myOrder == this.items[0].name) {
            alert(JSON.stringify(myOrder))
        } else if (myOrder == this.items[1].name) {
            alert(JSON.stringify(myOrder))
        } else if (myOrder == this.items[2].name) {
            alert(JSON.stringify(myOrder))
        } else if (myOrder == this.items[3].name) {
            alert(JSON.stringify(myOrder))
        } else if (myOrder == this.items[4].name) {
            alert(JSON.stringify(myOrder))
        } 
        else {
            console.log("We don't have such item in our menu")
        }
    }
}

restaurantMenu.showMenu()
restaurantMenu.order()



