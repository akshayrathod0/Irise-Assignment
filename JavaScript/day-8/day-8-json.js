var num = [10, 20, 19, 50, 60];
console.log(num)
num.sort((a,b) => a - b)
console.log(num)

var myobject = {1:"akshay"}

var result = JSON.stringify(myobject);  // converting into json object
console.log(result) 

var store = JSON.parse(result)
console.log(result)
