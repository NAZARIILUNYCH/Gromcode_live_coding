const mapArrayElements = (arr, callback) => {
  const result = [];
  
   for (let i = 0; i < arr.length; i++) {
     result.push(callback(arr[i], i, arr));
   }
  
  return result;
};

const testCallback = (el, index, arr) => el * 3;

console.log(mapArrayElements([5, 6, 10, -2, 44, 5], testCallback))
