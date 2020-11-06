// Dev shortcut
const clog = console.log;
// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = []

// // Objects to keep track of each tasks state
// function newTask(title, description) {
// }



// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    completeTask: function() { this.complete = true },
    logTaskState: function() { console.log(`${this.title} has${this.complete ? " " : " not "}been completed`) }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   clog(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }


// DRIVER CODE BELOW
const task1 = newTask("Clean teeth", "Use a toothbrush this time");
const task2 = newTask("Laundry", "Wash the sheet from your sheets")
const tasks = [task1, task2]


// TEST CODE
task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has not been completed

