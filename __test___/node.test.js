'use strict';

const Node = require('../lib/node.js');

describe('Node creation', () => {

  it('constructor() creates new node',() => {
    let value = 'A';
    let node = new Node(value);
    expect(node.value).toBe(value);
  });;

  it('appendChild() adds child',() => {
    let value = 'A';
    let node = new Node(value);
    
    node.appendChild(1);
    expect(node.children).toEqual([1]);
  });

  it('appendChild() adds children',() => {
    let value = 'A';
    let node = new Node(value);
    
    node.appendChild(1);
    node.appendChild(2);
    node.appendChild(3);
    expect(node.children).toEqual([1,2,3]);
  });

});