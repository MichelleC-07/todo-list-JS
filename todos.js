//Loops, Arrays, Conditional Logic

//Prompt user "What would you like to do?" 

// input: new - Prompt "Enter new todo"
//            - print out statement todo added to list
// input: list - Prompt user "What would you like to do"
//             - print all todos with indexes
// input: delete - Prompt "Enter index of todo to delete"
//               - print out statement todo removed
// input: quit - print out quit application

let userInput = prompt("What would you like to do?").toLowerCase()

const todos = ["Clean Toilet", "Meditate", "Read Books"]

while (userInput !== "quit" && userInput !== "q") {
    if (userInput === "list") {
        console.log("***********************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("***********************")
    } else if (userInput === "new") {
        const newTodoItem = prompt("Enter new todo")
        todos.push(newTodoItem)
        console.log(`${newTodoItem} added to todolist`)
    } else if (userInput === "delete") {
        const indexToDelete = parseInt(prompt("Enter an index to delete"))
        // another way: !Number.isNan(indexToDelete)
        if (!indexToDelete === NaN) {
            const deletedTodo = todos.splice(indexToDelete, 1)
            console.log(`"${deletedTodo} is deleted`)
        } else {
            console.log("Invalid index")
        }

    }
    userInput = prompt("What would you like to do?").toLocaleLowerCase()
}

console.log("OK, YOU QUIT THE APP")