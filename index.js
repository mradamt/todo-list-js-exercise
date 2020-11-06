// Dev shortcut
const clog = console.log;

// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    },
  };
  return task;
};


// DRIVER CODE BELOW
const task1 = newTask("Clean teeth", "Use a toothbrush this time");
const task2 = newTask("Laundry", "Wash the sheet from your sheets");
const tasks = [task1, task2];


// TEST CODE
task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has not been completed

