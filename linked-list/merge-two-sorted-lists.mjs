import { LinkedList, LLNode } from "./linked-list.mjs"

const l1 = new LinkedList()
l1.addAtTail(1)
l1.addAtTail(2)
l1.addAtTail(4)

const l2 = new LinkedList()
l2.addAtTail(1)
l2.addAtTail(3)
l2.addAtTail(4)

function mergeTwoSortedLists(l1, l2) {

    let start = new LLNode()
    let curr = start;

    while (l1 && l2) {

        if (l1.value > l2.value) {
            curr.next = l2;
            l2 = l2.next
        } else {
            curr.next = l1;
            l1 = l1.next;
        }

        curr = curr.next;
    }

    if (!l1) {
        curr.next = l2
    }
    if (!l2) {
        curr.next = l1
    }

    return start.next;
}


let res = mergeTwoSortedLists(l1.head, l2.head)
let resArr = []
while (res) {
    resArr.push(res.value)
    res = res.next
}
console.log("Linked List:", resArr.join(' -> '))