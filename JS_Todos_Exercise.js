const form = document.querySelector("#todos");
const input = document.querySelector("#New_Todo");
const toDoList = document.querySelector("#todo_list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newToDo = document.createElement("li");
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  newToDo.innerText = input.value;
  newToDo.appendChild(doneBtn);
  toDoList.appendChild(newToDo);
  input.value = "";
});

toDoList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
