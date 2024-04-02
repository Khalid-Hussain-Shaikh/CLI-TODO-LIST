#! / usr/bin/env node

import inquirer from "inquirer";

let Todolist: string[] = [];

//Array= Done
//Fuction=
//Operation=

async function createTodos(Todolist: string[]) {
  do {
    let ans = await inquirer.prompt([
      {
        type: "list",
        name: "Add",
        message: "Select an operation",
        choices: ["Add", "Update", "View", "Delete"],
      },
    ]);
    if (ans.Add === "Add") {
      let addTodo = await inquirer.prompt([
        {
          type: "input",
          name: "Task",
          message: "Add your Task",
        },
      ]);
      Todolist.push(addTodo.Task);
      console.log(Todolist);
    }
    if (ans.Add === "Update") {
      let updateTodo = await inquirer.prompt([
        {
          type: "list",
          name: "update",
          message: "Select operation for update",
          choices: Todolist.map((update) => update),
        },
      ]);
      let addTodo = await inquirer.prompt([
        {
          type: "input",
          name: "Task",
          message: "Add your Task",
        },
      ]);
      let newUpdate = Todolist.filter((New) => New !== updateTodo.update);
      Todolist = [...newUpdate, addTodo.Task];
      console.log(Todolist);
    }
    if (ans.Add === "View") {
      console.log(Todolist);
    }
    if (ans.Add === "Delete") {
      let deleteTodo = await inquirer.prompt([
        {
          type: "list",
          name: "delete",
          message: "Select operation for update",
          choices: Todolist.map((update) => update),
        },
      ]);
      let newUpdate = Todolist.filter((New) => New !== deleteTodo.delete);
      Todolist = [...newUpdate];
      console.log(Todolist);
    }
  } while (true);
}

createTodos(Todolist);
