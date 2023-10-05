class Circle{
    radius;

    constructor(radius){
        this.radius=radius;
    }

    get diameter(){
        return this.radius*2;
    }
    set diameter(value){
        this.radius = value/2;
    }

    get area(){
        return Math.PI*this.radius*this.radius;
    }      
}

const circle =  new Circle(2);

console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area);

circle.diameter=1.6;

console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area);