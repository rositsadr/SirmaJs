function matchDate(input){
    let reg=/[\d]{2}(.|-|\/)[A-Z]{1}[a-z]{2}\1[\d]{4}/g;
    let dates=input.toString().match(reg);
    for(let i=0; i<dates.length;i++){
        let regOutput=/[.\/-]/;
        let output = dates[i].split(regOutput);
        console.log(`Day: ${output[0]}, Month: ${output[1]}, Year: ${output[2]}`);
    };
}

matchDate(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23#09#1973, 1/Feb/2016']);
matchDate(['1/Jan-1951 23/October/197 11-Dec-2010 18.Jan.2014']);