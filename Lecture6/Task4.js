function converToJson(fname,lname,eyeColor){
    let person={
        fname,
        lname,
        eyeColor
    };

    console.log(JSON.stringify(person));
}

converToJson("Ivan", "Ivanov", "blue");
converToJson("Maria", "Petrova", "brown");

