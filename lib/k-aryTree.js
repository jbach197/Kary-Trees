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
   }

module.exports = KaryTree;