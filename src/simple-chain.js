const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length || isNaN(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultChain = '';
        for (let i = 0; i < this.chain.length; i++) {
            if (i === 0) resultChain = this.chain[i];
            else resultChain += `~~${this.chain[i]}`;
        }
        this.chain = [];
        return resultChain;
  }
};

module.exports = {
  chainMaker
};
