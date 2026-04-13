import { LinkedList, LLNode } from "./linked-list.mjs";

const l1 = new LinkedList();
l1.addAtTail(9)
l1.addAtTail(4)
l1.addAtTail(3)
l1.addAtTail(9)

const l2 = new LinkedList();
l2.addAtTail(5)
l2.addAtTail(6)
l2.addAtTail(4)


// Linked List: 9 -> 4 -> 3 -> 9
// Linked List: 5 -> 6 -> 4
// Linked List: 4 -> 1 -> 8 -> 9


function addTwoLinkedList(l1, l2) {
    let carry = 0;
    let ans = new LLNode();
    let returnHead = ans
    while (l1 || l2 || carry) {

        const sum = (!l1 ? 0 : l1.value) + (!l2 ? 0 : l2.value) + carry;

        const digit = sum % 10;
        carry = Math.floor(sum / 10);

        const newNode = new LLNode(digit);
        ans.next = newNode
        ans = ans.next

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    return returnHead.next;

}
l1.print()
l2.print()
let res = addTwoLinkedList(l1.head, l2.head);
let resArr = []
while (res) {
    resArr.push(res.value)
    res = res.next
}
console.log("Linked List:", resArr.join(' -> '))