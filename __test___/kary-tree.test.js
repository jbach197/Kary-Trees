'use strict';

const Node = require('../lib/node.js');
const KaryTree = require('../lib/k-aryTree.js');

describe('tree creation', () => {

  it('constructor()', () => {
    let value  = 'A';
    let tree = new KaryTree(value);
    expect(tree.root).toBe(value);
  });

describe('breadthTraversal', () => {

  it('breadthTraversal() returns null if no root', () => {
    const tree = new KaryTree;
    let traverse = tree.breadthTraversal()
    expect(traverse).toBe(null);
  });

  it('breadthTraversal() is in correct order', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    
    const tree = new KaryTree(one);
    
    one.appendChild(two);
    one.appendChild(three);
    three.appendChild(four);
    two.appendChild(five);
    two.appendChild(six);
    two.appendChild(seven);
    four.appendChild(eight);
    seven.appendChild(nine);  

    let traverse = tree.breadthTraversal()
    expect(traverse).toEqual([1,2,3,5,6,7,4,9,8]);
  });
});
})
