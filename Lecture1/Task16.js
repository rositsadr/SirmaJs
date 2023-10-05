function office(firstCabinet){
    let secondCabinet = firstCabinet-(firstCabinet*0.2);
    let thirdCabinet = 0.15*(firstCabinet+secondCabinet) + firstCabinet + secondCabinet;
    let total = firstCabinet+secondCabinet+thirdCabinet;

    console.log(total.toFixed(3));
}

office(380);
office(720.50);
office(455.30);