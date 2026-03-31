Array.prototype.myMap=function(callback){
    let res=[];
    for (let i = 0; i < this.length; i++) {
        res[i]=callback(this[i],i,this);
    }
    return res;
}

let arr=[1,2,3,4,5,6];

// let newArr=arr.map((e,i)=>{
//     console.log(`${e}, ${i}`);
//     return e*i;
// })

// console.log(newArr);

let newArr2=arr.myMap((e,i)=>{
        console.log(`${e}, ${i}`);
        return e*i;
    })
console.log(newArr2);
