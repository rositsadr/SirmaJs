class SequenceGenerator{
    #startValue=0;

    next(){
        this.#startValue++;
        return this.#startValue;
    }
    // *[Symbol.iterator](){
    //     while(this.#startValue<10){
    //         yield this.#startValue++;
    //     }
    // }
}


let seqGen = new SequenceGenerator();
console.log(seqGen.next());
console.log(seqGen.next());
console.log(seqGen.next());