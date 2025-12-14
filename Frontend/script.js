let sweets = [
  { name: "Ladoo", qty: 10 },
  { name: "Jalebi", qty: 5 },
  { name: "Kaju Katli", qty: 8 }
];

let cart = [];

function getImage(name) {
  const n = name.toLowerCase();
  if (n.includes("ladoo")) return "images/ladoo.jpg";
  if (n.includes("jalebi")) return "images/jalebi.jpg";
  if (n.includes("kaju")) return "images/kaju.jpg";
  return "images/default.jpg";
}

/* LOGIN */
function login() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  renderSweets();
}

function logout() {
  location.reload();
}

/* SWEETS */
function renderSweets() {
  const list = document.getElementById("sweetList");
  list.innerHTML = "";

  sweets.forEach((sweet, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${getImage(sweet.name)}" onerror="this.style.display='none'">
      <h3>${sweet.name}</h3>
      <p>Quantity: ${sweet.qty}</p>
      <button ${sweet.qty === 0 ? "disabled" : ""} 
        onclick="purchase(${index})">
        Purchase
      </button>
    `;

    list.appendChild(card);
  });
}

/* PURCHASE */
function purchase(index) {
  if (sweets[index].qty === 0) return;

  sweets[index].qty--;

  cart.push(sweets[index].name);

  document.getElementById("cartCount").innerText = cart.length;

  renderSweets();
  renderCart();
}

/* CART */
function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("hidden");
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerText = "• " + item;
    cartItems.appendChild(div);
  });

  document.getElementById("cartTotal").innerText = cart.length;
}

/* ADMIN */
function addSweet() {
  const name = document.getElementById("sweetName").value;
  const qty = document.getElementById("sweetQty").value;

  if (!name || !qty) return;

  sweets.push({
    name: name,
    qty: Number(qty)
  });

  renderSweets();

  document.getElementById("sweetName").value = "";
  document.getElementById("sweetQty").value = "";
}
fetch("http://127.0.0.1:8000/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, password })
})
.then(res => res.json())
.then(data => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("role", data.role);
});
fetch("http://127.0.0.1:8000/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, password })
})
.then(res => res.json())
.then(data => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("role", data.role);
});
