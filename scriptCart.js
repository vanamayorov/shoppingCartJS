if (localStorage.getItem('cart')) {

    let cart = new Cart(JSON.parse(localStorage.getItem('cart')));
    document.querySelector(".cart-out").innerHTML = "";
    document.querySelector(".cart-out").append(cart.render());


    document.querySelector(".cart-out").addEventListener("click", (event) => {
        let target = event.target;
        if (target.classList.contains("delete")) {
            let articul = target.dataset["articul"];
            cart.removeFromCart(articul);
            updateState(cart, JSON.stringify(cart.productsCart));
        }

        else if (target.classList.contains("plus")) {
            let articul = target.dataset["articul"];
            cart.plusGood(articul);

            updateState(cart, JSON.stringify(cart.productsCart));
        }

        else if (target.classList.contains("minus")) {
            let articul = target.dataset["articul"];
            cart.minusGood(articul);

            updateState(cart, JSON.stringify(cart.productsCart));
        }
    });
}

function updateState(instance, obj) {
    document.querySelector(".cart-out").innerHTML = "";
    document.querySelector(".cart-out").append(instance.render());

    localStorage.setItem("cart", obj);
}