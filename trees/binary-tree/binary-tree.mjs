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
console.log("In-Order Traversal -> ", bTree.inorderRecusrive());
console.log("Post-Order Traversal -> ", bTree.postorderRecusrive());