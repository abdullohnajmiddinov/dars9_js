// let str = "Hello";
// let r = "";
// for (let i = 0; i < str.length; i++) {
//   r += str[i] + "i";
// }
// console.log(r);

// let arr = [1,2,3,4,5,6,7];
// let arr2 = []
// if (arr % 2===0){
//     console.log(arr);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// let arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arr2.push(arr[i]);
//   }
// }

// if (arr2.length > 0) {
//   console.log(arr2);
// }
let a = ['non', 'asal', 'banan', 'olma', 'Aziza', 'Gul', 'mashina',]

let harf = 'n';

let b = a.filter((v, i, arr) => v.includes(harf))
let c = a.filter((v, i, arr) => !v.includes(harf))

console.log(b, 'n harifi ishtrok etgan sozlar');
console.log( c, 'n harifi ishtrok etmagan sozlar');