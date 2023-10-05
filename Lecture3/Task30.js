function square(num){
    for(let i=0;i<num;i++){
        let line="";
        for(let j=0;j<num;j++){
            line+="* "
        }
        console.log(line);
    }
}

square(3);
square(5);