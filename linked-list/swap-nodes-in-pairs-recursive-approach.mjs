import { LinkedList, LLNode } from "./linked-list.mjs";
import { printNodes } from "./print-linked-list-node.mjs";

let l = new LinkedList();

l.addAtTail(1)
l.addAtTail(2)
l.addAtTail(3)
l.addAtTail(4)
l.addAtTail(6)
l.addAtTail(0)
l.addAtTail(2)

l.print()

function swapNodesInPairsRecursiveApproach(head) {
    return swap(head);
}

function swap(head) {
    // Base case
    if (!head || !head.next) return head;

    let left = head;
    let right = head.next;

    left.next = swap(right.next);
    right.next = left;
    return right;
}

const head = swapNodesInPairsRecursiveApproach(l.head)

printNodes(head)