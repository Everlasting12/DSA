import { LinkedList } from "./linked-list.mjs";

const l = new LinkedList();

l.addAtTail(2)
l.addAtTail(1)
l.addAtTail(3)
l.addAtTail(5)
l.addAtTail(6)
l.addAtTail(4)
l.addAtTail(7);

l.print()

function oddEvenLinkedList(head) {

    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenStart = even;

    while (even && even.next && odd && odd.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;

        even = even.next;
        odd = odd.next;
    }

    odd.next = evenStart

    return head;
}
l.head = oddEvenLinkedList(l.head)
l.print()

