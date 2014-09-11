var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.count = 0;

  return newStack;
};

var stackMethods = {
  pop: function() {
    if (this.count) {
      var temp = this[this.count - 1];
      delete this[this.count - 1];
      this.count--;
      return temp;
    }
  },
  push: function(value) {
    this[this.count] = value;
    this.count++;
  },
  size: function() {
    return this.count;
  }
};


