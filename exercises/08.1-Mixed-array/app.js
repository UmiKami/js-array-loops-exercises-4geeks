var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let newArr = []

mix.forEach(e=>{
    newArr.push(typeof e)
})

console.log(newArr);