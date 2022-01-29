class Cart {
    constructor(productsCart, currency = "UAH") {
        this.productsCart = productsCart;
        this.currency = currency;
    }

    plusGood(articul) {
        this.productsCart[articul]["count"]++;
    }

    minusGood(articul) {
        if (this.productsCart[articul]["count"] - 1 === 0) {
            this.removeFromCart(articul);
        } else {
            this.productsCart[articul]["count"]--;
        }
    }

    removeFromCart(articul) {
        delete this.productsCart[articul];
    }

    getTotal() {
        let total = 0;

        for (let key in this.productsCart) {
            total += this.productsCart[key]["price"] * this.productsCart[key]["count"];
        }

        return total;
    }

    render() {
        let table = document.createElement("table");
        table.classList.add("cart");
        for (let key in this.productsCart) {
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            let button = document.createElement("button");
            button.classList.add("delete");
            button.classList.add("button-primary");
            button.innerHTML = "x";
            button.setAttribute("data-articul", key);
            td.append(button);
            tr.append(td);

            td = document.createElement('td');
            let img = document.createElement('img');
            img.src = this.productsCart[key].image;
            td.append(img);
            tr.append(td);

            td = document.createElement('td');
            let h4 = document.createElement('h4');
            h4.innerHTML = this.productsCart[key].name;
            td.append(h4);
            tr.append(td);

            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add('minus');
            button.classList.add('button-primary');
            button.innerHTML = "-";
            button.setAttribute('data-articul', key);
            td.append(button);
            tr.append(td);

            td = document.createElement('td');
            let span = document.createElement('span');
            span.innerHTML = this.productsCart[key].count;
            td.append(span);
            tr.append(td);

            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add('plus');
            button.classList.add('button-primary');
            button.innerHTML = "+";
            button.setAttribute('data-articul', key);
            td.append(button);
            tr.append(td);

            td = document.createElement('td');
            span = document.createElement('span');
            span.innerHTML = this.productsCart[key].count * this.productsCart[key].price + ' ' + this.currency;
            td.append(span);
            tr.append(td);
            table.append(tr);
        }

        let tr = document.createElement("tr");
        let td = document.createElement("td");

        td.setAttribute('colspan', 7);
        td.style.textAlign = 'right';
        td.innerHTML = '<span class="total">Total: </span> ' + this.getTotal() + ' ' + this.currency;
        tr.append(td);
        table.append(tr);

        return table;
    }
}