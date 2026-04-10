import { LinkedList, LLNode } from "./linked-list.mjs";


const l = new LinkedList();
l.addAtTail(1)
l.addAtTail(3)
l.addAtTail(2)
l.addAtTail(3)
l.addAtTail(4)
l.addAtTail(1)
l.addAtTail(5)

function deleteDuplicates(head) {

    let sentinel = new LLNode()
    sentinel.next = head;

    let seen = new Set();
    let curr = head;
    let prev = sentinel;


    while (curr) {
        if (seen.has(curr.value)) {
            prev.next = curr.next;
        } else {
            seen.add(curr.value)
            prev = curr;
        }
        curr = curr.next;
    }

    return sentinel.next;

}

l.print()
l.head = deleteDuplicates(l.head)
l.print()