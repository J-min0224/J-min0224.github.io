const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEYS = "todos";

let toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos))
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(toDo) {
  const createTodo = document.createElement("li");
  createTodo.id = toDo.id;
  const span = document.createElement("span");
  span.innerText = toDo.text;
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", deleteToDo);
  createTodo.appendChild(span);
  createTodo.appendChild(button);
  todoList.appendChild(createTodo);
}

function handleToDoList(event) {
  event.preventDefault();
  const toDo = todoInput.value;
  todoInput.value = ""; 
  
  const toDoObject = {
    text: toDo,
    id: Date.now(),
  }
  
  toDos.push(toDoObject); // putting the input in the array
  paintToDo(toDoObject); // putting the input in the <span>
  saveToDo();
}

todoForm.addEventListener("submit", handleToDoList);

const savedToDos = localStorage.getItem(TODOS_KEYS);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}