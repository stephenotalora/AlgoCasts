// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst (data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = new Node(data);
    } else {
      let next = this.head;
      
      this.head = node;
      this.head.next = next;
    }
  }

  size() {
    if (!this.head) return 0;

    let size = 0;
    let current = this.head;

    while (current) {
      ++size;
      current = current.next;
    }

    return size;
  }

  getFirst () {
    return this.head;
  }

  getLast () {
    if (!this.head) return null;
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    return current;
  }

  clear () {
    this.head = null;
  }
  
  removeFirst () {
    const current = this.head;
    
    this.head = this.head.next;
    current.next = null;

    return current;
  }

  removeLast () {
    if (!this.head) return null;
    if (this.size() === 1) return this.removeFirst();

    let slow = this.head;
    let fast = slow.next && slow.next.next;
    
    while (slow) {
      if (!fast) {
        const current = slow.next;
        slow.next = null;
        return current;
      }

      slow = slow.next;
      fast = slow.next && slow.next.next;
    }
  }

  insertLast (data) {
    const node = new Node(data);
    let current = this.getLast();

    if (!current) {
      this.head = node;
      return this.getFirst();
    }

    current.next = node;
    return current.next;
  }

  getAt (index) {
    if (index > this.size()) return null;
    if (!index) return this.getFirst();

    let currentIdx = 0;
    let current = this.head; 

    while (current) {
      if (currentIdx === index) return current;

      current = current.next;
      ++currentIdx;
    }

    return current;
  }

  removeAt (index) {
    if (!this.head || index > this.size() - 1) return null;

    if (!index) return this.removeFirst();
    if (index === this.size() - 1) return this.removeLast();

    const prev = this.getAt(index - 1);
    const current = this.getAt(index);
    const next = this.getAt(index + 1);

    current.next = null;
    prev.next = next;

    return current;
  }

  insertAt (data, index) {
    if (!index) return this.insertFirst(data);
    if (index === this.size() - 1 || index > this.size() - 1) {
      return this.insertLast(data);
    }

    const current = this.getAt(index - 1);
    current.next = new Node(data, current.next);

    return current.next;
  }

  forEach (cb) {
    if (!cb || typeof cb !== 'function') {
      throw new TypeError(`expected a function but instead received ${typeof cb}`);
    }

    let idx = 0;
    let current = this.head;

    while (current) {
      cb(current, idx);

      current = current.next;
      ++idx;
    }
  }

  *[Symbol.iterator]() {
    let current = this.head;
    
    while(current) {
      yield current;
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
