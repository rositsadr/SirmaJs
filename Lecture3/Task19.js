function f(money,students,saber,robe,belt){
    let saberTotal = saber*Math.ceil(students*1.1);
    let robeTotal = robe*students;
    let freeBelt = Math.floor(students/6);
    let beltTotal= belt*students - freeBelt*belt;   
    let total = saberTotal+robeTotal+beltTotal;

    if(total<money){
        console.log(`The money is enough - it would cost ${total.toFixed(2)}lv.`)
    }
    else{
        console.log(`George Lucas will need ${(total-money).toFixed(2)}lv more.`)
    }
}

f(100,2,1,2,3);
f(100,42,12,4,3);