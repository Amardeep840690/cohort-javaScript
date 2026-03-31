Array.prototype.myForEach=function(callback){
    let res=[];
    for (let i = 0; i < this.length; i++) {
        res[i]=callback(this[i],i,this);
    }
}

let arr=[1,39,10,3];

// arr.forEach((e,i)=>{
//     console.log(`${e}, ${i}`);
//     arr[i]=e*i;
// })

arr.myForEach((e,i)=>{
    console.log(`${e}, ${i}`);
    arr[i]=e*i;
})

console.log(arr);