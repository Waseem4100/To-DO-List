import inquirer from "inquirer";
let todo_list = [];
let while_condiation = true;
while (while_condiation === true) {
    let options = await inquirer.prompt([{
            type: 'list',
            name: "list",
            message: "Choose an option",
            choices: ["create", "delete", "edit", "veiw",]
        }]);
    //------------------------------------------- add ---------------
    if (options.list === "create") {
        let new_task = await inquirer.prompt([{
                type: "input",
                name: "task",
                message: "Enter new task",
            },
        ]);
        if (new_task.task !== ``) {
            todo_list.push(new_task.task);
            console.log("Task added successfully");
            console.log(todo_list);
        }
    }
    //------------------------------------------- delete ---------------
    if (options.list === "delete") {
        let delete_action = await inquirer.prompt([{
                type: "list",
                name: "delete",
                message: "Choose task to delete",
                choices: todo_list
            }]);
        if (todo_list.includes(delete_action.delete)) {
            todo_list = todo_list.filter(task => task !== delete_action.delete);
            console.log("Task deleted successfully");
            console.log(todo_list);
        }
        else {
            console.log("Task not found in list");
        }
    }
    //------------------------------------------- edit ---------------
    if (options.list === "edit") {
        let edit_action = await inquirer.prompt([{
                type: "list",
                name: "edit",
                message: "Choose task to edit",
                choices: todo_list
            }]);
        if (todo_list.includes(edit_action.edit)) {
            let new_task = await inquirer.prompt([{
                    type: "input",
                    name: "new_task",
                    message: "Enter new task",
                }]);
            if (new_task.new_task !== ``) {
                let index = todo_list.indexOf(edit_action.edit);
                todo_list[index] = new_task.new_task;
                console.log("Task edited successfully");
                console.log(todo_list);
            }
            else {
                console.log(" new task cannot be empty");
            }
        }
        else {
            console.log("Task not found in list");
        }
    }
    //-----------------------------------------view ---------------
    choices: ["create", "delete", "edit", "veiw",];
    if (options.list === "veiw") {
        console.log(todo_list);
    }
    //----------------------------------------- exit ---------------
    let while_action = await inquirer.prompt([{
            type: "confirm",
            name: "exit",
            message: "do you want to exit",
            default: "true",
        }]);
    if (while_action.exit === false) {
        while_condiation = false;
    }
}
