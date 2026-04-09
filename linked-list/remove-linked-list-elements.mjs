import { LinkedList, LLNode } from "./linked-list.mjs";

const l = new LinkedList();
l.addAtTail(1)
l.addAtTail(2)
l.addAtTail(6)
l.addAtTail(3)
l.addAtTail(4)
l.addAtTail(5)
l.addAtTail(6)

LinkedList.prototype.removeLinkedListElements = function (head, value) {
    let sentinelNode = new LLNode()
    sentinelNode.next = head;

    let prev = sentinelNode;
    while (prev && prev.next) {
        if (prev.next.value === value) {
            prev.next = prev.next.next;
        }
        else {
            prev = prev.next
        }
    }

    return sentinelNode.next
}
l.print()
l.removeLinkedListElements(l.head, 6)
l.print()