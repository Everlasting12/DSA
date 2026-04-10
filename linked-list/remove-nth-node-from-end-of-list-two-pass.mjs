import { LinkedList, LLNode } from "./linked-list.mjs";

const l = new LinkedList();
l.addAtTail(1)
l.addAtTail(2)
l.addAtTail(3)
l.addAtTail(4)
l.addAtTail(5)

function removeNthNodeFromLinkedListFromEnd(head, n) {
    let sentinel = new LLNode();

    sentinel.next = head;

    let length = 0;

    while (head) {
        head = head.next;
        length++
    }

    if (n > length) return head

    let prevPos = length - n;
    let prev = sentinel;

    for (let i = 0; i < prevPos; i++) {
        prev = prev.next;
    }

    prev.next = prev.next.next;

    return sentinel.next;
}

l.print()
l.head = removeNthNodeFromLinkedListFromEnd(l.head, 6)
l.print()