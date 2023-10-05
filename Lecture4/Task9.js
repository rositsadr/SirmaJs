function printElement(arr,n){
    let output =[];
    for (let i = 0; i < arr.length; i+=n) {
        output.push(arr[i]);       
    }
    
    console.log(output.join(" "));
}

printElement(['5', '15', '31', '14', '20'], 2);
printElement(['dsa', 'asd', 'demo', 'test'], 2);
printElement(['1', '2', '3', '4', '5'], 6);