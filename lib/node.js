'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  appendChild(value) {
    this.children.push(value);
  }
}

module.exports = Node;