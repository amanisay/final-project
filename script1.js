const produits = document.querySelectorAll(".produit");
const totalEl = document.querySelector(".prix-total");

// Function to update the total price
function updateTotal() {
  let total = 0;
  produits.forEach((produit) => {
    const quantity = parseInt(produit.querySelector(".quantite input").value);
    const price = parseFloat(produit.querySelector(".prix").textContent);
    total += quantity * price;
  });
  totalEl.textContent = total.toFixed(2) + "DZD";
}

// Add event listeners to quantity change buttons
produits.forEach((produit) => {
  const btnMoins = produit.querySelector(".btn-moins");
  const btnPlus = produit.querySelector(".btn-plus");
  const quantityInput = produit.querySelector(".quantite input");

  btnMoins.addEventListener("click", () => {
    const newQuantity = Math.max(parseInt(quantityInput.value) - 1, 1);
    quantityInput.value = newQuantity;
    updateTotal();
  });

  btnPlus.addEventListener("click", () => {
    const newQuantity = parseInt(quantityInput.value) + 1;
    quantityInput.value = newQuantity;
    updateTotal();
  });
});

// Update total on initial load
updateTotal();
