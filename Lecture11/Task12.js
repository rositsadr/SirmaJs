function matchFullName(text){
    let namesArr= text.split(", ");

    namesArr.forEach(names => {
        let name=names.split(" ");
        let reg=/^[A-Z]{1}[a-z]+/;
        if(name.length===2 && name[0].match(reg) && name[1].match(reg)){
            console.log(name.join(" "));
        }
    });
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov");
