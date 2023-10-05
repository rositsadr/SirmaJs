function bodymass(weight,height){
    let a = Math.pow(height,2);
    let bmi = weight/a;
    console.log(bmi.toFixed(2));
}

bodymass(70,1.73);
bodymass(60, 1.75);
bodymass(85,1.80);