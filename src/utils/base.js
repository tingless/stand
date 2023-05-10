// 数组的处理方法
let arr = [1, 2, 66, 3, 4];
let arr1 = [
  {
    name: "1",
  },
  {
    value: 2,
    name: "1",
  },
];
// 在使用map、filter、some、every的数组方法时，必须要有返回值，不然容易造成错误和误解
// 因为是参数是函数
// map 不会改变原数组，无法跳出循环，会返回一个处理过的新数组
console.log("------ map");
console.log(arr.map((item) => item * 2));
// filter 不会改变原数组，无法跳出循环，会返回一个处理过的新数组
console.log("------ filter");
console.log(arr.filter((item) => item === 2));
// some 碰到第一个满足条件的函数，返回true/boolean
// 和find功能相似，一般大部分用find 大部分场景还会对元素进行处理
console.log("------ some");
console.log(arr.some((item) => item === 2));
// includes 返回true/false
console.log("------ include");
console.log(arr.includes(2));
console.log(arr.includes(9));
// indexOf 有的话返回下标，从0开始，没有的话返回-1
console.log("------ indexOf");
console.log(arr.indexOf(1));
console.log(arr.indexOf(2));
console.log(arr.indexOf(4));
console.log(arr.indexOf(9));
// find 有的话返回第一个元素 返回那个元素/undefined,
console.log("------ find");
console.log(arr.find((item) => item === 66));
console.log(arr.find((item) => item === 9));
console.log(arr1.find((item) => item.name === "1"));
// slice 数组的分割 返回一个新数组 不会改变原数组 [start,end) 下标
console.log("------ slice");
console.log(arr.slice(2));
console.log(arr.slice(1,4));

// forEach用来处理不需要返回值的，并且每次循环可以有return，跳出单次循环
// for最基础的循环，可以break，可以被some替代了

// slice
