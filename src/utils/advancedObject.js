// 对象的属性遍历
// let obj = {
//     name: '123',
//     test: 'ddd'
// }

// forEachValue(obj, (value, key, obj)=>{
//     console.log(value, key, obj);
// })

function forEachValue(obj, cb){
    Object.keys(obj).forEach((key, index)=>{
        cb(obj[key], key, obj)
    })
}



export default {
    forEachValue
}