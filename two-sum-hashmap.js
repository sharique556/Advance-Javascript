//var arr = [1, 2, 3, 4, 5, 6];

var arr = [3,2,4]
//var target = 7;
var target = 6;
var hashMap = {}

var r = []

arr.forEach((elem,i)=>{
  if(hashMap[target-elem] != undefined){
    r.push([elem,arr[hashMap[target-elem]]])
  }else{
    hashMap[elem] = i
  }
  
  
})

console.log(r)





