function isPalindrome(head) {
    if (!head.next) return true;

    let slow = fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow;

    // reverese the other half of the linked list;

    let prev = null;
    let curr = mid;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // compare for palindrome;

    let firstList = head;
    let secondList = prev;

    while (secondList) {
        if (firstList.val != secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;

}