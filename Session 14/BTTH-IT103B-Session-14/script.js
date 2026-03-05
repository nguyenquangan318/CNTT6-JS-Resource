const products = [
    { id: 1, name: "Bánh Chưng 2026", price: 150000, img: "./img/banhchung.webp" },
    { id: 2, name: "Giò Lụa", price: 180000, img: "./img/giolua.jpg" },
    { id: 3, name: "Cành Đào", price: 500000, img: "./img/canhdao.webp" },
    { id: 4, name: "Mứt Tết", price: 120000, img: "./img/muttet.webp" },
    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./img/lixi.webp" },
    { id: 6, name: "Dưa Hấu", price: 60000, img: "./img/duahau.jpg" }
];

const cart = [
    { id: 1, name: "Bánh Chưng 2026", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 5, name: "Lì Xì (Tệp)", price: 20000 }
];

function renderProducts() {
    //Lấy phần tử chứa tất cả sản phẩm
    let listProductElement = document.getElementById("product-list");
    //Duyệt mảng sản phẩm
    products.forEach((product) => {
        //Với mỗi sản phẩm thì hiển thị ra giao diện
        listProductElement.innerHTML += `<div class="product-card">
                    <img src="${product.img}" alt="">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price.toLocaleString("vi-vn")}đ</p>
                    <button class="btn-add" id="">Thêm vào giỏ</button>
                </div>`
    })
}

function renderCart() {
    let listCartElement = document.getElementById("cart-list");
    cart.forEach((item) => {
        listCartElement.innerHTML += `<li>
                        <span class="cart-item-name">${item.name}</span>
                        <div>
                            <span class="cart-item-price">${item.price.toLocaleString("vi-vn")}đ</span>
                            <button class="btn-remove">X</button>
                        </div>
                    </li>`
    })

    let emptyMsgElement = document.getElementsByClassName("empty-msg")[0];
    if (cart.length !== 0) {
        emptyMsgElement.innerHTML = "";
    }

    let totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText = cart.reduce((total, item) => total + item.price, 0).toLocaleString("vi-vn")+ "đ";
}
renderProducts();
renderCart();