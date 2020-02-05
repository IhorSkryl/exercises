var numArr = [1, 2, 3, 4, 5];

Array.prototype.customReduce = function(fn, initialValue) {
   var accumulator = initialValue === undefined ? this[0] : initialValue;

   var int = initialValue === undefined ? 1 : 0;
   for (var i = int; i < this.length; i++) {
      accumulator = fn(accumulator, this[i], i, this);
   }

   return accumulator;
}


var num = numArr.customReduce((accumulator, item) => {
   return accumulator + item;
}, 0);
console.log(num);

const arrayA = [1, 2, 3, 4];
const arrayB = arrayA.customReduce((accumulator, item) => (accumulator += `_${item}`), );
console.log(arrayB);

const arrayC = [1, 2, 3, 4];
const arrayD = arrayC.customReduce(
   (accumulator, item) => (accumulator += `_${item}`),
   ""
);
console.log(arrayD);

const arrayE = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
const arrayF = arrayE.customReduce(
   (accumulator, item) => (accumulator += `_${item.a}`),
   ""
);
console.log(arrayF);
