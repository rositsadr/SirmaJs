class Laptop{
    info;
    isOn = false;
    quality;

    constructor({producer,age,brand},quality){
        this.info = {producer,age,brand};
        this.quality = quality;
    }

    turnOn(){
        this.isOn=true;
    }

    turnOff(){
        this.isOn = false;
    }

    showInfo(){
        return JSON.stringify(this.info);
    };

    get price(){
        return (800 -(this.info.age * 2)+ (this.quality * 0.5));
    }
}
let info = {producer: "Asus", age: 2, brand: "Zenbook"}
let laptop = new Laptop(info,10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)

// let info = {producer: "Lenovo",
// age: 1, brand: "Legion"}
// let laptop = new Laptop(info,
// 10)
// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// laptop.turnOn()
// laptop.turnOff()
// console.log(laptop.isOn)