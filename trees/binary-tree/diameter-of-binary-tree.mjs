import { BinaryTree, TreeNode } from "./binary-tree.mjs";

const bTree = new BinaryTree(
    new TreeNode(
        1,
        new TreeNode(
            2,
            new TreeNode(
                4,
            ), new TreeNode(
                5,
            ),
        ),
        new TreeNode(
            3,
        )
    )
);


function findDiameterOfTree(root) {
    let maxDiameter = 0;

    function findDepth(curr) {
        if (!curr) return 0;

        let leftDepth = findDepth(curr.left);
        let rightDepth = findDepth(curr.right);

        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

        return 1 + Math.max(leftDepth, rightDepth);
    }
    findDepth(root)

    return maxDiameter;
}


console.log("Diameter of a binary tree", findDiameterOfTree(bTree.root))