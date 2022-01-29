document.addEventListener("DOMContentLoaded", () => {
    fillPage();
    addToCart();
});

function addToCart() {
    const data = {};
    document.querySelector(".goods").addEventListener("click", function (event) {
        let target = event.target;
        if (target.classList.contains("to-cart")) {
            let articul = target.dataset['articul'];
            if (data[articul] === undefined) {
                data[articul] = cart[articul];
                data[articul].count = 1;
            } else {
                data[articul].count++;
            }
        }

        localStorage.setItem('cart', JSON.stringify(data));
    });
}


function fillPage() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("pricing-table", "row");

    for (let key in cart) {
        wrapper.innerHTML +=
            `
        <div class="col col-md-6 col-lg-4">
            <div class="package featured text-center">
                <h2>${cart[key]["name"]}</h2>
                <img src="${cart[key]["image"]}">
                <p class="price">${cart[key]["price"]} UAH</p>
                <button class="to-cart button-primary" data-articul="${key}">В корзину</button>
            </div>
        </div>
        `;
    }

    document.querySelector(".goods").append(wrapper);
}