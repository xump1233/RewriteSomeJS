// at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。
Array.prototype.myAt = function(params){
    params = parseInt(params);
    if(Object.is(params,NaN)){
        params = 0;
    }
    else if(params>=0){
        ;
    }
    else{
        params = params+this.length;
    }
    return this[params]
}

// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
Array.prototype.myConcat = function(...args){
    const result = [];
    for(let i=0;i<this.length;i++){
        result.push(this[i]);
    }
    for(let i=0;i<args.length;i++){
        for(let j=0;j<args[i].length;j++){
            result.push(args[i][j]);
        }
    }
    return result;
}


// copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。