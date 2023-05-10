// let arr = [1, 2, 2, 3, 3, 5, 5];
let arr = [
  { id: "foo", value: 1 },
  { id: "bar", value: 1 },
  { id: "foo", value: 1 },
  { id: "baz", value: 4 },
  { id: "bar", value: 5 },
];
// 去重操作(基本数组) 不改变原数组 set类型不是数组类型，所以需要再次转化
function unique(arr) {
  return Array.from(new Set(arr));
}
// 根据对象去重操作
function removeDuplicateByKey(objects, key) {
  const seenIds = {}; // 用对象结构确定哪个属性是否出现过
  return objects.reduce((result, obj) => {
    if (!seenIds[obj[key]]) {
      // 没有出现就把这个属性赋值为true
      seenIds[obj[key]] = true;
      result.push(obj);
    }
    return result;
  }, []);
}

console.log(removeDuplicateByKey(arr, "value"));

export default {
  unique,
  removeDuplicateByKey,
};
