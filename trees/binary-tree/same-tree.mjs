function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    

    const isSame = (leftTree, rightTree) =>{
        if(!leftTree && !rightTree) return true;
        if(!leftTree || !rightTree) return false;

        return leftTree.val === rightTree.val && isSame(leftTree.left, rightTree.left) && isSame(leftTree.right, rightTree.right)
    }
    return isSame(p, q)
};
