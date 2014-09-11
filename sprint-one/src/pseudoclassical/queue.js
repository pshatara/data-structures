var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.removed = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.count + this.removed] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count) {
    this.count--;
    var temp = this[this.removed];
    delete this[this.removed];
    this.removed++;
    return temp;
  }
}

Queue.prototype.size = function() {
  return this.count;
}

