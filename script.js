// Selecting HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task event
addTaskBtn.addEventListener("click", function () {
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task");
    return;
  }

  // Create li element
  const li = document.createElement("li");
  li.className = "list-group-item";

  // Create span for task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskValue;
  taskSpan.className = "task-text";

  // Toggle completed task
  taskSpan.addEventListener("click", function () {
    taskSpan.classList.toggle("completed");
  });

  // Edit task on double click
  taskSpan.addEventListener("dblclick", function () {
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      taskSpan.textContent = newTask.trim();
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-danger btn-sm";

  // Delete task event
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});