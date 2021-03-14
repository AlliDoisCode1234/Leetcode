// Problem: 
// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: []
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000




/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    // 1. Error checking
    
    if(!root || !targetSum) return false;
    if(root > targetSum) return false;
    
    
    
    // 2. Create variables needed
    
        // store paths
    const pathsThatAddUpToSum = [] // Final Solution
        // store current path
    const currentPathBeingExplored = [] // store the result of recursive path
    
    
    
    
    // 3. Call 'magic' function that gives us an answer
    
    findPaths(root, targetSum, pathsThatAddUpToSum, currentPathBeingExplored)
    
    
    // 4. Write 'magic' function 
    
    function findPaths(root, targetSum, pathsThatAddUpToSum, currentPathBeingExplored){
        // if we don't have a root, exit out of program
        if(!root) return currentPathBeingExplored;
        
        pathsThatAddUpToSum.push(root.val); // adding current node's value to the pathsThatAddUpToSum
        
        if(!root.left && !root.right && root.val === targetSum){
            currentPathBeingExplored.push(pathsThatAddUpToSum.slice()) // found a path that works
        }
        
        
        findPaths(root.left, targetSum - root.val, pathsThatAddUpToSum, currentPathBeingExplored) // Left Side
        findPaths(root.right, targetSum - root.val, pathsThatAddUpToSum, currentPathBeingExplored) // Right Side
        
        pathsThatAddUpToSum.pop() // Shoot back up the 'recursion' tree
        
        return currentPathBeingExplored
        
    }
    
    
    // 5. Return the answer that was asked for
    
    return findPaths(root, targetSum, [], []);
};


// Testcase:
// [5,4,8,11,null,13,4,7,2,null,null,5,1]
// 22