var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var removed = 0;

  // Implement the mehods below
  someInstance.enqueue = function(value) {
    storage[count + removed] = value;
    count++;
  };

  someInstance.dequeue = function(){
    if (count) {
      count--;
      var temp = storage[removed];
      delete storage[removed];
      removed++;
      return temp;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
