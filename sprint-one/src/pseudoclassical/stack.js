var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.store = {};
};


Stack.prototype.pop = function() {
  if (this.count) {
    var temp = this.store[this.count - 1];
    delete this.store[this.count - 1];
    this.count--;
    return temp;
  }
}
Stack.prototype.push = function(value) {
  this.store[this.count] = value;
  this.count++;
}
Stack.prototype.size = function() {
  return this.count;
}
