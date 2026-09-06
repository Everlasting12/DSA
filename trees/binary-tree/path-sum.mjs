import { BinaryTree, TreeNode } from "./binary-tree.mjs";

const bTree = new BinaryTree(
    new TreeNode(
        5,
        new TreeNode(
            4,
            new TreeNode(
                11,
                new TreeNode(
                    7,
                ),
                new TreeNode(
                    2,
                )
            )
        ),
        new TreeNode(
            8,
            new TreeNode(
                13,
            ),
            new TreeNode(
                4,
                null,
                new TreeNode(
                    1,
                )
            )
        )
    )
);

function pathSum(root, targetSum) {
    let ans = false;
    if (!root) return ans;

    function traverse(node, currSum) {
        let newSum = currSum + node.value;

        if (!(node.left && node.right) && newSum === targetSum) {
            ans = true
        }

        node.left && traverse(node.left, newSum);
        node.right && traverse(node.right, newSum);
    }

    traverse(root, 0);
    return ans;
}

console.log("Path sum -> ", pathSum(bTree.root, 22));