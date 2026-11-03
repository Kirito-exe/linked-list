class Node {
  value = null;
  nextNode = null;
  constructor(data) {
    this.value = data;
  }
}
class LinkedList {
  #head = undefined;
  #tail = undefined;
  constructor() {
    this.#head = new Node("Head");
    this.#tail = new Node("Tail");
  }
  append(value) {
    let item = this.#head.nextNode;
    if (item === null) {
      let current = new Node(value);
      this.#head.nextNode = current;
      return;
    }
    while (item !== null) {
      if (item.nextNode === null) {
        let current = new Node(value);
        item.nextNode = current;

        this.#tail.nextNode = item.nextNode;
        break;
      }
      item = item.nextNode;
    }
  }
  prepend(value) {
    const item = this.#head.nextNode;
    const current = new Node(value);
    current.nextNode = item;
    this.#head.nextNode = current;
  }
  size() {
    let count = 0;
    for (let item = this.#head.nextNode; item !== null; item = item.nextNode)
      count++;
    return count;
  }
  head() {
    return this.#head.nextNode.value;
  }
  tail() {
    return this.#tail.nextNode.value;
  }
  at(index) {
    let item = this.#head.nextNode;
    let i = 0;
    while (item !== null) {
      if (i === index) {
        return item.value;
      }
      item = item.nextNode;
      i++;
    }
    return undefined;
  }
  pop() {
    if (this.#head.nextNode === null) return undefined;
    let val = this.#head.nextNode;
    let nextHead = val.nextNode;
    this.#head.nextNode = nextHead;
    return val.value;
  }
  contains(value) {
    let item = this.#head.nextNode;
    while (item !== null) {
      if (item.value === value) {
        return true;
      }
      item = item.nextNode;
    }
    return false;
  }
  findIndex(value) {
    let item = this.#head.nextNode;
    let i = 0;
    while (item !== null) {
      if (item.value === value) {
        return i;
      }
      item = item.nextNode;
      i++;
    }
    return -1;
  }
  toString() {
    let item = this.#head.nextNode;
    let result = "";
    if (item === null) return result;
    while (item !== null) {
      result += `(${item.value})->`;
      item = item.nextNode;
    }
    result += "null";
    return result;
  }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
