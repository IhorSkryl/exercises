var numArr = [1, 2, 3, 4, 5];

Array.prototype.customReduce = function(fn, initialValue) {
   var count = initialValue;

   for (var i = 0; i < this.length; i++) {
      count = fn(count, this[i], i, this);
   }
   return count;
}


var num = numArr.customReduce((sum, item) => {
   return sum + item;
}, 0)

console.log(num);

const arrayA = [1, 2, 3, 4];
const arrayB = arrayA.customReduce((accumulator, item) => accumulator += `_${item}`);
console.log(arrayB);

// const arrayA = [1, 2, 3, 4];
// const arrayB = arrayA.customReduce(
//    (accumulator, item) => (accumulator += `_${item}`),
//    ""
// );
// console.log(arrayB);

// const arrayA = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
// const arrayB = arrayA.customReduce(
//    (accumulator, item) => (accumulator += `_${item.a}`),
//    ""
// );
// console.log(arrayB);
