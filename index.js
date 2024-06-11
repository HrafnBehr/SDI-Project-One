console.log('My code is running');

// let addBTN = document.querySelector('#addTasker');
let ourLIST = document.getElementById('ourList');

document.getElementById('addTasker').addEventListener('click', () =>{console.log("I was clicked")});

// we're grabbing the element ID of addTasker and on click passing it to an arrow function where ourList
document.getElementById('addTasker').addEventListener('click', () =>{ourLIST
  // creates a list item based off the value of input and adds a close out button on the end of it
  .innerHTML += '<li class = "todo">' + document.getElementById("myInput").value + ' <button class = "close"> Close </button></li>'});

// taking our list we're adding an event listener on click, then passing the item
ourLIST.addEventListener('click', item =>{
  // if the item  class list contains todo
  if (item.target.classList.contains('todo')){
    // we change it to strike causing  the strike through
    item.target.classList.toggle('strike');
  }
});

// taking our list we're adding an event listener on click, then passing the item
ourLIST.addEventListener('click', item =>{
  // if the item class contains close
  if (item.target.classList.contains('close')){
    // it deletes itself and the parent element
    item.target.parentElement.remove();
  }
});

document.getElementById('addTasker').keydown = function(e){
    if(e.keyCode == 13){
      // submit
    }
 };