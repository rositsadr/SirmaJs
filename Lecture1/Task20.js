function bill(unitsCount, rate){
    const fixedCharege = 10;
    let totalBill = (unitsCount * rate) + fixedCharege;

    console.log(totalBill.toFixed(2));
}

bill(100,1.0);
bill(200, 1.0);
bill(150, 1.1);