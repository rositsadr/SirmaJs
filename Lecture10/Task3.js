class OddIterator{
    arr=[];

    constructor(arr){
        this.arr=arr;
    }

    [Symbol.iterator](){
        let index=0;
        const keys= Object.keys(arr).filter(value=>value%2).map(value=>value);
        return{
            next(){
                if(index< keys.length){
                        return {value: keys[index++],done:false};
                }
                else{
                    return {done:true};
                }
            }
        }
    }
};

const arr = [1,2,3,4,5,6,7,8,9,10];
const oddValues = new OddIterator(arr);
for (const value of oddValues){
    console.log(value);
}