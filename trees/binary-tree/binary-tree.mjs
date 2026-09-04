export class TreeNode {

    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    /**
              1
            /   \
           2     3
          / \     \
         4   5     8
            / \   /  
           6   7 9 
     */
    // Traversals
    preorderRecusrive() {
        // root -> left -> right 
        let ans = [];
        function traversal(curr) {
            if (!curr) return;
            ans.push(curr.value);
            traversal(curr.left)
            traversal(curr.right)
        }
        traversal(this.root);

        return ans;
    }
    // Traversals
    preorderIterative() {
        // root -> left -> right 
        let ans = [];
        let stack = [];
        stack.push(this.root);
        while (stack.length) {
            let curr = stack.pop();
            if (curr) {
                ans.push(curr.value);
                curr?.right && stack.push(curr.right)
                curr?.left && stack.push(curr.left)
            }
        }

        return ans;
    }


    inorderRecusrive() {

        // left -> root -> right
        let ans = [];

        function traversal(curr) {
            if (!curr) return;
            traversal(curr.left);
            ans.push(curr.value);
            traversal(curr.right);
        }
        traversal(this.root);
        return ans;
    }

    inorderIterative() {
        // left -> root -> right
        let ans = [];
        let stack = [];
        let curr = this.root;
        while (curr || stack.length) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            ans.push(curr.value);
            curr = curr.right;
        }

        return ans;
    }
    postorderRecusrive() {
        //   left -> right -> root
        let ans = [];

        function traversal(curr) {
            if (!curr) return null;
            traversal(curr.left);
            traversal(curr.right);
            ans.push(curr.value);
        }
        traversal(this.root);

        return ans;
    }

    postorderIterativeTwoStacks() {
        let s1 = [this.root];
        let s2 = [];

        while (s1.length) {
            let curr = s1.pop();
            curr && s2.push(curr)
            curr.left && s1.push(curr.left);
            curr.right && s1.push(curr.right);
        }

        let ans = []
        while (s2.length) {
            ans.push(s2.pop().value)
        }

        return ans;
    }

    postorderIterativeOneStack() {
        let stack = [];
        let curr = this.root;
        let lastVisited = null;
        let ans = [];

        while (stack.length || curr) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }

            let peekNode = stack.at(-1);

            if (peekNode.right && peekNode.right !== lastVisited) {
                curr = peekNode.right;
            }
            else {
                ans.push(peekNode.value);
                // pop it and store it in lastVisited
                lastVisited = stack.pop();
            }
        }

        return ans;
    }
    // levelOrder() { }

    // Properties
    // height() { }
    // depth() { }
    // size() { }

    // Questions
    // isEmpty() { }
    // isBalanced() { }
    // isFull() { }
    // isComplete() { }
}


const bTree = new BinaryTree(
    new TreeNode(
        1,
        new TreeNode(
            2,
            new TreeNode(
                4,
            ),
            new TreeNode(
                5,
                new TreeNode(
                    6,
                ),
                new TreeNode(
                    7,
                )
            )
        ),
        new TreeNode(
            3,
            null,
            new TreeNode(
                8,
                new TreeNode(
                    9,
                )
            )
        )
    )
);
console.log("Pre-Order Traversal -> ", bTree.preorderRecusrive());
console.log("Pre-Order Traversal -> ", bTree.preorderIterative());
console.log("In-Order Traversal -> ", bTree.inorderRecusrive());
console.log("In-order Traversal -> ", bTree.inorderIterative());
console.log("Post-Order Traversal -> ", bTree.postorderRecusrive());
console.log("Post-order iterative Traversal -> ", bTree.postorderIterativeTwoStacks());
console.log("Post-order iterative Traversal 2 -> ", bTree.postorderIterativeOneStack());