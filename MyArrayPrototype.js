
// Array.from() 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。
Array.myFrom = (params,cb=(item)=>item)=>{
    const result = [];
    if(params !== null && typeof params[Symbol.iterator] === 'function'){
        for(let item of params){
            result.push(cb(item));
        }
        return result;
    }
    else{
        return result;
    }
}

// console.log(Array.myFrom('',(item)=>2+item));

// Array.of() 静态方法通过可变数量的参数创建一个新的 Array 实例，而不考虑参数的数量或类型。
Array.myOf = (...args)=>{
    // console.log(arguments);
    return args;
}

// console.log(Array.myOf())