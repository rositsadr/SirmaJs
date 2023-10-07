function charInRange(char1,char2){
    let line="";
    let min = Math.min(char1.charCodeAt(0),char2.charCodeAt(0));
    let max = Math.max(char1.charCodeAt(0),char2.charCodeAt(0));
    for(let i=min+1;i<max;i++){
        line+=String.fromCharCode(i)+" ";
    }
    console.log(line);
}

charInRange('a','d');
charInRange('#',':');
charInRange('C','#');