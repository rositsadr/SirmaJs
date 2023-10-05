class Person{
    firstName;
    lastName;
    age;
    email;

    constructor(firstn,lastn,age,email){
        this.firstName = firstn,
        this.lastName = lastn,
        this.age = age,
        this.email = email
    }

    toString(){
        return (`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`)
    }
}

let person = new Person('Homer', 'Simpson', 42, 'homer@yahoo.com');
console.log(person.toString());