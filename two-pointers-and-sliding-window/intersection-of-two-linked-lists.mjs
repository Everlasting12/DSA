function getIntersectionNode(headA, headB) {
    let pA = headA;
    let pb = headB;

    while (pA !== pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next
    }

    return pA;
}