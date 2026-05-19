let products = [
  { name: "Café", price: 10, category: "drink", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { name: "Jus", price: 15, category: "drink", img: "https://images.unsplash.com/photo-1577805947697-89e18249d767" },
  { name: "Pizza", price: 30, category: "food", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
  { name: "Burger", price: 25, category: "food", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { name: "Café normal", price: 12, category: "cafes", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500" },
  { name: "Espresso", price: 15, category: "cafes", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500" },
  { name: "Café Latte", price: 15, category: "cafes", img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" },
  { name: "Cappuccino", price: 16, category: "cafes", img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500" },
  { name: "Pizza Margherita", price: 45, category: "plats", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
  { name: "Burger Classic", price: 40, category: "plats", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" },
  { name: "Tacos Poulet", price: 35, category: "plats", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500" },
  { name: "Pasta Alfredo", price: 42, category: "plats", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500" },
  { name: "Sandwich Mixte", price: 28, category: "plats", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500" },
  { name: "Salade César", price: 30, category: "plats", img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500" },
  { name: "Poulet Grillé", price: 55, category: "plats", img: "https://images.unsplash.com/photo-1600891963935-c1f0d4f4f9f0?w=500" },
  { name: "Sushi Mix", price: 65, category: "plats", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500" },
  { name: "Jus d'Orange", price: 18, category: "drink", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500" },
  { name: "Mojito", price: 25, category: "drink", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500" },
  { name: "Cheeseburger", price: 42, category: "food", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
  { name: "Chicken Tacos", price: 36, category: "food", img: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500" },
  { name: "Coca Cola", price: 12, category: "drink", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500" },
  { name: "Chocolate Cake", price: 26, category: "desserts", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" },
  { name: "Donuts", price: 18, category: "desserts", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500" },
  { name: "Ice Cream", price: 22, category: "desserts", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500" },
  { name: "Cupcake", price: 16, category: "desserts", img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500" },
  { name: "Hot Dog", price: 25, category: "food", img: "https://images.unsplash.com/photo-1612392062798-3ca7d7b0bcb2?w=500" },
  { name: "Cheesecake", price: 30, category: "desserts", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500" },
  { name: "Croissant", price: 14, category: "food", img: "https://images.unsplash.com/photo-1555507036-ab794f4afe5a?w=500" },
  { name: "Pancakes", price: 24, category: "desserts", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500" },
  { name: "Macarons", price: 32, category: "desserts", img: "https://images.unsplash.com/photo-1519869325930-281384150729?w=500" },
  { name: "Brownie", price: 20, category: "desserts", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500" },
  { name: "Ice Tea", price: 15, category: "drink", img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500" },
  { name: "French Fries", price: 18, category: "food", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500" },
  { name: "Club Sandwich", price: 32, category: "food", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500" }
];

let cart = [];
let currentCategory = "all";




function showPage(page, menuEl) {


  document.getElementById("page-vente").style.display = "none";
  document.getElementById("page-produits").style.display = "none";


  document.getElementById("page-" + page).style.display = "block";


  const titres = { vente: "Nouvelle Vente", produits: "Gestion des Produits" };
  document.getElementById("page-title").textContent = titres[page];


  document.getElementById("search-wrap").style.display = (page === "vente") ? "" : "none";


  setMenuActive(menuEl);


  if (page === "produits") renderProduitsTable();
}



/* les cartes produits */

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(function (p) {
    const realIndex = products.indexOf(p);

    container.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card product-card">
          <img src="${p.img}" class="product-img" alt="${p.name}">
          <div class="card-body text-center">
            <h6 class="fw-bold mb-1">${p.name}</h6>
            <p class="text-primary fw-bold mb-3">${p.price} DH</p>
            <button class="btn btn-purple w-100" onclick="addToCart(${realIndex})">
              <i class="bi bi-cart-plus"></i> Ajouter
            </button>
          </div>
        </div>
      </div>`;
  });
}

function filterCategory(cat) {
  currentCategory = cat;
  if (cat === "all") displayProducts(products);
  else displayProducts(products.filter(function (p) { return p.category === cat; }));
}

function searchProduct(val) {
  const filtered = products.filter(function (p) {
    return p.name.toLowerCase().includes(val.toLowerCase());
  });
  displayProducts(filtered);
}


/*  PANIER  */

function addToCart(index) {
  const item = products[index];
  const existe = cart.find(function (p) { return p.name === item.name; });

  if (existe) {
    existe.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  let subtotal = 0;
  cartDiv.innerHTML = "";

  cart.forEach(function (item) {
    const lineTotal = item.price * item.qty;
    subtotal += lineTotal;


    cartDiv.innerHTML += `
      <tr>
        <td class="fw-semibold">${item.name}</td>
        <td>
          <div class="qty-box">
            <button onclick="changeQty('${item.name}', -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty('${item.name}', 1)">+</button>
          </div>
        </td>
        <td class="text-end fw-bold">${lineTotal.toFixed(2)} DH</td>
        <td class="text-center">
          <button class="delete-btn" onclick="removeItem('${item.name}')">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>`;
  });

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  document.getElementById("subtotal").innerText = subtotal.toFixed(2) + " DH";
  document.getElementById("tax").innerText = tax.toFixed(2) + " DH";
  document.getElementById("total").innerText = total.toFixed(2) + " DH";
}

function changeQty(name, val) {
  const item = cart.find(function (p) { return p.name === name; });
  if (!item) return;
  item.qty += val;
  if (item.qty <= 0) cart = cart.filter(function (p) { return p.name !== name; });
  renderCart();
}

function removeItem(name) {
  cart = cart.filter(function (p) { return p.name !== name; });
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function payCash() {
  if (cart.length === 0) { alert("Le panier est vide !"); return; }
  alert("💰 Paiement CASH effectué !\nMontant : " + document.getElementById("total").innerText);
  clearCart();
}

function payCarte() {
  if (cart.length === 0) { alert("Le panier est vide !"); return; }
  alert("💳 Paiement CARTE validé !\nMontant : " + document.getElementById("total").innerText);
  clearCart();
}


/*  CRUD PRODUITS */


function renderProduitsTable() {
  const tbody = document.getElementById("produits-tbody");
  document.getElementById("count-produits").textContent = products.length;
  tbody.innerHTML = "";

  products.forEach(function (p, index) {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td><img src="${p.img}" style="width:50px;height:40px;object-fit:cover;border-radius:8px;"></td>
        <td class="fw-semibold">${p.name}</td>
        <td><span class="badge bg-light text-dark border">${p.category}</span></td>
        <td class="fw-bold text-primary">${p.price} DH</td>
        <td class="text-center">
          <button class="btn btn-sm btn-outline-warning me-1" onclick="editProduit(${index})">
            <i class="bi bi-pencil"></i> Modifier
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteProduit(${index})">
            <i class="bi bi-trash"></i> Supprimer
          </button>
        </td>
      </tr>`;
  });
}


function saveProduit() {
  const name = document.getElementById("prod-name").value.trim();
  const price = parseFloat(document.getElementById("prod-price").value);
  const category = document.getElementById("prod-category").value;
  const img = document.getElementById("prod-img").value.trim() ||
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500";
  const editIdx = parseInt(document.getElementById("edit-index").value);


  if (!name || isNaN(price) || price <= 0) {
    alert("Veuillez remplir le nom et le prix !");
    return;
  }

  if (editIdx === -1) {
    products.push({ name, price, category, img });
    alert("Produit ajouté !");
  } else {
    products[editIdx].name = name;
    products[editIdx].price = price;
    products[editIdx].category = category;
    products[editIdx].img = img;
    alert("Produit modifié !");
  }

  resetForm();
  document.getElementById("product-form-box").style.display = "none";
  renderProduitsTable();
  filterCategory(currentCategory);
}

function editProduit(index) {
  const p = products[index];
  document.getElementById("prod-name").value = p.name;
  document.getElementById("prod-price").value = p.price;
  document.getElementById("prod-category").value = p.category;
  document.getElementById("prod-img").value = p.img;
  document.getElementById("edit-index").value = index;


  document.getElementById("product-form-box").style.display = "block";
  document.getElementById("form-title").textContent = "Modifier le Produit";

  document.getElementById("product-form-box").scrollIntoView({ behavior: "smooth" });
}

function deleteProduit(index) {
  if (!confirm("Supprimer \"" + products[index].name + "\" ?")) return;

  products.splice(index, 1);

  renderProduitsTable();
  filterCategory(currentCategory);
}

function cancelEdit() {
  resetForm();
}

function resetForm() {
  document.getElementById("prod-name").value = "";
  document.getElementById("prod-price").value = "";
  document.getElementById("prod-img").value = "";
  document.getElementById("prod-category").value = "drink";
  document.getElementById("edit-index").value = "-1";
  document.getElementById("form-title").textContent = "Ajouter un Produit";
}


function setMenuActive(el) {
  document.querySelectorAll(".menu-item").forEach(function (i) { i.classList.remove("active"); });
  el.classList.add("active");
}

function setActive(btn) {
  document.querySelectorAll(".cat-btn").forEach(function (b) { b.classList.remove("active"); });
  btn.classList.add("active");
}



document.addEventListener("DOMContentLoaded", function () {
  displayProducts(products);
  renderCart();
});




function ouvrirForm() {
  resetForm();
  document.getElementById("product-form-box").style.display = "block";
  document.getElementById("form-title").textContent = "Ajouter un Produit";
  document.getElementById("product-form-box").scrollIntoView({ behavior: "smooth" });
}

function fermerForm() {
  document.getElementById("product-form-box").style.display = "none";
  resetForm();
}
