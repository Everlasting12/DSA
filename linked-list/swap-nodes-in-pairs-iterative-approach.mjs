import { LinkedList, LLNode } from "./linked-list.mjs";
import { printNodes } from "./print-linked-list-node.mjs";

let l = new LinkedList();

l.addAtTail(1)
l.addAtTail(2)
l.addAtTail(3)
l.addAtTail(4)
l.addAtTail(6)
l.addAtTail(0)

l.print()

function swapNodesInPairsIterativeApproach(head) {
    if (!head || !head.next) return head;

    let dummy = new LLNode();
    dummy.next = head;


    let prev = dummy;
    let first = head;
    let second = head.next;

    while (first && second) {
        prev.next = second;
        first.next = second.next;
        second.next = first;

        prev = first;
        first = prev.next;
        second = first && first.next
    }

    return dummy.next
}


const head = swapNodesInPairsIterativeApproach(l.head)

printNodes(head)