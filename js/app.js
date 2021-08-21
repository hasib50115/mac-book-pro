
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
    return bestPriceCalcInt + extraMemoryCostFloat + extraStorageCostFloat + deliveryChargeFloat;
};

// 8GB best-price button event handler
// showing price and cost, and applying promo-code discount
document.getElementById("best-price").addEventListener("click", function(){
    document.getElementById("total-price").innerText = priceTextToNumbers();
    const totalPrice = document.getElementById("total-price").innerText;
    document.getElementById("total-price-show").innerText = totalPrice;
});

// applying promo code
const cupponCode = "stevekaku";
const cupponCodeMatch = cupponCode.toLocaleLowerCase();
document.getElementById("promo-code").addEventListener("click", function(){
    const cupponInputValue = document.getElementById("cuppon-field").value;
    if (cupponInputValue == cupponCodeMatch){
        const totalPrice = document.getElementById("total-price").innerText;
        const totalPriceFloat = parseFloat(totalPrice);
        const discountPercent = totalPriceFloat * 0.2;
        const cupponApplied = totalPriceFloat - discountPercent;
        document.getElementById("total-price-show").innerText = cupponApplied;
        document.getElementById("cuppon-field").value = "";
        console.log(cupponCodeMatch);
    }
    else{
        document.getElementById("cuppon-field").value = "";
    }
});