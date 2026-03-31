Array.prototype.myReduce = function (callback, value) {
  if (value === undefined) value = 0;
  let res = value;

  for (let i = 0; i < this.length; i++) {
    res = callback(res, this[i], i, this);
  }
  return res;
};

let arr = [1, 2, 3, 4, 5];

// let sum=arr.myReduce((acc,e)=>{
//     return acc=acc+e;
// },0)

// console.log(sum);

// let arr1=arr.myReduce((acc,e)=>{
//     acc.push(e);
//     return acc
// },[])

// console.log(arr1);

let object = arr.myReduce(
  (acc, e, i) => {
    acc.element.push(e);
    acc.index.push(i);
    return acc;
  },
  { element: [], index: [] },
);

console.log(object);
