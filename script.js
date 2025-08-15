// Dữ liệu danh sách sản phẩm
const phones = [ 
    { 
        id: 1, 
        name: "iPhone 15 Pro", 
        price: 25000000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Đen", image: "image/15pd.webp", hexCode: "#2a2b2e" }, 
            { name: "Titan tự nhiên", image: "image/ip15pt.webp", hexCode: "#E2DCD3" } 
        ], 
        isFeatured: true,
        specifications: [
            { category: "Màn hình", detail: "6.1 inches, Super Retina XDR" },
            { category: "Camera sau", detail: "Chính 48MP, Siêu rộng 12MP, Tele 12MP" },
            { category: "Camera trước", detail: "12MP" },
            { category: "Bộ xử lý", detail: "Apple A17 Pro" },
            { category: "Pin", detail: "Khoảng 3650 mAh" },
            { category: "Hệ điều hành", detail: "iOS" }
        ]
    }, 
    { 
        id: 2, 
        name: "Samsung Galaxy S24 Ultra", 
        price: 28000000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Đen", image: "image/s24ud.webp", hexCode: "#202020" }, 
            { name: "Xám", image: "image/s24ux.webp", hexCode: "#D8D6D3" } 
        ], 
        isFeatured: true,
        specifications: [
            { category: "Màn hình", detail: "6.8 inches, Dynamic AMOLED 2X" },
            { category: "Camera sau", detail: "Chính 200MP, Siêu rộng 12MP, Tele 10MP, Tele 50MP" },
            { category: "Camera trước", detail: "12MP" },
            { category: "Bộ xử lý", detail: "Snapdragon 8 Gen 3 for Galaxy" },
            { category: "Pin", detail: "5000 mAh" },
            { category: "Hệ điều hành", detail: "Android 14" }
        ]
    }, 
    { 
        id: 3, 
        name: "Google Pixel 8 Pro", 
        price: 20000000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Đen", image: "image/gp8pd.jpg", hexCode: "#434346" }, 
            { name: "Trắng", image: "image/gp8pt.webp", hexCode: "#F1F1F1" } 
        ], 
        isFeatured: false,
        specifications: [
            { category: "Màn hình", detail: "6.7 inches, LTPO OLED" },
            { category: "Camera sau", detail: "Chính 50MP, Siêu rộng 48MP, Tele 48MP" },
            { category: "Camera trước", detail: "10.5MP" },
            { category: "Bộ xử lý", detail: "Google Tensor G3" },
            { category: "Pin", detail: "5050 mAh" },
            { category: "Hệ điều hành", detail: "Android 14" }
        ]
    }, 
    { 
        id: 4, 
        name: "Xiaomi 14", 
        price: 15000000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Đen", image: "image/x14d.webp", hexCode: "#000000" }, 
            { name: "Trắng", image: "image/x14t.png", hexCode: "#ffffff" } 
        ], 
        isFeatured: false,
        specifications: [
            { category: "Màn hình", detail: "6.36 inches, LTPO OLED" },
            { category: "Camera sau", detail: "Chính 50MP, Siêu rộng 50MP, Tele 50MP" },
            { category: "Camera trước", detail: "32MP" },
            { category: "Bộ xử lý", detail: "Snapdragon 8 Gen 3" },
            { category: "Pin", detail: "4610 mAh" },
            { category: "Hệ điều hành", detail: "HyperOS, Android 14" }
        ]
    }, 
    { 
        id: 5, 
        name: "Oppo Find X7", 
        price: 9590000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Xanh", image: "image/ofx7x.jpg", hexCode: "#4a6c4f" }, 
            { name: "Đen", image: "image/ofx7d.jpg", hexCode: "#2b2b2b" } 
        ], 
        isFeatured: false,
        specifications: [
            { category: "Màn hình", detail: "6.7 inches, AMOLED" },
            { category: "Camera sau", detail: "Chính 50MP, Siêu rộng 50MP, Tele 64MP" },
            { category: "Camera trước", detail: "32MP" },
            { category: "Bộ xử lý", detail: "Dimensity 9300" },
            { category: "Pin", detail: "5000 mAh" },
            { category: "Hệ điều hành", detail: "ColorOS 14, Android 14" }
        ]
    }, 
    { 
        id: 6, 
        name: "Vivo X100 Pro", 
        price: 14399000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Cam", image: "image/vx100pc.jpg", hexCode: "#c46c3b" }, 
            { name: "Đen", image: "image/vx100pd.webp", hexCode: "#282828" } 
        ], 
        isFeatured: false,
        specifications: [
            { category: "Màn hình", detail: "6.78 inches, AMOLED" },
            { category: "Camera sau", detail: "Chính 50MP, Siêu rộng 50MP, Tele 50MP" },
            { category: "Camera trước", detail: "32MP" },
            { category: "Bộ xử lý", detail: "Dimensity 9300" },
            { category: "Pin", detail: "5400 mAh" },
            { category: "Hệ điều hành", detail: "Funtouch OS 14, Android 14" }
        ]
    }, 
    { 
        id: 7, 
        name: "Realme 12 Pro", 
        price: 4790000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Xanh", image: "image/r12px.jpg", hexCode: "#323c4a" }, 
            { name: "Đỏ", image: "image/r12pd.webp", hexCode: "#7b4132" } 
        ], 
        isFeatured: false,
        specifications: [
            { category: "Màn hình", detail: "6.7 inches, AMOLED" },
            { category: "Camera sau", detail: "Chính 50MP, Tele 32MP, Macro 8MP" },
            { category: "Camera trước", detail: "16MP" },
            { category: "Bộ xử lý", detail: "Snapdragon 6 Gen 1" },
            { category: "Pin", detail: "5000 mAh" },
            { category: "Hệ điều hành", detail: "Realme UI 5.0, Android 14" }
        ]
    }, 
    { 
        id: 8, 
        name: "Xiaomi 13 Ultra", 
        price: 18490000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Xanh lá", image: "image/x13ux.jpg", hexCode: "#59844fff" }, 
            { name: "Đen", image: "image/x13ud.jpg", hexCode: "#282828" } 
        ], 
        isFeatured: false,
        specifications: [
            { category: "Màn hình", detail: "6.73 inches, LTPO AMOLED" },
            { category: "Camera sau", detail: "Chính 50MP, Siêu rộng 50MP, Tele 50MP, Tele 50MP" },
            { category: "Camera trước", detail: "32MP" },
            { category: "Bộ xử lý", detail: "Snapdragon 8 Gen 2" },
            { category: "Pin", detail: "5000 mAh" },
            { category: "Hệ điều hành", detail: "MIUI 14, Android 13" }
        ]
    }, 
    { 
        id: 9, 
        name: "Samsung Z Fold 5", 
        price: 17990000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Xanh", image: "image/sszf5x.webp", hexCode: "#2d3345" }, 
            { name: "Trắng", image: "image/sszf5t.webp", hexCode: "#f3f0e8" } 
        ], 
        isFeatured: false,
        specifications: [
            { category: "Màn hình", detail: "7.6 inches, Dynamic AMOLED 2X (gập)" },
            { category: "Camera sau", detail: "Chính 50MP, Siêu rộng 12MP, Tele 10MP" },
            { category: "Camera trước", detail: "10MP (ngoài), 4MP (trong)" },
            { category: "Bộ xử lý", detail: "Snapdragon 8 Gen 2 for Galaxy" },
            { category: "Pin", detail: "4400 mAh" },
            { category: "Hệ điều hành", detail: "One UI 5.1.1, Android 13" }
        ]
    }, 
    { 
        id: 10, 
        name: "iPhone 16 promax", 
        price: 29690000, 
        category: "Điện thoại",
        colors: [ 
            { name: "vàng sa mạc", image: "image/ip16pxv.webp", hexCode: "#fffbabff" }, 
            { name: "đen", image: "image/ip16pmd.jpg", hexCode: "#000000ff" } 
        ], 
        isFeatured: true,
        specifications: [
            { category: "Màn hình", detail: "6.9 inches, Super Retina XDR" },
            { category: "Camera sau", detail: "Chính 48MP, Siêu rộng 12MP, Tele 12MP, Tele 12MP" },
            { category: "Camera trước", detail: "12MP" },
            { category: "Bộ xử lý", detail: "Apple A18 Pro" },
            { category: "Pin", detail: "Khoảng 4676 mAh" },
            { category: "Hệ điều hành", detail: "iOS" }
        ]
    }, 
    { 
        id: 11, 
        name: "Iphone 16", 
        price: 18890000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Hồng", image: "image/ip16h.webp", hexCode: "#e700b5ff" }, 
            { name: "Xanh", image: "image/ip16x.webp", hexCode: "#0756cdff" } 
        ], 
        isFeatured: false,
        specifications: [
            { category: "Màn hình", detail: "6.1 inches, Super Retina XDR" },
            { category: "Camera sau", detail: "Chính 48MP, Siêu rộng 12MP" },
            { category: "Camera trước", detail: "12MP" },
            { category: "Bộ xử lý", detail: "Apple A18" },
            { category: "Pin", detail: "Khoảng 3888 mAh" },
            { category: "Hệ điều hành", detail: "iOS" }
        ]
    },
    { 
        id: 12, 
        name: "iPhone 15", 
        price: 15000000, 
        category: "Điện thoại",
        colors: [ 
            { name: "Hồng", image: "image/ip15h.jpg", hexCode: "#ffe4e1" }, 
            { name: "Đen", image: "image/ip15d.webp", hexCode: "#1c1c1e" } 
        ], 
        isFeatured: false,
        specifications: [
            { category: "Màn hình", detail: "6.1 inches, Super Retina XDR" },
            { category: "Camera sau", detail: "Chính 48MP, Siêu rộng 12MP" },
            { category: "Camera trước", detail: "12MP" },
            { category: "Bộ xử lý", detail: "Apple A16 Bionic" },
            { category: "Pin", detail: "Khoảng 3349 mAh" },
            { category: "Hệ điều hành", detail: "iOS" }
        ]
    },
    {
        id: 13,
        name: "Macbook Air M3 2024",
        price: 26000000,
        category: "Laptop",
        colors: [
            { name: "đen", image: "image/mba3.webp", hexCode: "#070606ff" }
        ],
        isFeatured: true,
        specifications: [
            { category: "Màn hình", detail: "13.6 inch, Liquid Retina" },
            { category: "Bộ xử lý", detail: "Apple M3" },
            { category: "RAM", detail: "8GB" },
            { category: "Bộ nhớ", detail: "256GB SSD" },
            { category: "Hệ điều hành", detail: "macOS" }
        ]
    },
    { 
        id: 14, 
        name: "AirPods Pro 2", 
        price: 5490000, 
        category: "Phụ kiện",
        colors: [ 
            { name: "Trắng", image: "image/app2.jpg", hexCode: "#ffffff" }
        ],
        isFeatured: false,
        specifications: [
            { category: "Kết nối", detail: "Bluetooth 5.3" },
            { category: "Thời gian sử dụng", detail: "Lên đến 6 giờ" },
            { category: "Chống ồn", detail: "Có" }
        ]
    }
]; 

// --- BIẾN PHÂN TRANG --- 
const productsPerPage = 6; 
let currentPage = 1; 

// Biến giỏ hàng 
let cart = JSON.parse(localStorage.getItem('cart')) || []; 

// Biến người dùng (dùng để lưu trạng thái đăng nhập)
let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
let users = JSON.parse(localStorage.getItem('users')) || []; 

// Biến lưu danh sách sản phẩm đã được lọc
let filteredProducts = phones; // Khởi tạo ban đầu với tất cả sản phẩm

// Lấy các element cần thiết 
const homePage = document.getElementById('home-page');
const productsPage = document.getElementById('products-page');
const productsContainer = document.getElementById('products-container');
const homeLink = document.getElementById('home-link'); 
const productLink = document.getElementById('product-link'); 
const logoLink = document.getElementById('logo-link'); 
const filterButtonsContainer = document.getElementById('filter-buttons-container');

// Lấy element cho thanh tìm kiếm
const searchBar = document.getElementById('search-bar');

// Lấy các element của Modal sản phẩm
const modalElement = document.getElementById('product-modal');
const modal = new bootstrap.Modal(modalElement);
const modalImage = document.getElementById('modal-image'); 
const modalName = document.getElementById('modal-name'); 
const modalPrice = document.getElementById('modal-price');
const colorSwatchesContainer = document.getElementById('color-swatches'); 
const addToCartButton = document.getElementById('add-to-cart-button'); 

// Lấy các element của Giỏ hàng 
const cartIcon = document.querySelector('.cart-icon'); 
const cartSidebar = document.getElementById('cart-sidebar'); 
const closeCartBtn = document.querySelector('.close-cart-btn'); 
const cartItemsContainer = document.getElementById('cart-items'); 
const cartCount = document.querySelector('.cart-count'); 
const cartTotalPrice = document.getElementById('cart-total-price'); 
const checkoutBtn = document.getElementById('checkout-btn');

// Lấy các element của Modal Đăng nhập/Đăng ký
const loginModalElement = document.getElementById('login-modal');
const loginModal = new bootstrap.Modal(loginModalElement);
const registerModalElement = document.getElementById('register-modal');
const registerModal = new bootstrap.Modal(registerModalElement);
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const logoutLink = document.getElementById('logout-link');
const accountDropdown = document.getElementById('account-dropdown');

// Lấy các element của Modal Thanh toán
const checkoutModalElement = document.getElementById('checkout-modal');
const checkoutModal = new bootstrap.Modal(checkoutModalElement);
const checkoutItemsContainer = document.getElementById('checkout-items');
const checkoutTotal = document.getElementById('checkout-total');
const checkoutForm = document.getElementById('checkout-form');
const paymentMethodSelect = document.getElementById('payment-method');
const bankTransferInfo = document.getElementById('bank-transfer-info');
const transferContentEl = document.getElementById('transfer-content');

// Lấy element cho phần thông số kỹ thuật
const specContent = document.getElementById('spec-content');
const paginationContainer = document.getElementById('pagination-container');

// Hàm định dạng giá tiền
function formatPrice(price) { 
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }); 
}

// Hàm tạo thẻ sản phẩm
function createPhoneCard(phone) { 
    const col = document.createElement('div'); 
    col.classList.add('col'); 
        
    const card = document.createElement('div'); 
    card.classList.add('phone-card', 'card', 'h-100', 'shadow-sm', 'border-0'); 
    card.dataset.id = phone.id; 
        
    const defaultImage = phone.colors[0].image; 
    card.innerHTML = ` 
        <img src="${defaultImage}" class="card-img-top img-fluid p-3" alt="${phone.name}"> 
        <div class="card-body d-flex flex-column"> 
            <h3 class="card-title fs-6 fw-bold text-truncate">${phone.name}</h3> 
            <p class="card-text mt-auto">${formatPrice(phone.price)}</p>
        </div> 
    `; 
    card.addEventListener('click', () => handleModalOpening(phone.id));
    col.appendChild(card);
    return col; 
} 

// Hàm hiển thị danh sách sản phẩm
function renderPhoneCards(products, page = 1) {
    productsContainer.innerHTML = '';
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    if (paginatedProducts.length === 0) {
        productsContainer.innerHTML = `<div class="col-12 text-center mt-5"><p class="text-muted">Không tìm thấy sản phẩm nào.</p></div>`;
    } else {
        paginatedProducts.forEach(phone => {
            productsContainer.appendChild(createPhoneCard(phone));
        });
    }
}

// Hàm render phân trang
function renderPagination(products) {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (totalPages <= 1) return;

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('pagination', 'justify-content-center');

    const createPaginationItem = (text, page, isActive = false, isDisabled = false) => {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (isActive) li.classList.add('active');
        if (isDisabled) li.classList.add('disabled');
        
        const a = document.createElement('a');
        a.classList.add('page-link');
        a.href = '#';
        a.textContent = text;
        
        if (!isDisabled) {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = page;
                renderPhoneCards(products, currentPage);
                renderPagination(products);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        
        li.appendChild(a);
        return li;
    };

    ul.appendChild(createPaginationItem('Trước', currentPage - 1, false, currentPage === 1));

    for (let i = 1; i <= totalPages; i++) {
        ul.appendChild(createPaginationItem(i, i, i === currentPage));
    }

    ul.appendChild(createPaginationItem('Sau', currentPage + 1, false, currentPage === totalPages));

    nav.appendChild(ul);
    paginationContainer.appendChild(nav);
}

// Hàm mở modal sản phẩm
function handleModalOpening(id) {
    const phone = phones.find(p => p.id === id);
    if (!phone) return;

    modalName.textContent = phone.name;
    modalPrice.textContent = formatPrice(phone.price);
    
    // Xóa màu cũ
    colorSwatchesContainer.innerHTML = '';
    phone.colors.forEach((color, index) => {
        const swatch = document.createElement('div');
        swatch.classList.add('color-swatch', 'rounded-circle', 'border', 'border-2', 'p-1', 'cursor-pointer');
        swatch.style.backgroundColor = color.hexCode;
        if (index === 0) {
            swatch.classList.add('selected');
        }

        swatch.addEventListener('click', () => {
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
            swatch.classList.add('selected');
            modalImage.src = color.image;
        });

        colorSwatchesContainer.appendChild(swatch);
    });

    // Hiển thị thông số kỹ thuật
    specContent.innerHTML = '';
    phone.specifications.forEach(spec => {
        specContent.innerHTML += `<p><strong>${spec.category}:</strong> ${spec.detail}</p>`;
    });

    modalImage.src = phone.colors[0].image;
    addToCartButton.dataset.id = phone.id;
    modal.show();
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = phones.find(p => p.id == productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id == productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1, selectedColor: product.colors[0].name });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    alert('Đã thêm sản phẩm vào giỏ hàng!');
}

// Hàm hiển thị giỏ hàng
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-muted mt-5">Giỏ hàng trống.</p>';
        cartTotalPrice.textContent = formatPrice(0);
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const cartItemEl = document.createElement('div');
        cartItemEl.classList.add('cart-item');
        cartItemEl.innerHTML = `
            <img src="${item.colors[0].image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${formatPrice(item.price)}</p>
                <div class="d-flex align-items-center mt-2">
                    <button class="btn btn-sm btn-outline-secondary decrease-quantity" data-id="${item.id}">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary increase-quantity" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="btn btn-sm btn-danger remove-item-btn" data-id="${item.id}">Xóa</button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
        total += item.price * item.quantity;
    });

    cartTotalPrice.textContent = formatPrice(total);
}

// Hàm cập nhật số lượng sản phẩm trên icon giỏ hàng
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Hàm mở sidebar giỏ hàng
function openCart() {
    cartSidebar.classList.add('open');
    renderCartItems();
}

// Hàm đóng sidebar giỏ hàng
function closeCart() {
    cartSidebar.classList.remove('open');
}

// Hàm cập nhật giao diện người dùng (Đăng nhập/Đăng xuất)
function updateAuthUI() {
    if (loggedInUser) {
        accountDropdown.textContent = loggedInUser.username;
        loginLink.classList.add('d-none');
        registerLink.classList.add('d-none');
        logoutLink.classList.remove('d-none');
    } else {
        accountDropdown.innerHTML = '<i class="fas fa-user"></i> Tài khoản';
        loginLink.classList.remove('d-none');
        registerLink.classList.remove('d-none');
        logoutLink.classList.add('d-none');
    }
}

// Hàm xử lý đăng nhập
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        loggedInUser = user;
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        updateAuthUI();
        loginModal.hide();
        alert('Đăng nhập thành công!');
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
}

// Hàm xử lý đăng ký
function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (users.some(u => u.username === username)) {
        alert('Tên đăng nhập đã tồn tại!');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    registerModal.hide();
    loginModal.show();
    alert('Đăng ký thành công. Vui lòng đăng nhập!');
}

// Hàm xử lý đăng xuất
function handleLogout(e) {
    e.preventDefault();
    loggedInUser = null;
    localStorage.removeItem('loggedInUser');
    updateAuthUI();
    alert('Đã đăng xuất!');
}

// Hàm xử lý thanh toán
function handleCheckout(e) {
    e.preventDefault();
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
        return;
    }

    if (!loggedInUser) {
        alert('Vui lòng đăng nhập để thanh toán.');
        loginModal.show();
        return;
    }

    closeCart();
    checkoutModal.show();
    renderCheckoutItems();
    updateCheckoutTotal();
}

function renderCheckoutItems() {
    checkoutItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('d-flex', 'justify-content-between', 'mb-2');
        itemEl.innerHTML = `
            <span>${item.name} (${item.quantity} x ${formatPrice(item.price)})</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        `;
        checkoutItemsContainer.appendChild(itemEl);
    });
}

function updateCheckoutTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = formatPrice(total);
}

function handlePaymentMethodChange() {
    if (paymentMethodSelect.value === 'bank') {
        bankTransferInfo.classList.remove('d-none');
        transferContentEl.textContent = `Thanh toan don hang ${Date.now()}`;
    } else {
        bankTransferInfo.classList.add('d-none');
    }
}

function completeCheckout(e) {
    e.preventDefault();
    // Lấy thông tin từ form
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerAddress = document.getElementById('customer-address').value;
    const paymentMethod = paymentMethodSelect.value;
    
    // Xử lý logic thanh toán
    console.log('Đơn hàng đã được tạo:', {
        customerName,
        customerPhone,
        customerAddress,
        paymentMethod,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });

    alert('Đơn hàng của bạn đã được đặt thành công!');
    
    // Xóa giỏ hàng sau khi thanh toán
    cart = [];
    localStorage.removeItem('cart');
    updateCartCount();
    
    checkoutModal.hide();
    checkoutForm.reset();
}

// Hàm xử lý lọc sản phẩm
function handleFilter(e) {
    const category = e.currentTarget.dataset.category;
    
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    // Lọc lại danh sách sản phẩm dựa trên danh mục
    let productsToFilter;
    if (category === 'all') {
        productsToFilter = phones;
    } else {
        productsToFilter = phones.filter(p => p.category === category);
    }
    
    // Sau khi lọc theo danh mục, tiếp tục lọc theo từ khóa tìm kiếm
    const searchQuery = searchBar.value.toLowerCase();
    filteredProducts = productsToFilter.filter(p => 
        p.name.toLowerCase().includes(searchQuery)
    );

    currentPage = 1;
    renderPhoneCards(filteredProducts);
    renderPagination(filteredProducts);
}

// Hàm xử lý tìm kiếm
function handleSearch() {
    const searchQuery = searchBar.value.toLowerCase();
    
    // Lấy danh mục hiện tại đang được chọn
    const activeFilterButton = document.querySelector('.filter-btn.active');
    const activeCategory = activeFilterButton ? activeFilterButton.dataset.category : 'all';

    // Lọc danh sách sản phẩm theo cả danh mục và từ khóa
    let productsToSearch;
    if (activeCategory === 'all') {
        productsToSearch = phones;
    } else {
        productsToSearch = phones.filter(p => p.category === activeCategory);
    }

    filteredProducts = productsToSearch.filter(p =>
        p.name.toLowerCase().includes(searchQuery)
    );

    currentPage = 1;
    renderPhoneCards(filteredProducts);
    renderPagination(filteredProducts);
}


// Hàm điều hướng và hiển thị nội dung
function navigateTo(page) {
    currentPage = 1;
    if (page === 'home') {
        homePage.style.display = 'block';
        productsPage.style.display = 'none';
    } else if (page === 'products') {
        homePage.style.display = 'none';
        productsPage.style.display = 'block';

        // Đảm bảo lọc ban đầu chỉ hiển thị các sản phẩm điện thoại, laptop, phụ kiện
        filteredProducts = phones.filter(p => p.category === "Điện thoại" || p.category === "Laptop" || p.category === "Phụ kiện");

        renderPhoneCards(filteredProducts);
        renderPagination(filteredProducts);
        // Cập nhật trạng thái của nút lọc
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
        // Xóa nội dung thanh tìm kiếm khi chuyển trang
        searchBar.value = '';
    }
}

// Hàm khởi tạo ứng dụng
function initApp() {
    updateCartCount();
    updateAuthUI();

    // Lắng nghe sự kiện click cho các nút lọc sản phẩm
    const filterButtons = document.querySelectorAll('#filter-buttons-container .filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilter);
    });
    
    // Lắng nghe sự kiện nhập liệu trên thanh tìm kiếm
    searchBar.addEventListener('input', handleSearch);

    // Lắng nghe sự kiện thay đổi hash trong URL
    window.addEventListener('hashchange', () => {
        const page = window.location.hash.substring(1);
        if (page === 'home' || page === 'products') {
            navigateTo(page);
        } else {
            navigateTo('home');
        }
    });

    // Điều hướng lần đầu tiên
    const initialPage = window.location.hash.substring(1) || 'home';
    navigateTo(initialPage);
}

// --- THÊM SỰ KIỆN LẮNG NGHE ---
logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = 'home';
});

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = 'home';
});

productLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = 'products';
});

cartIcon.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);

// Sự kiện cho nút "Thêm vào giỏ" trong modal
addToCartButton.addEventListener('click', () => {
    const productId = addToCartButton.dataset.id;
    addToCart(productId);
});

// Sự kiện cho các nút tăng/giảm/xóa trong sidebar giỏ hàng
cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('increase-quantity')) {
        const productId = e.target.dataset.id;
        const item = cart.find(i => i.id == productId);
        if (item) item.quantity++;
    } else if (e.target.classList.contains('decrease-quantity')) {
        const productId = e.target.dataset.id;
        const item = cart.find(i => i.id == productId);
        if (item && item.quantity > 1) item.quantity--;
    } else if (e.target.classList.contains('remove-item-btn')) {
        const productId = e.target.dataset.id;
        cart = cart.filter(i => i.id != productId);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
});

checkoutBtn.addEventListener('click', handleCheckout);
paymentMethodSelect.addEventListener('change', handlePaymentMethodChange);
checkoutForm.addEventListener('submit', completeCheckout);

// Sự kiện cho các form đăng nhập/đăng ký/đăng xuất
loginLink.addEventListener('click', () => loginModal.show());
registerLink.addEventListener('click', () => registerModal.show());
logoutLink.addEventListener('click', handleLogout);
loginForm.addEventListener('submit', handleLogin);
registerForm.addEventListener('submit', handleRegister);

// Khởi chạy ứng dụng khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', initApp);