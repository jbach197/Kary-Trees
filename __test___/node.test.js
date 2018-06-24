'use strict';

const Node = require('../lib/node.js');

describe('Node creation', () => {

  it('constructor() creates new node',() => {
    let value = 'A';
    let node = new Node(value);
    expect(node.value).toBe(value);
  });

})