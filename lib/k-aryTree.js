'use strict';

class KaryTree {
  constructor(root) {
    this.root = root;
  }

  breadthTraversal() {
    if(!this.root){
      return null;
    }
    return this.breadthTraversalHelper(this.root);
    }

    breadthTraversalHelper(root){
      let results = [];
      let queue = [];
      queue.push(root);

      while(queue.length){
        queue.shift();
        for(let i = 0; i < root.children.length; i++){
          queue.push(root.children[i]);
        }
        results.push(root.value);
        root = queue[0];
      }
  
      return results;

      }

    depthTraversal() {
      if(!this.root){
        return null;
      }
      return this.depthTraversalHelper(this.root);
      }

    depthTraversalHelper(root) {
      let results = [];
      let stack = [];
      stack.push(root);

      while(stack.length){
     
        for(let i = 0; i < root.children.length; i++){
          stack.pop();
          stack.push(root.children[i])
        }
        results.push(root.value);
        root = stack[0]
        }
      }
    }
     

module.exports = KaryTree;