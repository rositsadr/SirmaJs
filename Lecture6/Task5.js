function printData(obj){
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

function phoneBookCreate(arr){
    let phoneBook={};
    arr.forEach(element => {       
        let key = element.substring(0,element.indexOf(" "));
        let value =element.substring(element.indexOf(" ")+1);
        phoneBook[key]=value;
    });

    printData(phoneBook);
}

phoneBookCreate(["Peter 0888 657212", "Bob 0899657 212", "Peter 123123"]);