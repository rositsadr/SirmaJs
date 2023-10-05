function listOfProducts(arr){
    arr.sort().forEach((elemen,index)=>console.log(`${index+1}.${elemen}`));
}

listOfProducts(["Potatoes","Tomatoes","Onions","Apples"]);