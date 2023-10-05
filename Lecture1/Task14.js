function converter(eur){
    const rate = 1.95583;
    let levs = eur*rate;
    console.log(levs.toFixed(2));
}

converter(1);
converter(15);
converter(123);
converter(0.5);
converter(0.51);