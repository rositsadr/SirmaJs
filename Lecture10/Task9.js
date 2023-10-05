function skippingIterator(arr){
    
    arr[Symbol.iterator]=function(){
        let index=-2;
        let keys = Object.keys(this);
        return{
            next: () => {
                if(index < keys.length-2) {
                    return { value: this[keys[index+=2]], done: false };
                }
                else {
                    return { done: true };
                }
            }
        };
    }

    console.log(...arr);
}

skippingIterator([1,2,3,4]);
skippingIterator(['a','b','c','d']);
skippingIterator([5,6,7,8,9]);


