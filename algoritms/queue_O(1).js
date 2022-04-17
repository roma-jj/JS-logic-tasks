// class Queue {
//     #storage = {};
//     #last = 0;
//     #first = 0;
//
//     enqueue(item) {
//         this.#storage[this.#last] = item;
//         this.#last++;
//     }
//
//     dequeue() {
//         if (this.size === 0) {
//             return;
//         };
//
//         const value = this.#storage[this.#first];
//
//         delete this.#storage[this.#first];
//         this.#first++;
//         return value;
//     }
//
//     get size() {
// 	    return this.#last - this.#first
//     }
// }
//
// const table = new Queue;
//

class LinkedList {
    #length = 0;
    #head;
    #tail;

    addToTail(value) {
        const node = {
            value,
            next: null
        }

        if (this.#length === 0) {
            this.#head = node;
            this.#tail = node;
        } else {
            this.#tail = node;
        }

        this.length++;
    }

    removeFromHead() {
        if (this.#length === 0) {
            return;
        }

        const value = this.#head.value;
        this.#head = this.#head.next;

        this.length--;
        return value;
    }

    size() {
        return this.#length;
    }
}


class Queue extends LinkedList {
    constructor() {
        super();

        this.enqueue = this.addToTail;
        this.dequeue = this.removeFromHead;
    }

    get size() {
        return super.size();
    }
}

const queue = new Queue;