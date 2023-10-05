function building(floors,rooms){
    for(let i=floors;i>0;i--){
        let print="";
        let type = i===floors?"L":i%2?"A":"O";
        for(let j=0;j<rooms;j++){
            print+=`${type}${i}${j} `;
        }
        console.log(print);
    }

}

building(6,4);
building(3,3);
building(1,4);
building(7,4);