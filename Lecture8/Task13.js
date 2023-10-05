function excel(input){
    //A-65,Z-90//

    if(input.length===1){
        console.log(input.charCodeAt(0)-64);
    }
    else{
        let symbols=input.split("");
        let num=0;
        const letersCount=26;
        for(let i=0; i<symbols.length; i++){
            let leterNum=symbols[i].charCodeAt(0);
            num+=Math.pow((letersCount),(symbols.length-i-1))*(leterNum-64);
        }

        console.log(num);
    }
}

excel('A');
excel("AB");
excel("BAA");