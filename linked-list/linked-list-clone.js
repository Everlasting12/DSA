// [] LL Node
//     - value
//     - next

// LinkedList
//     head
//     tail 
//     size


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addAtHead(value) {

        const node = new Node(value);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    addAtTail(value) {
        if (!this.head) {
            this.addAtHead(value)
        } else {
            const node = new Node(value);
            this.tail.next = node;
            this.tail = node;
            this.size++
        }
    }

    addAtIndex(index, value) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.addAtHead(value);
            return
        }

        if (index === this.size) {
            this.addAtTail(value)
            return;
        }

        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        const node = new Node(value)
        node.next = curr.next;
        curr.next = node;
        this.size++
    }
}


