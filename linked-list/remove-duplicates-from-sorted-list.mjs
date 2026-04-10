import { LinkedList, LLNode } from "./linked-list.mjs";


const l = new LinkedList();
l.addAtTail(1)
l.addAtTail(1)
l.addAtTail(2)
l.addAtTail(3)
l.addAtTail(3)

function deleteDuplicates(head) {

    let curr = head;

    while (curr && curr.next) {
        if (curr.value === curr.next.value) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }

    return head;
}

l.print()
l.head = deleteDuplicates(l.head)
l.print()