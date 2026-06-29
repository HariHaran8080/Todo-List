const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

addBtn.addEventListener("click", addTask);

function addTask() {
 
  const task = input.value;

  
  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  
  li.textContent = task;

  
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";

  deleteBtn.className = "deleteBtn";

 
  li.appendChild(deleteBtn);

  
  list.appendChild(li);

  input.value = "";



  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
}
