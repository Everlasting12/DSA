var kthSmallest = function(root, k) {
    let ans =[];

    function traverse(curr) {
        if(!curr) return;
        curr.left && traverse(curr.left);
        ans.push(curr.val);
        curr.right && traverse(curr.right);
    }

    traverse(root)

    return ans[k-1]
};
