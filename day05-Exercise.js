
// Nomer 1
var x = [5, 10, 45, 30, 55];
var max = 0;
var min = 0;
var total = 0;

for (var i = 0; i < x.length; i++) {
  if (x[i] > max) {
     max = x[i];
   }
  else if (x[i] < min) {
    min = x[i];
  }
  total += x[i];
}

console.log(max);
console.log(min);
console.log(total/x.length);




// Nomer 2
const list = ['antony', 'shaw', 'bruno']

const output = list.reduce(function(acc, cur, i) {
  let str = acc;
  str += cur;
  
  if (i < list.length - 2) {
    str += ', ';
  } else if (i < list.length - 1) {
    str += ', and ';
  }
  
  return str;
}, '');

console.log(output);



// Nomer 3
function func() {

  var str = 'Hello World Bro'
  var array = str.split("o");
 console.log(array);
}
func();



// Nomer 4
Array.prototype.SumArray = function (arr) {

  var sum = this.map(function (num, idx) {
    return num + arr[idx];
  });

  return sum;
}
var array1 = [1,2,3,4];
var array2 = [5,6,7,8];
var sum = array1.SumArray(array2);
console.log(sum); 



// Nomer 5
var arr = ['1', '2', '3'];

arr.push('4', '5');

console.log(arr);



// Nomer 6
var myArray = [1,2,3,4,5,6,7,8,9,10,11,12];
var it = myArray.length;

for(var i=0; i<it; i++) {
  for(var j=0; j<myArray.length; j++ )
    if(myArray[j]%2 === 1){
      myArray.splice(j,1)
      break;
    }
  };

  console.log(myArray);









