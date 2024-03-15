const quantityInput = document.querySelector(".quantite input");
const totalEl = document.querySelector(".prix-total");
const price = parseFloat(document.querySelector(".prix").textContent);
const btnCalculer = document.querySelector(".btn-calculer");

// Fonction pour mettre à jour le prix total
function updateTotal() {
  const quantity = parseInt(quantityInput.value);
  totalEl.textContent = (quantity * price).toFixed(2) + "DZD";
}



// Mise à jour du total initial
updateTotal();

// Ajout d'écouteurs d'événements sur les boutons "-" et "+"
document.querySelector(".btn-moins").addEventListener("click", () => {
  const quantity = parseInt(quantityInput.value) - 1;
  quantityInput.value = quantity < 1 ? 1 : quantity;
  updateTotal();
});

document.querySelector(".btn-plus").addEventListener("click", () => {
  const quantity = parseInt(quantityInput.value) + 1;
  quantityInput.value = quantity;
  updateTotal();
});
