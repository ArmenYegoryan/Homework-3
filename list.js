function Node (value) {
    this.value = value,
    this.next = null,
    this.prev = null
}

function List () {
    this.head = null,
    this.tail = null,
    this.push = function (val) {
        const node = new Node(val);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }
    this.pop = function () {
        if(this.tail === null) {
            console.log("List is empty !!!");
            return null;
        } else {
            const temp = this.tail.value;
            this.tail = this.tail.prev;
            this.tail.next = null;
            return temp;
        }
    }
    this.shift = function () {
        if(this.head === null) {
            console.log("List is empty !!!");
            return null;
        } else if(this.head === this.tail) {
            const temp = this.head.value;
            this.head = null;
            this.tail = null;
            return temp;
        } else {
            const temp = this.head.value;
            this.head = this.head.next;
            this.head.prev = null;
            return temp;
        }
    }
    this.unshift = function (val) {
        const node = new Node(val);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }
    this.count = function () {
        if(this.head === null) {
            return 0;
        } else {
            let count = 1;
            let temp = this.head;
            while(temp.next !== null) {
                ++count;
                temp = temp.next;
            }
            return count;
        }
    }
    this.delete = function (val) {
        let count = 1;
        let temp = this.head;
        while(temp.value !== val) {
            ++count;
            temp = temp.next;
        }
        if(count > this.count()) {
            console.log("Your value isn't in List");
        } else {
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
        }
    }
}

// const list = new List();
// list.push(6);
// console.log(list.count());
// list.push(8);
// list.push(10);
// console.log(list.count());
// list.unshift(4);
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.count());
// console.log(list);
// list.push(11);
// list.push(13);
// console.log(list);
// list.delete(8);
// console.log(list);
const list = new List();
list.push(6);
console.log(list.count() === 1);
const item = list.shift();
console.log(item === 6);