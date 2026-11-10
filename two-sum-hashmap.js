var arr = [0,1,2,3,4,5,6,7,8,9,10];
var target = 5;
//o/p -> [2,3],[1,4],[5,0]
var finalArr = [];

//Brute force approach - O(N2)
// function findPair(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(i==j) continue;
//       if(arr[i]+arr[j]==target){
//         console.log(arr[i],arr[j]);
//         finalArr.push([arr[i],arr[j]])
//       }
//     }
//   }
// }

// findPair(arr)

//Better approach with hash map (elem,index) - O(N) or //O(nlogn) depends upon map taken
// function findPair(arr){
//   var temp = {};
//   for(let i=0;i<arr.length;i++){
//     if(temp[target-arr[i]]!=undefined){
//       finalArr.push([arr[i],target-arr[i]])
//     }else{
//       temp[arr[i]] = i;
//     }
    
//   }

//   console.log(temp)
// }

// findPair(arr)

// console.log("Final arr",finalArr)


//Two pointer approach O(n)
function findPair(arr){
  var left = 0;
  var right = arr.length-1;
  while(left<right){
    if(arr[left]+arr[right]==target){
      finalArr.push([arr[left],arr[right]])
      right = right-1;
    }else if(arr[left]+arr[right]<target){
      left = left+1;
    }else{
      right = right-1;
    }
  }
}

findPair(arr)

console.log(finalArr)
