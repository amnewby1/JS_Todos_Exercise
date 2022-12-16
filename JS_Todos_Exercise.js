const form = document.querySelector("#todos");
const toDoInput = document.querySelector("#New_Todo");
const toDoList = document.querySelector("#todo_list");

const savedToDos = JSON.parse(localStorage.getItem("savedToDos"));
if (!savedToDos) {
  localStorage.setItem("savedToDos", JSON.stringify([]));
} else {
  savedToDos.forEach((task) => {
    if (!task.isDone) {
      const newToDo = document.createElement("li");
      const doneBtn = document.createElement("button");
      doneBtn.innerText = "Done";
      newToDo.innerText = toDoInput.value;
      newToDo.appendChild(doneBtn);
      toDoList.appendChild(newToDo);
    }
  });
}

form.addEventListener("submit", function (e) {
  const savedToDos = JSON.parse(localStorage.getItem("savedToDos"));
  e.preventDefault();
  const newToDo = document.createElement("li");
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  newToDo.innerText = toDoInput.value;
  newToDo.appendChild(doneBtn);
  toDoList.appendChild(newToDo);

  savedToDos.push({ taskName: toDoInput.value, isDone: false });
  console.log(savedToDos);
  localStorage.setItem("savedToDos", JSON.stringify(savedToDos));
  toDoInput.value = "";
});

toDoList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
