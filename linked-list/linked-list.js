class LLNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }


    _print() {
        let llNode = this.head;
        let llStr = ''
        while (llNode) {
            llStr = `${llStr ? llStr : ''}${llNode.value}${llNode.next ? ' -> ' : ''}`
            llNode = llNode.next;
        }
        console.log('Linked List: ', llStr)
    }

    print() {
        let curr = this.head;
        let result = "";
        let first = true;

        while (curr) {
            if (!first) {
                result += " -> ";
            }
            result += curr.value;
            first = false;
            curr = curr.next;
        }

        console.log("Linked List:", result);
    }

    get(index) {
        if (index < 0 || index >= this.size) return -1;

        let curr = this.head;
        let i = 0;
        while (curr) {
            if (i === index) {
                return curr.value;
            }
            curr = curr.next;
            i++
        }

        return -1;
    }

    _get(index) {
        if (index < 0 || index >= this.size) return -1;

        let curr = this.head;
        while (index > 0) {
            curr = curr.next
            index--
        }

        return curr.value;
    }
    addAtHead(val) {
        const node = new LLNode(val);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++
    }
    addAtTail(val) {
        const node = new LLNode(val);
        if (!this.head) {
            this.addAtHead(val)
        } else {
            this.tail.next = node;
            this.tail = node
            this.size++
        }
    }
    addAtIndex(index, val) {

        if (index < 0 || index > this.size) return;

        if (index === 0) {
            this.addAtHead(val)
            return;
        }
        if (index === this.size) {
            this.addAtTail(val)
            return;
        }

        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        const node = new LLNode(val);
        node.next = curr.next;
        curr.next = node;
        this.size++

    }
    deleteAtIndex(index) {

        if (index < 0 || index >= this.size) return;

        if (index == 0) {
            this.head = this.head.next;

            if (this.size == 1) {
                this.tail = null;
            }
            this.size--;
            return;
        }


        if (index === this.size - 1) {
            let curr = this.head;

            while (curr.next != this.tail) {
                curr = curr.next;
            }

            curr.next = null;
            this.tail = curr;
            this.size--;
            return;
        }

        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        const nodeToDelete = curr.next;
        curr.next = nodeToDelete.next;

        if (nodeToDelete === this.tail) {
            this.tail = curr;
        }
        this.size--;
        return;
    }

}

const ll = new LinkedList();
ll.addAtTail(10)
ll.addAtTail(12)
ll.addAtTail(14)
ll.addAtTail(16)
ll.addAtTail(18)
ll.addAtTail(20)
ll.addAtTail(22)
ll.print()
// ll.addAtIndex(3)
ll.deleteAtIndex(3)
// 0     1     2     3     4     5     6
// 10 -> 12 -> 14 -> 16 -> 18 -> 20 -> 22
console.log("3rd index element: ", ll.get(3))
console.log("3rd index element: ", ll._get(3))
