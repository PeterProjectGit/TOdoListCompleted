document.addEventListener("DOMContentLoaded", function(){

    const todoInput = document.querySelector(".újtennivaló");
    const addButton = document.querySelector("#newItemButton");
    const todoList = document.querySelector("ul");
    const clearButton = document.querySelector("#clear");
    const emptyButton = document.querySelector("#empty");
    
    function addTodo() {
        const text = todoInput.value.trim(); 
        if (text !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = text;
            todoList.prepend(listItem);
            todoInput.value = "";
        } else {
            alert("Adj meg valamit, teshó!");
        }
    }
    
    function toggleComplete(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("lineThrough");
        }
    }
    
    function clearCompleted() {
        document.querySelectorAll(".lineThrough").forEach(item => item.remove());
    }
    
    function emptyList() {
        todoList.innerHTML = ""; 
    }
    
    addButton.addEventListener("click", addTodo);
    todoList.addEventListener("dblclick", toggleComplete);
    clearButton.addEventListener("click", clearCompleted);
    emptyButton.addEventListener("click", emptyList);
})