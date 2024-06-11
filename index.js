console.log('My code is running');

// let addBTN = document.querySelector('#addTasker');
let ourLIST = document.getElementById('ourList');

document.getElementById('addTasker').addEventListener('click', () =>{console.log("I was clicked")});
document.getElementById('addTasker').addEventListener('click', () =>{ourLIST
  .innerHTML += '<li class = "todo">' + document.getElementById("myInput").value + '</li>' + '<button class = "close"> Close </button>'});

// taking our list we're adding an event listener on click, passing the item
ourLIST.addEventListener('click', item =>{
  // if the item  class list contains todo
  if (item.target.classList.contains('todo')){
    // we change it to strike causing  the strike through
    item.target.classList.toggle('strike');
  }
});

// ourLIST.addEventListener('click', item =>{
//   if (item.target.classList.contains('close')){

//     item.target.parentElement.remove();
//   }
// });

// ourLIST.addEventListener("click", () => deleteTask('close'))

// function deleteTask(parentId) {
//   document.getElementById(parentId).remove()
// }
