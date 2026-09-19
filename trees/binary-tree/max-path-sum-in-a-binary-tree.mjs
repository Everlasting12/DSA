import { BinaryTree, TreeNode } from "./binary-tree.mjs";

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


function maxPathSum(root) {
    let maxSum = -Infinity;
    function traverse(curr) {
        if (!curr) return 0;
        let leftMax = Math.max(0, traverse(curr.left));
        let rightMax = Math.max(0, traverse(curr.right));
        let currMax = curr.value + leftMax + rightMax;
        maxSum = Math.max(currMax, maxSum)
        return curr.value + Math.max(leftMax, rightMax);
    }

    traverse(root);

    return maxSum;
}



console.log("Max path sum of a binary tree", maxPathSum(bTree.root))