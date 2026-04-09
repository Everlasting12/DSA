import { LinkedList } from "./linked-list.mjs";

const l1 = new LinkedList();
const l2 = new LinkedList();

l1.addAtTail(1)
l1.addAtTail(9)
l1.addAtTail(1)
l1.addAtTail(8)
l1.addAtTail(4)
l1.addAtTail(5)

l2.addAtTail(5)
l2.addAtTail(6)
l2.addAtTail(1)
const intersectionNode = l1.getNode(8)
const preIntersectionNode = l2.getNode(1)
preIntersectionNode.next = intersectionNode

l1.print()
l2.print()


function getIntersectionNode(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let seen = new Set();

    while (headB !== null) {

        seen.add(headB);

        headB = headB.next
    }

    while (headA !== null) {
        if (seen.has(headA)) {
            return headA
        }
        headA = headA.next
    }

    return null
};

console.log("getIntersectionNode", getIntersectionNode(l1.head, l2.head))