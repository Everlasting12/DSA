import { BinaryTree, TreeNode } from "./binary-tree.mjs";

/**
 
              1
            /   \
          2       3
        /  \       \
       4     5       8
           /  \       \
           6   7       9

 */
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


function getBinaryTreeRightSideView(root) {
    if (!root) return [];
    let ans = [], q = [root];

    while (q.length) {
        for (let i = 0; i < q.length; i++) {
            let curr = q.shift();
            i === 0 && ans.push(curr.value);

            curr.right && q.push(curr.right);
            curr.left && q.push(curr.left);
        }
    }

    return ans;
}

console.log("getBinaryTreeRightSideView", getBinaryTreeRightSideView(bTree.root))