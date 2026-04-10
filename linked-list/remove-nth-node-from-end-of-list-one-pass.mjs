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

    if (n <= 0) return head;

    let first = sentinel;

    for (let i = 0; i < n; i++) {
        if (!first.next) return head;
        first = first.next;
    }
    let second = sentinel;

    while (first && first.next) {

        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return sentinel.next;
}

l.print()
l.head = removeNthNodeFromLinkedListFromEnd(l.head, 6)
l.print()