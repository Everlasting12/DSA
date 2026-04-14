export function printNodes(node) {
    let nodeArr = []
    while (node) {
        nodeArr.push(node.value)
        node = node.next
    }
    console.log("Linked List:", nodeArr.join(' -> '))
}