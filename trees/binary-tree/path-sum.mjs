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

// top down approach
function pathSumTopDown(root, targetSum) {
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

// bottom up approach
function pathSumBottomUp(root, targetSum) {
    if (!root) return false;

    if (!(root.left && root.right) && targetSum === root.value) return true;

    let leftTreeHasPathSum = pathSumBottomUp(root.left, targetSum - root.value);
    let rightTreeHasPathSum = pathSumBottomUp(root.right, targetSum - root.value);

    return leftTreeHasPathSum || rightTreeHasPathSum;
}

console.log("Path sum top-down -> ", pathSumTopDown(bTree.root, 22));
console.log("Path sum botto-up-> ", pathSumBottomUp(bTree.root, 22));