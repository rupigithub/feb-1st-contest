let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  arr.forEach(e => {
      if(e.profession == "developer"){
        console.log(e);
      }
    })
}

function addData() {
  //Write your code here, just console.log
  let obj = {};
  obj.id = 4,
  obj.name = "susan",
  obj.age = 20,
  obj.profession = "intern"
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter(e => {
      if(e.profession != "admin"){
        console.log(e);
      }
    })
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
      { id: 5, name: "Suhani", age: 20, profession: "developer" },
      { id: 6, name: "Rudra", age: 22, profession: "Intern" },
      { id: 7, name: "Sumit", age: 27, profession: "Admin" }
    ]
    let new_array = arr.concat(arr2);
    console.log(new_array);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}

