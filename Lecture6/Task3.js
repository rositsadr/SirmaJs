function objDataPrint(jsonText){
    let obj = JSON.parse(jsonText);

     for (const key in obj) {
     console.log(`${key}: ${obj[key]}`);
    }
}

objDataPrint('{"name": "Ivan", "age": 40, "town":"Sofia"}');
objDataPrint('{"firstName": "Ivan", "lastName":"Ivanov"}');

