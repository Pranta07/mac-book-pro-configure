const bestPrice = document.getElementById("best-price");
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCharge = document.getElementById("delivery-charge");
const totalPrice = document.getElementById("total-price");
const grandTotal = document.getElementById("grand-total");

// update memory cost
function updateMemoryCost(cost) {
    memoryCost.innerText = cost;
    updateTotalPrice();
}
// update storage cost
function updateStorageCost(cost) {
    storageCost.innerText = cost;
    updateTotalPrice();
}
// update delivery cost
function updateDeliveryCharge(cost) {
    deliveryCharge.innerText = cost;
    updateTotalPrice();
}
// update total price
function updateTotalPrice() {
    const total =
        parseInt(bestPrice.innerText) +
        parseInt(memoryCost.innerText) +
        parseInt(storageCost.innerText) +
        parseInt(deliveryCharge.innerText);
    totalPrice.innerText = total;
    grandTotal.innerText = total;
}

// update grand total after using promocode
const promocode = document.getElementById("promocode");
const applyButton = document.getElementById("apply-btn");
applyButton.addEventListener("click", function () {
    const code = promocode.value;
    if (code == "stevekaku") {
        const total = parseInt(totalPrice.innerText);
        grandTotal.innerText = total - total / 5;
    }
    promocode.value = "";
});
