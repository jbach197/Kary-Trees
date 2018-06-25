'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  append(value) {
    this.children.push(new Node(value));
  }
}

module.exports = Node;