
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");

let tasks = [];


function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");


        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.classList.add("task-checkbox");


        const taskLabel = document.createElement("label");
        taskLabel.textContent = task;


        const deleteLink = document.createElement("a");
        deleteLink.href = "#";
        deleteLink.setAttribute("data-index", index);
        deleteLink.classList.add("delete-task");
        deleteLink.textContent = "Delete";


        listItem.appendChild(taskCheckbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(document.createTextNode(" | "));
        listItem.appendChild(deleteLink);


        taskList.appendChild(listItem);
    });
}


addTaskButton.addEventListener("click", () => {
    const newTask = taskInput.value;
    if (newTask.trim() !== "") {
        tasks.push(newTask);
        taskInput.value = "";
        displayTasks();
    }
});


taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-task")) {
        const index = e.target.getAttribute("data-index");
        tasks.splice(index, 1);
        displayTasks();
    }
});


taskList.addEventListener("change", (e) => {
    if (e.target.classList.contains("task-checkbox")) {
        const listItem = e.target.parentElement;
        listItem.classList.toggle("completed", e.target.checked);
    }
});


displayTasks();
