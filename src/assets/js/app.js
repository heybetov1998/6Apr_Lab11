//HTML elements
const addButton = document.getElementById("AddButton");
const todoInput = document.getElementById("TodoInput");
const list = document.getElementById("List");

//Variables
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
    };

    todoList.push(newTodo);
    todoInput.value = "";
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
                (item) => `<div class="listItem">
            <p class="itemText">${item.text}</p>
            <button id="${item.id}" class="deleteButton" onclick="deleteTodo(${item.id})">Delete</button>
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