document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // preventing the default behavior 
    const newTask = document.createElement("li");
    newTask.innerText = document.querySelector("#new-task-description").value;
    taskList.appendChild(newTask);
    addDeleteButton(newTask); 
    event.target.reset(); // clears input
  });

  function addDeleteButton(task) {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "x";
    task.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      task.remove(); // delete from task list
    });
  }
});