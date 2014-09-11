var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(queueMethods);
  _.extend(newStack, {count: 0, removed: 0});

  return newStack;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.count + this.removed] = value;
    this.count++;
  },
  dequeue: function() {
    if (this.count) {
      this.count--;
      var temp = this[this.removed];
      delete this[this.removed];
      this.removed++;
      return temp;
    }
  },
  size: function() {
    return this.count;
  }
};


