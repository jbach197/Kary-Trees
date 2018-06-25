'use strict';

class KaryTree {
  constructor(root) {
    this.root = root;
  }

  breadthTraversal() {
    let results = [];
    let queue = [this.root]

    if(!this.root) {
      return null;
    }
    while(queue.length) {
      let node = queue.shift();
      for(let i = 0; i <= node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
  };
}

module.exports = KaryTree;