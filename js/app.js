
// converting prices and delivery-charge text-to-numbers
/* const bestPriceCalc = document.getElementById("best-price-calc").innerText;
const bestPriceCalcInt = parseInt(bestPriceCalc);
const extraMemoryCost = document.getElementById("extra-memory-cost").innerText;
const extraMemoryCostFloat = parseFloat(extraMemoryCost);
const extraStorageCost = document.getElementById("extra-storage-cost").innerText;
const extraStorageCostFloat = parseFloat(extraStorageCost);
const deliveryCharge = document.getElementById("delivery-charge").innerText;
const deliveryChargeFloat = parseFloat(deliveryCharge); */
// const totalPrice = document.getElementById("total-price").innerText;
// const totalPriceFloat = parseFloat(totalPrice);

// console.log(totalPriceFloat);
// best-price event handler
// document.getElementById("best-price").addEventListener("click", function(){
        
// });


function priceTextToNumbers(){
    // converting prices and delivery-charge text-to-numbers
    const bestPriceCalc = document.getElementById("best-price-calc").innerText;
    const bestPriceCalcInt = parseInt(bestPriceCalc);
    const extraMemoryCost = document.getElementById("extra-memory-cost").innerText;
    const extraMemoryCostFloat = parseFloat(extraMemoryCost);
    const extraStorageCost = document.getElementById("extra-storage-cost").innerText;
    const extraStorageCostFloat = parseFloat(extraStorageCost);
    const deliveryCharge = document.getElementById("delivery-charge").innerText;
    const deliveryChargeFloat = parseFloat(deliveryCharge);
    return bestPriceCalcInt, extraMemoryCostFloat, extraStorageCostFloat, deliveryChargeFloat;
};

priceTextToNumbers();

document.getElementById("best-price").addEventListener("click", function(){
    console.log("g");
    priceTextToNumbers();
    console.log("max");
});