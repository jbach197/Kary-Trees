'use strict';

const Node = require('../lib/node.js');

describe('Node creation', () => {

  it('constructor() creates new node',() => {
    let value = 'A';
    let node = new Node(value);
    expect(node.value).toBe(value);
  });;

  it('appendChild() adds children',() => {
    let value = 'A';
    let node = new Node(value);
    
    node.children.push([1]);
    expect(node.children).toBe(1);
  });

});