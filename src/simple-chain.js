const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  result: "",
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value !== undefined ? value : ""} )`);
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      position % 1 !== 0 ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.result = this.chain.join("~~");
    this.chain = [];
    return this.result;
  },
};

module.exports = {
  chainMaker,
};
