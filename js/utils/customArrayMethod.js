Array.prototype.eachItemIterate = function(callBack){
    const result = [];
    for(let index=0; index<this.length; index++){
        result.push(callBack(this[index], index, this));
    }
    return result;
}

const numbers = [1, 4, 3, 2, 5];

numbers.eachItemIterate(function(item, index, arr){
    return item*3;
}).filter(function(value, index, arr){
    return value%2;
}).forEach(function(value){
    console.log(value);
});