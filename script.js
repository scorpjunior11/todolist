function addTask() {
    let taskInput = document.getElementById("task-input").value.trim();

    if (taskInput !== "") {
       let list = document.createElement("li");
       list.textContent = taskInput;
       document.getElementById("task-list").appendChild(list);
       document.getElementById("task-input").value = "";

    } else {
        alert("Please enter a task before adding.");
    }
}