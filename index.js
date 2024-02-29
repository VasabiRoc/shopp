const shoppingCart = {
    items : [],
    total:0,

    additem() {
      product({
        name: productName,
        price: 11,
        quantity: 1,
      })
      for (this.items in shoppingCart) {
        if (product.name === productName) {
            shoppingCart(this.items).push(productName);
            shoppingCart(this.total) + product.price;
            totalCount += 1;
        }
      }
    },

    removeitem() {
      for (this.items in shoppingCart)  {
        if (product.name === productName) {
            shoppingCart(this.items).slice(productName,1)
            shoppingCart(this.total) - product.price
        }
      }
    },

    updateQuantity(){
        shoppingCart[items.length] = 0;
        for (this.items in shoppingCart) {
            count += totalCount
        } return count
    },

    calculateTotal(){
      return shoppingCart.total = product.price * shoppingCart.items.length
    },

    clearCart() {
       shoppingCart.clearCart
    }
}