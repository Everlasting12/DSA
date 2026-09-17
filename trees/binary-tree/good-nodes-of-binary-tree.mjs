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



function goodNodes(root) {
    if (!root) return [];

    let ans = 0;

    function traverse(curr, max) {

        if (curr.value >= max) {
            ans++
        }

        let currMax = Math.max(curr.value, max)

        curr.left && traverse(curr.left, currMax)
        curr.right && traverse(curr.right, currMax)
    }
    traverse(root, -Infinity)
    return ans;
}

console.log("goodNodes", goodNodes(bTree.root))