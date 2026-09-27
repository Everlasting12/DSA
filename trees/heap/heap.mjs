
export class Heap {

    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1;
    }

    getRightChildIndex(i) {
        return (2 * i) + 2;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }


    insertNodeInMaxHeap(value) { }

    insertNodeInMinHeap(value) {
        this.heap.push(value);

        let lastIndex = this.heap.length - 1;
        this.heapifyUpMinHeap(lastIndex)

    }

    heapifyUpMinHeap(i) {
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[i] < this.heap[parentIndex]) {
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]];  // swapping
                i = parentIndex;
            }
            else {
                break;
            }
        }
    }
}

const h = new Heap();

h.insertNodeInMinHeap(10)
h.insertNodeInMinHeap(11)
h.insertNodeInMinHeap(1)
h.insertNodeInMinHeap(5)
h.insertNodeInMinHeap(3)
console.log('print min heap', h.heap)