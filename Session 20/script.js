// let todos = [
//     { id: 1, todo: "Học", deadLine: "26/3", status: "to do" },
//     { id: 2, todo: "Chơi", deadLine: "26/3", status: "pending" },
//     { id: 3, todo: "Làm việc nhà", deadLine: "26/3", status: "to do" }
// ];

// localStorage.setItem("todos", JSON.stringify(todos));

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos(todos) {
    const todoListElement = document.getElementById("todoList");
    todoListElement.innerHTML = "";
    todos.forEach(todo => {
        todoListElement.innerHTML += `<li>${todo.todo} - ${todo.deadLine} - ${todo.status} <button>Sửa</button> <button onclick ="deleteTodo(${todo.id})">Xóa</button></li>`
    })
}

function addTodo() {
    const todoInputElement = document.getElementById("todoInput");
    const todoDateElement = document.getElementById("todoDate");
    const todoStatusElement = document.getElementById("todoStatus");
    const todoInput = todoInputElement.value;
    const todoDate = todoDateElement.value;
    const todoStatus = todoStatusElement.value;
    const newTodo = {
        todo: todoInput,
        deadLine: todoDate,
        status: todoStatus,
        id: todos.length !== 0 ? todos[todos.length - 1].id + 1 : 1
    };
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos(todos);
}

function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos(todos);
}

function findTodoByName() {
    const findInputElement = document.getElementById("findInput");
    const findInput = findInputElement.value;
    let findTodos = todos.filter(todo => todo.todo.includes(findInput));
    renderTodos(findTodos);
}


renderTodos(todos);