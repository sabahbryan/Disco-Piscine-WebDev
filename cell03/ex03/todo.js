const todoList = document.getElementById("ft_list")
const newButton =  document.getElementById("newButton");

function    saveTodo()
{
    let todoArray = [];
    const todoElement = todoList.querySelectorAll(".todo");

    todoElement.forEach(item => {
        todoArray.push(item.textContent);
    });
    // for (let i = 0; i < todoArray.length; i++)
    //     todoArray.push(todoElement.textContent);

    document.cookie = "todoArray=" + JSON.stringify(todoArray) + "; path=/";
}

function    loadTodo()
{
    let cookies = document.cookie.split(";");

    for (let cookie of cookies)
    {
        cookie = cookie.trim();

        if (cookie.startsWith("todoArray="))
        {
            let todoArray = JSON.parse(cookie.substring(10));

            todoArray.forEach(todo => {
                createTodo(todo, false);
            });
        }
    }
}

newButton.addEventListener("click", function()
{
    let text = prompt("Enter a new TO-DO:")

    if (text == "")
        alert("Input cannot be empty")
    else
        createTodo(text)

    // if (text && text.trim() !== "")
    // {
    //     createTodo(text);
    // }
});

function    createTodo(text, save = true)
{
    const newDiv = document.createElement("div");
    newDiv.className = "todo";
    newDiv.textContent = text;

    //delete TO-DO
    newDiv.addEventListener("click", function()
    {
        if (confirm("Delete this TO-DO?"))
        {
            newDiv.remove();
            saveTodo();
        }
    });

    //todoList.insertBefore(newDiv, todoList.firstChild);
    todoList.append(newDiv);

    if (save)
        saveTodo();
}

loadTodo();

/*
const list = document.getElementById("ft_list");
const newButton = document.getElementById("newButton");

function saveTodos()
{
    let todos = [];
    const items = list.querySelectorAll(".todo");

    items.forEach(item => {
        todos.push(item.textContent);
    });

    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
}

function loadTodos()
{
    let cookies = document.cookie.split(";");

    for (let cookie of cookies)
    {
        cookie = cookie.trim();

        if (cookie.startsWith("todos="))
        {
            let todos = JSON.parse(cookie.substring(6));

            todos.forEach(todo => {
                createTodo(todo, false);
            });
        }
    }
}

newButton.addEventListener("click", function()
{
    let text = prompt("Enter a new TO DO:");

    if (text && text.trim() !== "")
    {
        createTodo(text);
    }
});

function createTodo(text, save = true)
{
    const todo = document.createElement("div");
    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function()
    {
        if (confirm("Do you want to remove this TO DO?"))
        {
            todo.remove();
            saveTodos();
        }
    });

    list.insertBefore(todo, list.firstChild);

    if (save)
        saveTodos();
}

loadTodos();*/