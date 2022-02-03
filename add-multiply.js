function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const total = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return total;
}

const woodcalculation = woodCalculator(12,2,3);
console.log('total wood needed:', woodcalculation, 'Cubic Feet');