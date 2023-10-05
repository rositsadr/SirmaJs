class List{
    numbers;
    size;

    constructor(){
        this.numbers=[];
        this.size=this.numbers.length;
    }

    add(element){
        this.numbers.push(element);
        this.numbers=this.numbers.sort((a,b)=>a-b);
    } // adds a new element to the collection

    remove(index){
        if(index>=0 && index<this.numbers.length){
            this.numbers.splice(index,1);
        }
    } //removes the element at position index

    get(index){
        if(index>=0 && index<this.numbers.length){
            return this.numbers[index];
        }

        throw new Error("Wrong index!")
    } // returns the value of the element at position index
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(1);
list.add(10);
console.log(list.numbers.join(" "));
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));