const list = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

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

newBtn.addEventListener("click", function()
{
    let text = prompt("Enter a new TO DO:");

    if (text && text.trim() !== "")
    {
        createTodo(text);
    }
});

loadTodos();