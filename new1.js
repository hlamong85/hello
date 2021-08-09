// seerToMon solution
function seerToMon(n) {
    if (n < 0) {
        return 'error';
    }
    else {
        let mon;
        mon = n / 40;
        return mon;
    }
}
let result = seerToMon(80);
console.log(result);
//totalSales problem solution:
function totalSales(n1, n2, n3) {
    if (n1 < 0 || n2 < 0 || n3 < 0) {
        return 'error';
    }
    const tShartPrice = 100 * n1;
    const pantPrice = 200 * n2;
    const shoesPrice = 500 * n3;
    let salesTotal = tShartPrice + pantPrice + shoesPrice;
    return salesTotal;
}
console.log(totalSales(2, 2, 2));
// deliverCost problem solution:
function deliveryCost(n) {
    const firstCost = 100;
    const secondCost = 80;
    const thirdCost = 50;
    if (n < 0) {
        return 'error';
    }
    if (n <= 100) {
        const firstResult = n * firstCost;
        return firstResult;
    }
    else if (n <= 200) {
        const firstDelivery = 100 * firstCost;
        const restCost = n - 100;
        const secondRestCost = restCost * secondCost;
        const totalCost = firstDelivery + secondRestCost;
        return totalCost;
    }
    else {
        const firstCost1 = 100 * firstCost;
        const secondCost2 = 100 * secondCost;
        const totalCost1 = n - 200;
        const restCost = totalCost1 * thirdCost;
        const lastTotals = firstCost1 + secondCost2 + restCost;
        return lastTotals;
    }
}
const result = deliveryCost(100);
console.log(result);
//perfectFriend problem solution:
function perfectFriend(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == 5) {
            return arr[i];
        }
    }
}
const indexArray = ['shanti', 'hlamo', 'joyot'];
const result = perfectFriend(indexArray);
console.log(result);