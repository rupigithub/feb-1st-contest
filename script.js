/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
]
// console.log("rupika");

arr.map(PrintDeveloperbyMap);
arr.forEach(PrintDeveloperbyForEach);
addData();
arr.filter(removeAdmin);
console.log(arr);
concatenateArray()

function PrintDeveloperbyMap(e) {
  //Write your code here , just console.log
 if(e.profession == "developer"){
      return console.log(e.name);
    }
}

function PrintDeveloperbyForEach(e) {
  //Write your code here , just console.log
  if(e.profession == "developer"){
    console.log(e.name);
  }
}

function addData() {
  //Write your code here, just console.log
  let obj = {};
  obj.id = 4,
  obj.name = "susan",
  obj.age = "20",
  obj.profession = "intern"
  arr.push(obj);
  console.log(arr);
}

function removeAdmin(e,i) {
  //Write your code here, just console.log
   if(e.profession == "admin"){
    return arr.splice(i,1);
   }
}



function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "Suhani", age: "20", profession: "developer" },
    { id: 6, name: "Rudra", age: "22", profession: "Intern" },
    { id: 7, name: "Sumit", age: "27", profession: "Admin" }
  ]
  let new_array = arr.concat(arr2);
  console.log(new_array);
}

