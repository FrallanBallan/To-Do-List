//Variables
let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");

//Functions
function addTask() {
  if (inputBox.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
function checkRemove(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

//EventListeners
document.querySelector("#addTask").addEventListener("click", addTask);

listContainer.addEventListener("click", checkRemove);

//Default start
showData();

//Note to self.
// setItem to store it
// getItem to show it
