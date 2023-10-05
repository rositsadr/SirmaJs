const input1=[1,2,3];
const inout2=['a','b','c'];
const input3=[5,4,3,2,1];

function reverseIterator(arr){
    arr[Symbol.iterator]= function(){
        const keys=Object.keys(this);
        let index = keys.length-1;
        return {
            next: () => {
                if(index >=0) {
                    return { value: this[keys[index--]], done: false };
                } 
                else {
                    return { done: true };
                }
            }
        };
    }
    console.log(...arr);
}

reverseIterator(input1);
reverseIterator(inout2);
reverseIterator(input3);