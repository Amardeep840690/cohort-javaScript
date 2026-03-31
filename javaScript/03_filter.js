Array.prototype.myFilter=function(callback){
    let res=[];
    let index=0;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i],i,this)===true) {
            res[index]=this[i];
            index++;
        }else{
            continue;
        }
    }
    return res;
}

let arr=[1,4,9,5,10,6,2];

// let newarr=arr.filter((e)=>{
//     return e>=5;
// })

let newarr=arr.myFilter((e)=>{
    return e>=5;
})

console.log(newarr);
