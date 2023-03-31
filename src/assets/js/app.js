//HTML elements
const addButton = document.getElementById("AddButton");
const todoInput = document.getElementById("TodoInput");
const list = document.getElementById("List");

//Variables
const listItems = [];
const todoList = [];
let id = 0;

//FUNCTIONS
const getInputValue = () => {
    if (todoInput.value.length === 0) {
        alert("Input is empty");
        return false;
    }

    return todoInput.value;
};

const addTodo = () => {
    if (!getInputValue()) return false;

    const newTodo = {
        id: ++id,
        text: getInputValue(),
        isDone: false,
    };

    todoList.push(newTodo);
    todoInput.value = "";
    renderList();
};

const markAsDone = (id) => {
    const index = todoList.findIndex((item) => item.id === id);

    if (index === -1) return false;

    todoList[index].isDone = !todoList[index].isDone;
    renderList();
};

const deleteTodo = (id) => {
    const index = todoList.findIndex((item) => item.id === id);

    if (index === -1) return false;

    todoList.splice(index, 1);
    renderList();
};

const renderList = () => {
    if (todoList.length === 0) {
        list.innerHTML = `<h1 class="notFound">No items added</h1>`;
    } else {
        list.innerHTML = todoList
            .map(
                (item) => `<div class="listItem ${item.isDone ? "isDone" : ""}">
            <p class="itemText">${item.text}</p>
            <button class="markAsDone" onclick="markAsDone(${
                item.id
            })">Mark as done</button>
            <button id="${item.id}" class="deleteButton" onclick="deleteTodo(${
                    item.id
                })">Delete</button>
        </div>`
            )
            .join("");
    }
};

//EVENTS
//StartApp
renderList();

//Add todo
addButton.onclick = addTodo;
