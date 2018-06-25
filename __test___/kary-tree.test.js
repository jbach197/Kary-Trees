'use strict';

const Node = require('../lib/node.js');
const KaryTree = require('../lib/k-aryTree.js');

describe('tree creation', () => {

  it('constructor()', () => {
    let value  = 'A';
    let tree = new KaryTree(value);
    expect(tree.root).toBe(value);
  });

})
