
var MyStack = function () {
    this.q = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let n = this.q.length;

    for (let i = 0; i < n - 1; i++) {
        let front = this.q.shift()
        this.push(front);
    }

    return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let n = this.q.length;

    for (let i = 0; i < n - 1; i++) {
        let front = this.q.shift()
        this.push(front);
    }

    const last = this.q.shift();
    this.push(last)

    return last;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */