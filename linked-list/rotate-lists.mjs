import { LinkedList } from "./linked-list.mjs";
import { printNodes } from "./print-linked-list-node.mjs";

let l = new LinkedList();

l.addAtTail(1)
l.addAtTail(2)
l.addAtTail(3)
l.addAtTail(4)
l.addAtTail(5)
l.print()

function rotateLinkedList(head, k) {
    if (!head || !head.next) return head;

    let slow = head;
    let fast = head;
    let curr = head;
    let length = 0;

    while (curr) {
        curr = curr.next;
        length++
    }
    k = k % length;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = head
    let newHead = slow.next;
    slow.next = null;

    return newHead;
}
const head = rotateLinkedList(l.head, 5)
printNodes(head)