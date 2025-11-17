/**
 * Task Class
 * 
 * A class to manage tasks with title, priority, completion status, and time tracking.
 */

class Task {
    // the private fields
    #completed = false;
    #minutesSpent = 0;

    static AllTasks = [];

    constructor(title, priority) {
        this.title = title;
        this.priority = priority;
        Tasks.AllTasks.push(this);
    }

    get completed() {
        return this.#completed;
    }

    get minutesSpent() {
        return this.#minutesSpent;
    }

    workOn(minutes) {
        this.#minutesSpent += minutes;
        console.log(`Worked on ${this.title} for ${minutes} minutes. Total time: ${this.#minutesSpent} minutes.`);

    }

    complete() {
        this.#completed = true;
        console.log(`${this.title} has been completed!`);
    }

    isCompleted() {
        return this.#completed;
    }

    static getTotalTasks() {
        return Task.AllTasks.length;
    }

    static findByTitle() {
        return Task.AllTasks.find(task => task.title === title);
    };
}

//Test class with examples below:


// Export the Task class for testing
module.exports = { Task };
