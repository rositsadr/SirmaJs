function consumption(water, people){
    let dailyConsumptionPerPerson = water/(7*people);
    console.log(dailyConsumptionPerPerson.toFixed(2));
}

consumption(2450,7);
consumption(3150,10);
consumption(980,7);