// สร้าง container แสดงตะกร้า (ไม่แก้ HTML)
const orderContainer = document.createElement('div');
orderContainer.id = 'order-cart-container';
orderContainer.innerHTML = '<h2>รายการสินค้าในตะกร้า</h2><ul id="order-cart-list"></ul>';
document.body.appendChild(orderContainer);

function loadOrderCart() {
    const cartList = document.getElementById('order-cart-list');
    cartList.innerHTML = '';

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartList.innerHTML = '<li>ตะกร้าว่าง</li>';
        return;
    }

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} จำนวน ${item.quantity}`;
        cartList.appendChild(li);
    });
}

// เรียกโหลดตะกร้าเมื่อเปิดหน้า
loadOrderCart();

// แสดงตะกร้าเมื่อโหลดหน้า
showCart();
