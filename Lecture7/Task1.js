function cats(arrData){
    for(let cat of arrData){
        const data = cat.split(" ");
        const catName = data[0];
        const catAge = parseInt(data[1]);

        const newCat = new Cat(catName,catAge);
        newCat.мeow();
    }
}

class Cat{
    name;
    age;
    
    constructor(name,age){
        this.name=name,
        this.age=age
    }

    мeow(){
        console.log(`${this.name}, age ${this.age} says meow`)
    }
}

cats(['Mellon 2', 'Tom 3']);