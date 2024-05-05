// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example



function weave(sourceOne, sourceTwo) {
    let q = new Queue();

    // Weave until both queues are empty
    while (!sourceOne.isEmpty() || !sourceTwo.isEmpty()) {
        if (!sourceOne.isEmpty()) {
            q.add(sourceOne.remove());
        }
        if (!sourceTwo.isEmpty()) {
            q.add(sourceTwo.remove())
        }
    }
    console.log(q.data)
    return q.data; // Returning the new queue
}

// Queue class definition
class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.push(record); // Add to the end, which is typical for queues
    }

    remove() {
        return this.data.shift(); // Remove from the front, which is typical for queues
    }

    peek() {
        return this.data[0]; // Peek at the front, the next to be removed
    }

    isEmpty() {
        return this.data.length === 0; // Helper method to check if the queue is empty
    }
}

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
queueOne.add(3);
queueOne.add(4);
queueOne.add(5);
console.log(queueOne.data)


const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('To');
queueTwo.add('You');
console.log(queueTwo.data)


weave(queueOne,queueTwo)
//console.log(queueOne, queueTwo)

module.exports = weave;
