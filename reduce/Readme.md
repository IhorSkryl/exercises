Replicate `reduce` method. Name it `reduceCustom`

Examples:

```js
const arrayA = [1, 2, 3, 4];
const arrayB = arrayA.reduce((accumulator, item) => accumulator += `_${item}`);
console.log(arrayB); // Expect "1_2_3_4"
```

```js
const arrayA = [1, 2, 3, 4];
const arrayB = arrayA.reduce((accumulator, item) => accumulator += `_${item}`, '');
console.log(arrayB); // Expect "_1_2_3_4"
```

```js
const arrayA = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
const arrayB = arrayA.reduce((accumulator, item) => accumulator += `_${item.a}`, '');
console.log(arrayB); // Expect "_1_2_3_4"
```
